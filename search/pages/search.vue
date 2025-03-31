<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Search Header -->
    <div class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Search Hotels</h1>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-8 lg:flex-row">
        <!-- Filters Sidebar -->
        <div class="lg:w-1/4">
          <HotelFilters
            :filters="filters"
            @update:filters="updateFilters"
            :available-amenities="availableAmenities"
          />
        </div>

        <!-- Hotel Listings -->
        <div class="lg:w-3/4">
          <!-- Sort Options -->
          <div class="mb-6 rounded-lg bg-white p-4 shadow">
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-700">Found {{ hotels.length }} hotels</p>
              <select
                v-model="sortBy"
                class="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Sort by</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Rating: High to Low</option>
              </select>
            </div>
          </div>

          <!-- Hotel Grid -->
          <HotelListing :hotels="hotels" @view-details="navigateToHotel" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch, computed } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import type { Hotel, HotelFilters, HotelResponse } from '../types/hotel'

  const router = useRouter()
  const route = useRoute()
  const filters = computed(() => route.query as HotelFilters)

  const hotels = ref<Hotel[]>([])
  const sortBy = ref<string>('')

  // Get unique amenities from all hotels
  const availableAmenities = ref<string[]>([])

  // Fetch hotels
  const fetchHotels = async () => {
    try {
      const query = new URLSearchParams()
      if (filters.value.minPrice) query.append('minPrice', filters.value.minPrice.toString())
      if (filters.value.maxPrice) query.append('maxPrice', filters.value.maxPrice.toString())
      if (filters.value.location) query.append('location', filters.value.location.toString())
      if (sortBy.value) query.append('sort', sortBy.value)

      const response = await fetch(`/api/hotels?${query.toString()}`)
      const data: HotelResponse = await response.json()
      hotels.value = data.hotels
    } catch (error) {
      console.error('Error fetching hotels:', error)
    }
  }

  // Watch for filter changes
  watch(filters, () => {
    fetchHotels()
  })

  function updateFilters(filters: HotelFilters) {
    router.push({
      query: {
        ...route.query,
        ...filters,
      },
    })
  }

  // Navigate to hotel details
  const navigateToHotel = (id: number) => {
    router.push(`/hotels/${id}`)
  }

  onMounted(async () => {
    // Fetch initial hotels
    await fetchHotels()

    // Get unique amenities
    const response = await fetch('/api/hotels')
    const data: HotelResponse = await response.json()
    const allAmenities = data.hotels.flatMap((hotel) => hotel.amenities)
    availableAmenities.value = [...new Set(allAmenities)]
  })
</script>
