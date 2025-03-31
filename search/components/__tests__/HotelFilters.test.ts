import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HotelFilters from '../HotelFilters.vue'
import type { HotelFilters as HotelFiltersType } from '../../types/hotel'

describe('HotelFilters', () => {
  const defaultProps = {
    filters: {
      location: '',
      minPrice: '',
      maxPrice: '',
      rating: '',
      amenities: [],
    },
    availableAmenities: ['Pool', 'Spa', 'Restaurant', 'Free WiFi'],
  }

  it('renders properly with default props', () => {
    const wrapper = mount(HotelFilters, {
      props: defaultProps,
    })

    // Check if all filter sections are rendered
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('input[type="number"]').exists()).toBe(true)
    expect(wrapper.find('select').exists()).toBe(true)
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('initializes with provided filter values', () => {
    const initialFilters: HotelFiltersType = {
      location: 'Paris',
      minPrice: '100',
      maxPrice: '300',
      rating: '4',
      amenities: ['Pool', 'Spa'],
    }

    const wrapper = mount(HotelFilters, {
      props: {
        ...defaultProps,
        filters: initialFilters,
      },
    })

    // Check if the values are properly set
    expect(wrapper.find('input[type="text"]').element.value).toBe('Paris')
    expect(wrapper.find('input[type="number"]').element.value).toBe('100')
    expect(wrapper.find('select').element.value).toBe('4')
    expect(wrapper.findAll('input[type="checkbox"]')[0].element.checked).toBe(true)
  })

  it('emits update event when apply filters is clicked', async () => {
    const wrapper = mount(HotelFilters, {
      props: defaultProps,
    })

    // Set some filter values
    await wrapper.find('input[type="text"]').setValue('Paris')
    await wrapper.find('input[type="number"]').setValue('200')

    // Click apply button
    await wrapper.find('button').trigger('click')

    // Check if the event was emitted with correct data
    const emitted = wrapper.emitted('update:filters')
    expect(emitted).toBeTruthy()
    expect(emitted![0][0]).toEqual({
      location: 'Paris',
      minPrice: 200,
      maxPrice: '',
      rating: '',
      amenities: [],
    })
  })

  it('updates local filters when props change', async () => {
    const wrapper = mount(HotelFilters, {
      props: defaultProps,
    })

    // Set initial values
    await wrapper.find('input[type="text"]').setValue('Paris')

    // Update props
    await wrapper.setProps({
      filters: {
        ...defaultProps.filters,
        location: 'London',
      },
    })

    // Check if local filters were updated
    expect(wrapper.find('input[type="text"]').element.value).toBe('London')
  })

  it('renders all available amenities as checkboxes', () => {
    const amenities = ['Pool', 'Spa', 'Restaurant', 'Free WiFi', 'Gym']
    const wrapper = mount(HotelFilters, {
      props: {
        ...defaultProps,
        availableAmenities: amenities,
      },
    })

    const checkboxes = wrapper.findAll('input[type="checkbox"]')
    expect(checkboxes).toHaveLength(amenities.length)

    // Check if all amenities are rendered
    amenities.forEach((amenity) => {
      expect(wrapper.text()).toContain(amenity)
    })
  })

  it('maintains filter values when applying filters', async () => {
    const wrapper = mount(HotelFilters, {
      props: defaultProps,
    })

    // Set multiple filter values
    await wrapper.find('input[type="text"]').setValue('Paris')
    await wrapper.find('input[type="number"]').setValue('200')
    await wrapper.find('select').setValue('4')
    await wrapper.find('input[type="checkbox"]').setValue(true)

    // Click apply button
    await wrapper.find('button').trigger('click')

    // Check if all values are included in the emitted event
    const emitted = wrapper.emitted('update:filters')
    expect(emitted![0][0]).toEqual({
      location: 'Paris',
      minPrice: 200,
      maxPrice: '',
      rating: '4',
      amenities: ['Pool'],
    })
  })
})
