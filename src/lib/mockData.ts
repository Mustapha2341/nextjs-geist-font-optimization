export interface Hotel {
  id: string
  name: string
  location: string
  rating: number
  reviewCount: number
  price: number
  originalPrice?: number
  imageUrl?: string
  hasDeals?: boolean
  dealText?: string
  description: string
  amenities: string[]
  roomTypes: RoomType[]
  images: string[]
}

export interface RoomType {
  id: string
  name: string
  description: string
  price: number
  maxGuests: number
  amenities: string[]
  imageUrl: string
}

export const mockHotels: Hotel[] = [
  {
    id: "1",
    name: "Grand Plaza Hotel",
    location: "New York City, NY",
    rating: 9.2,
    reviewCount: 2847,
    price: 299,
    originalPrice: 399,
    hasDeals: true,
    dealText: "30% Off",
    description: "Experience luxury in the heart of Manhattan at Grand Plaza Hotel. Our elegant rooms offer stunning city views, world-class amenities, and exceptional service. Located just steps from Central Park and Fifth Avenue shopping.",
    amenities: ["Free WiFi", "Swimming Pool", "Fitness Center", "Spa", "Restaurant", "Room Service", "Business Center", "Concierge"],
    roomTypes: [
      {
        id: "1-1",
        name: "Deluxe City View",
        description: "Spacious room with panoramic city views",
        price: 299,
        maxGuests: 2,
        amenities: ["City View", "King Bed", "Mini Bar", "Work Desk"],
        imageUrl: "https://placehold.co/600x400?text=Deluxe+City+View+Room+with+Modern+Amenities"
      }
    ],
    images: [
      "https://placehold.co/800x600?text=Grand+Plaza+Hotel+Luxury+Lobby+Interior",
      "https://placehold.co/800x600?text=Elegant+Hotel+Room+with+City+Views",
      "https://placehold.co/800x600?text=Rooftop+Pool+with+Manhattan+Skyline"
    ]
  },
  {
    id: "2",
    name: "Seaside Resort & Spa",
    location: "Miami Beach, FL",
    rating: 8.9,
    reviewCount: 1923,
    price: 189,
    hasDeals: true,
    dealText: "Early Bird",
    description: "Relax and unwind at our beachfront resort featuring pristine white sand beaches, crystal-clear waters, and world-class spa facilities. Perfect for romantic getaways and family vacations.",
    amenities: ["Beach Access", "Spa", "Multiple Restaurants", "Pool Bar", "Water Sports", "Kids Club", "Tennis Court"],
    roomTypes: [
      {
        id: "2-1",
        name: "Ocean View Suite",
        description: "Luxurious suite with direct ocean views",
        price: 189,
        maxGuests: 4,
        amenities: ["Ocean View", "Balcony", "Separate Living Area", "Mini Kitchen"],
        imageUrl: "https://placehold.co/600x400?text=Ocean+View+Suite+with+Private+Balcony"
      }
    ],
    images: [
      "https://placehold.co/800x600?text=Beachfront+Resort+with+Palm+Trees+and+Ocean",
      "https://placehold.co/800x600?text=Luxury+Spa+Treatment+Room+with+Ocean+Views",
      "https://placehold.co/800x600?text=Resort+Pool+Area+with+Tropical+Landscaping"
    ]
  },
  {
    id: "3",
    name: "Mountain Lodge Retreat",
    location: "Aspen, CO",
    rating: 9.0,
    reviewCount: 1456,
    price: 349,
    description: "Escape to our cozy mountain lodge nestled in the Rocky Mountains. Enjoy skiing in winter, hiking in summer, and year-round breathtaking mountain views.",
    amenities: ["Ski-in/Ski-out", "Fireplace", "Mountain Views", "Hot Tub", "Restaurant", "Bar", "Fitness Center"],
    roomTypes: [
      {
        id: "3-1",
        name: "Mountain View Cabin",
        description: "Rustic cabin with panoramic mountain views",
        price: 349,
        maxGuests: 6,
        amenities: ["Mountain View", "Fireplace", "Full Kitchen", "Private Deck"],
        imageUrl: "https://placehold.co/600x400?text=Cozy+Mountain+Cabin+with+Fireplace"
      }
    ],
    images: [
      "https://placehold.co/800x600?text=Mountain+Lodge+with+Snow+Capped+Peaks",
      "https://placehold.co/800x600?text=Rustic+Lodge+Interior+with+Stone+Fireplace",
      "https://placehold.co/800x600?text=Ski+Slopes+and+Mountain+Views"
    ]
  },
  {
    id: "4",
    name: "Downtown Business Hotel",
    location: "Chicago, IL",
    rating: 8.5,
    reviewCount: 3241,
    price: 159,
    originalPrice: 199,
    hasDeals: true,
    dealText: "Business Deal",
    description: "Modern business hotel in downtown Chicago, perfect for corporate travelers. Features state-of-the-art meeting facilities and easy access to the financial district.",
    amenities: ["Business Center", "Meeting Rooms", "Free WiFi", "Fitness Center", "Restaurant", "Airport Shuttle"],
    roomTypes: [
      {
        id: "4-1",
        name: "Executive Room",
        description: "Spacious room designed for business travelers",
        price: 159,
        maxGuests: 2,
        amenities: ["Work Desk", "Ergonomic Chair", "High-Speed Internet", "Coffee Maker"],
        imageUrl: "https://placehold.co/600x400?text=Modern+Executive+Business+Room"
      }
    ],
    images: [
      "https://placehold.co/800x600?text=Modern+Downtown+Business+Hotel+Exterior",
      "https://placehold.co/800x600?text=Professional+Meeting+Room+with+City+Views",
      "https://placehold.co/800x600?text=Executive+Lounge+with+Business+Amenities"
    ]
  },
  {
    id: "5",
    name: "Historic Boutique Inn",
    location: "Charleston, SC",
    rating: 8.7,
    reviewCount: 987,
    price: 229,
    description: "Step back in time at our charming historic inn located in Charleston's French Quarter. Featuring antique furnishings, southern hospitality, and award-winning cuisine.",
    amenities: ["Historic Building", "Fine Dining", "Courtyard Garden", "Concierge", "Valet Parking", "Pet Friendly"],
    roomTypes: [
      {
        id: "5-1",
        name: "Heritage Suite",
        description: "Elegant suite with period furnishings",
        price: 229,
        maxGuests: 2,
        amenities: ["Antique Furnishings", "High Ceilings", "Garden View", "Marble Bathroom"],
        imageUrl: "https://placehold.co/600x400?text=Historic+Heritage+Suite+with+Antique+Decor"
      }
    ],
    images: [
      "https://placehold.co/800x600?text=Historic+Charleston+Inn+with+Southern+Architecture",
      "https://placehold.co/800x600?text=Elegant+Courtyard+Garden+with+Fountain",
      "https://placehold.co/800x600?text=Fine+Dining+Restaurant+with+Historic+Charm"
    ]
  },
  {
    id: "6",
    name: "Desert Oasis Resort",
    location: "Scottsdale, AZ",
    rating: 9.1,
    reviewCount: 2156,
    price: 279,
    description: "Luxury desert resort featuring championship golf courses, world-class spa, and stunning Sonoran Desert views. Perfect for golf enthusiasts and spa lovers.",
    amenities: ["Golf Course", "Spa", "Multiple Pools", "Tennis Courts", "Fine Dining", "Desert Tours", "Fitness Center"],
    roomTypes: [
      {
        id: "6-1",
        name: "Desert View Villa",
        description: "Private villa with desert and mountain views",
        price: 279,
        maxGuests: 4,
        amenities: ["Desert View", "Private Pool", "Outdoor Patio", "Full Kitchen"],
        imageUrl: "https://placehold.co/600x400?text=Luxury+Desert+Villa+with+Mountain+Views"
      }
    ],
    images: [
      "https://placehold.co/800x600?text=Desert+Resort+with+Cactus+and+Mountain+Backdrop",
      "https://placehold.co/800x600?text=Championship+Golf+Course+in+Desert+Setting",
      "https://placehold.co/800x600?text=Luxury+Spa+with+Desert+Stone+Architecture"
    ]
  }
]

export const getHotelById = (id: string): Hotel | undefined => {
  return mockHotels.find(hotel => hotel.id === id)
}

export const searchHotels = (query?: string): Hotel[] => {
  if (!query) return mockHotels
  
  const lowercaseQuery = query.toLowerCase()
  return mockHotels.filter(hotel => 
    hotel.name.toLowerCase().includes(lowercaseQuery) ||
    hotel.location.toLowerCase().includes(lowercaseQuery)
  )
}
