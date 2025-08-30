import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import FilterSidebar from '@/components/FilterSidebar'
import HotelCard from '@/components/HotelCard'
import { mockHotels } from '@/lib/mockData'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />
      
      {/* Search Bar */}
      <SearchBar />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className="lg:w-1/4">
            <div className="sticky top-4">
              <FilterSidebar />
            </div>
          </aside>
          
          {/* Hotel Listings */}
          <main className="lg:w-3/4">
            {/* Results Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Featured Hotels
              </h2>
              <p className="text-gray-600">
                {mockHotels.length} properties found
              </p>
            </div>
            
            {/* Hotel Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockHotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  id={hotel.id}
                  name={hotel.name}
                  location={hotel.location}
                  rating={hotel.rating}
                  reviewCount={hotel.reviewCount}
                  price={hotel.price}
                  originalPrice={hotel.originalPrice}
                  hasDeals={hotel.hasDeals}
                  dealText={hotel.dealText}
                />
              ))}
            </div>
            
            {/* Load More Section */}
            <div className="mt-12 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Load More Hotels
              </button>
            </div>
          </main>
        </div>
      </div>
      
      {/* Additional Sections */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose HotelBooking?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make it easy to find and book the perfect accommodation for your next trip
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-semibold mb-2">2M+ Properties</h3>
              <p className="text-gray-600">
                Choose from millions of hotels, apartments, and unique stays worldwide
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Verified Reviews</h3>
              <p className="text-gray-600">
                Read authentic reviews from real guests to make informed decisions
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
              <p className="text-gray-600">
                Book with confidence using our secure payment system and protection
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Destinations */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-gray-600">
              Discover amazing places around the world
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'New York', properties: '1,234 properties' },
              { name: 'London', properties: '987 properties' },
              { name: 'Paris', properties: '756 properties' },
              { name: 'Tokyo', properties: '543 properties' },
              { name: 'Dubai', properties: '432 properties' },
              { name: 'Barcelona', properties: '321 properties' },
              { name: 'Rome', properties: '298 properties' },
              { name: 'Amsterdam', properties: '267 properties' }
            ].map((destination, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-semibold text-lg mb-1">{destination.name}</h3>
                <p className="text-gray-600 text-sm">{destination.properties}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
