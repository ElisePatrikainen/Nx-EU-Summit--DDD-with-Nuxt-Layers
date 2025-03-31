import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HotelListing from '../HotelListing.vue'
import type { Hotel } from '../../types/hotel'

describe('HotelListing', () => {
  const mockHotels: Hotel[] = [
    {
      id: 1,
      name: 'Test Hotel 1',
      location: 'Paris, France',
      description: 'A beautiful hotel in Paris',
      price: 200,
      rating: 4.5,
      reviews: 100,
      image: 'https://example.com/image1.jpg',
      amenities: ['Pool', 'Spa'],
      rooms: ['Standard', 'Deluxe'],
    },
    {
      id: 2,
      name: 'Test Hotel 2',
      location: 'London, UK',
      description: 'A luxury hotel in London',
      price: 300,
      rating: 4.8,
      reviews: 150,
      image: 'https://example.com/image2.jpg',
      amenities: ['Gym', 'Restaurant'],
      rooms: ['Suite', 'Executive'],
    },
  ]

  it('renders properly with hotels data', () => {
    const wrapper = mount(HotelListing, {
      props: {
        hotels: mockHotels,
      },
    })

    // Check if all hotels are rendered
    const hotelCards = wrapper.findAll('.bg-white.rounded-lg')
    expect(hotelCards).toHaveLength(mockHotels.length)

    // Check if hotel details are displayed correctly
    mockHotels.forEach((hotel, index) => {
      const card = hotelCards[index]
      expect(card.find('img').attributes('src')).toBe(hotel.image)
      expect(card.find('img').attributes('alt')).toBe(hotel.name)
      expect(card.find('h3').text()).toBe(hotel.name)
      expect(card.find('.text-2xl').text()).toBe(`$${hotel.price}`)
    })
  })

  it('renders empty state when no hotels provided', () => {
    const wrapper = mount(HotelListing, {
      props: {
        hotels: [],
      },
    })

    const hotelCards = wrapper.findAll('.bg-white.rounded-lg')
    expect(hotelCards).toHaveLength(0)
  })

  it('emits view-details event when view details button is clicked', async () => {
    const wrapper = mount(HotelListing, {
      props: {
        hotels: mockHotels,
      },
    })

    // Click view details button for first hotel
    await wrapper.findAll('button')[0].trigger('click')

    // Check if event was emitted with correct hotel id
    const emitted = wrapper.emitted('view-details')
    expect(emitted).toBeTruthy()
    expect(emitted![0][0]).toBe(mockHotels[0].id)
  })

  // it('displays rating and review count correctly', () => {
  //   const wrapper = mount(HotelListing, {
  //     props: {
  //       hotels: mockHotels
  //     }
  //   })

  //   mockHotels.forEach((hotel, index) => {
  //     const ratingElement = wrapper.findAll('.text-yellow-400')[index]
  //     const reviewCount = wrapper.findAll('.text-sm.text-gray-500')[index]

  //     expect(ratingElement.exists()).toBe(true)
  //     expect(reviewCount.text()).toBe(`(${hotel.reviews})`)
  //   })
  // })

  // it('displays location and description correctly', () => {
  //   const wrapper = mount(HotelListing, {
  //     props: {
  //       hotels: mockHotels
  //     }
  //   })

  //   mockHotels.forEach((hotel, index) => {
  //     const locationElement = wrapper.findAll('.text-sm.text-gray-500')[index]
  //     const descriptionElement = wrapper.findAll('.text-sm.text-gray-600')[index]

  //     expect(locationElement.text()).toBe(hotel.location)
  //     expect(descriptionElement.text()).toBe(hotel.description)
  //   })
  // })
})
