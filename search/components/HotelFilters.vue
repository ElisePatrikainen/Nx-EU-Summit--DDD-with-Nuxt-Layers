<template>
  <div class="rounded-lg bg-white p-6 shadow">
    <h2 class="mb-4 text-lg font-semibold text-gray-900">Filters/s</h2>

    <!-- Location -->
    <div class="mb-6">
      <h3 class="mb-2 text-sm font-medium text-gray-700">Location</h3>
      <input
        type="text"
        v-model="localFilters.location"
        placeholder="Enter city or country"
        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    <!-- Price Range -->
    <div class="mb-6">
      <h3 class="mb-2 text-sm font-medium text-gray-700">Price Range</h3>
      <div class="flex items-center space-x-4">
        <input
          type="number"
          v-model="localFilters.minPrice"
          placeholder="Min"
          class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <span class="text-gray-500">-</span>
        <input
          type="number"
          v-model="localFilters.maxPrice"
          placeholder="Max"
          class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>

    <!-- Rating -->
    <div class="mb-6">
      <h3 class="mb-2 text-sm font-medium text-gray-700">Minimum Rating</h3>
      <select
        v-model="localFilters.rating"
        class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">Any</option>
        <option value="4">4+ Stars</option>
        <option value="4.5">4.5+ Stars</option>
        <option value="5">5 Stars</option>
      </select>
    </div>

    <!-- Amenities -->
    <div class="mb-6">
      <h3 class="mb-2 text-sm font-medium text-gray-700">Amenities</h3>
      <div class="space-y-2">
        <label v-for="amenity in availableAmenities" :key="amenity" class="flex items-center">
          <input
            type="checkbox"
            v-model="localFilters.amenities"
            :value="amenity"
            class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span class="ml-2 text-sm text-gray-700">{{ amenity }}</span>
        </label>
      </div>
    </div>

    <!-- Apply Filters Button -->
    <button
      @click="applyFilters"
      class="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Apply Filters
    </button>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import type { HotelFilters } from '../types/hotel'

  interface Props {
    filters: HotelFilters
    availableAmenities: string[]
  }

  const props = defineProps<Props>()

  const emit = defineEmits<{
    'update:filters': [filters: HotelFilters]
  }>()

  // Create a local copy of filters to prevent immediate updates
  const localFilters = ref<HotelFilters>({ ...props.filters })

  // Watch for changes in props.filters to update localFilters
  watch(
    () => props.filters,
    (newFilters) => {
      localFilters.value = { ...newFilters }
    },
    { deep: true }
  )

  // Apply filters and emit the update
  const applyFilters = () => {
    emit('update:filters', { ...localFilters.value })
  }
</script>
