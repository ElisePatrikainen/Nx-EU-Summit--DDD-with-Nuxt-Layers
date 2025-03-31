<template>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div
      v-for="hotel in hotels"
      :key="hotel.id"
      class="overflow-hidden rounded-lg bg-white shadow transition-shadow duration-300 hover:shadow-lg"
    >
      <img :src="hotel.image" :alt="hotel.name" class="h-48 w-full object-cover" />
      <div class="p-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-gray-900">{{ hotel.name }}</h3>
          <div class="flex items-center">
            <span class="text-yellow-400">★</span>
            <span class="ml-1 text-sm text-gray-600">{{ hotel.rating }}</span>
            <span class="ml-1 text-sm text-gray-500">({{ hotel.reviews }})</span>
          </div>
        </div>
        <p class="mt-1 text-sm text-gray-500">{{ hotel.location }}</p>
        <p class="mt-2 line-clamp-2 text-sm text-gray-600">{{ hotel.description }}</p>
        <div class="mt-4 flex items-center justify-between">
          <span class="text-2xl font-bold text-blue-600">${{ hotel.price }}</span>
          <button
            @click="$emit('view-details', hotel.id)"
            class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Hotel } from '../types/hotel'

  interface Props {
    hotels: Hotel[]
  }

  defineProps<Props>()

  defineEmits<{
    'view-details': [id: number]
  }>()
</script>
