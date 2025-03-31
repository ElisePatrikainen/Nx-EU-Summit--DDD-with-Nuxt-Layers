<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="fixed z-50 w-full bg-white shadow-sm">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-shrink-0">
            <h1 class="text-2xl font-bold text-blue-600">HotelBook</h1>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-center space-x-4">
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                >Home</a
              >
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                >Properties</a
              >
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                >About</a
              >
              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                >Contact</a
              >
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="relative overflow-hidden bg-white">
      <div class="mx-auto max-w-7xl">
        <div
          class="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32"
        >
          <main
            class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <h1
                class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span class="block">Find Your Perfect</span>
                <span class="block text-blue-600">Hotel Stay</span>
              </h1>
              <p
                class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
              >
                Discover exceptional hotels worldwide. Book with confidence and enjoy exclusive
                deals on luxury accommodations.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>

    <!-- Search Section -->
    <div class="bg-white py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-lg bg-white p-6 shadow-lg">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Location</label>
              <input
                v-model="location"
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Where are you going?"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Check-in</label>
              <input
                type="date"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Check-out</label>
              <input
                type="date"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div class="flex items-end">
              <button
                @click="launchSearch"
                class="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured Properties -->
    <div class="bg-gray-50 py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="mb-8 text-3xl font-extrabold text-gray-900">Featured Properties</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <!-- Property Card 1 -->
          <div class="overflow-hidden rounded-lg bg-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Luxury Hotel"
              class="h-48 w-full object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">Luxury Resort & Spa</h3>
              <p class="mt-2 text-gray-600">Bali, Indonesia</p>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-2xl font-bold text-blue-600">$299/night</span>
                <button class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <!-- Property Card 2 -->
          <div class="overflow-hidden rounded-lg bg-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Boutique Hotel"
              class="h-48 w-full object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">Boutique Hotel</h3>
              <p class="mt-2 text-gray-600">Paris, France</p>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-2xl font-bold text-blue-600">$199/night</span>
                <button class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <!-- Property Card 3 -->
          <div class="overflow-hidden rounded-lg bg-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Beach Resort"
              class="h-48 w-full object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">Beach Resort</h3>
              <p class="mt-2 text-gray-600">Maldives</p>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-2xl font-bold text-blue-600">$399/night</span>
                <button class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 class="mb-4 text-lg font-semibold text-white">HotelBook</h3>
            <p class="text-gray-400">Find your perfect stay with us.</p>
          </div>
          <div>
            <h4 class="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Properties</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="mb-4 text-lg font-semibold text-white">Support</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 class="mb-4 text-lg font-semibold text-white">Contact Us</h4>
            <ul class="space-y-2">
              <li class="text-gray-400">Email: info@hotelbook.com</li>
              <li class="text-gray-400">Phone: +1 (555) 123-4567</li>
              <li class="text-gray-400">Address: 123 Hotel Street</li>
            </ul>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-700 pt-8">
          <p class="text-center text-gray-400">&copy; 2024 HotelBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  const location = ref('')

  function launchSearch() {
    navigateTo({
      path: '/search',
      query: {
        location: location.value,
      },
    })
  }
</script>

<style>
  /* Add any custom styles here */
</style>
