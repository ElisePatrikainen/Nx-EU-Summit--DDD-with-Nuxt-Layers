import { defineEventHandler, readBody } from 'h3'
import hotelsData from '../data/hotels.json'

export default defineEventHandler(async (event) => {
  // Get query parameters
  const query = getQuery(event)

  // Get all hotels
  let hotels = hotelsData.hotels

  // Filter by location if provided
  if (query.location) {
    hotels = hotels.filter((hotel) =>
      hotel.location.toLowerCase().includes(query.location.toLowerCase())
    )
  }

  // Filter by price range if provided
  if (query.minPrice) {
    hotels = hotels.filter((hotel) => hotel.price >= Number(query.minPrice))
  }
  if (query.maxPrice) {
    hotels = hotels.filter((hotel) => hotel.price <= Number(query.maxPrice))
  }

  // Sort by price if requested
  if (query.sort === 'price-asc') {
    hotels.sort((a, b) => a.price - b.price)
  } else if (query.sort === 'price-desc') {
    hotels.sort((a, b) => b.price - a.price)
  }

  // Get a single hotel by ID if provided
  if (query.id) {
    const hotel = hotels.find((h) => h.id === Number(query.id))
    if (!hotel) {
      throw createError({
        statusCode: 404,
        message: 'Hotel not found',
      })
    }
    return hotel
  }

  return {
    hotels,
    total: hotels.length,
  }
})
