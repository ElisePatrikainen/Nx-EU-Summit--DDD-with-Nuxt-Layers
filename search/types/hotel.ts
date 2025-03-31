export interface Hotel {
  id: number
  name: string
  location: string
  description: string
  price: number
  rating: number
  reviews: number
  image: string
  amenities: string[]
  rooms: string[]
}

export interface HotelFilters {
  location?: string
  minPrice?: string | number
  maxPrice?: string | number
  rating?: string | number
  amenities?: string[]
}

export interface HotelResponse {
  hotels: Hotel[]
  total: number
}
