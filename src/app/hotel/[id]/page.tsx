import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { getHotelById } from '@/lib/mockData'
import BookingForm from '@/components/BookingForm'

interface HotelDetailPageProps {
  params: {
    id: string
  }
}

export default function HotelDetailPage({ params }: HotelDetailPageProps) {
  const hotel = getHotelById(params.id)
  
  if (!hotel) {
    notFound()
  }

  const getRatingText = (rating: number) => {
    if (rating >= 9) return "Exceptional"
    if (rating >= 8) return "Excellent"
    if (rating >= 7) return "Very Good"
    if (rating >= 6) return "Good"
    return "Fair"
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 9) return "bg-green-600"
    if (rating >= 8) return "bg-green-500"
    if (rating >= 7) return "bg-blue-500"
    if (rating >= 6) return "bg-yellow-500"
    return "bg-gray-500"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900">{hotel.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hotel Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{hotel.name}</h1>
                  <p className="text-gray-600">{hotel.location}</p>
                </div>
                {hotel.hasDeals && (
                  <Badge className="bg-red-600 text-white text-lg px-3 py-1">
                    {hotel.dealText}
                  </Badge>
                )}
              </div>
              
              {/* Rating */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`${getRatingColor(hotel.rating)} text-white px-3 py-2 rounded font-semibold`}>
                  {hotel.rating.toFixed(1)}
                </div>
                <div>
                  <div className="font-semibold">{getRatingText(hotel.rating)}</div>
                  <div className="text-sm text-gray-600">
                    {hotel.reviewCount.toLocaleString()} reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="md:row-span-2">
                    <img
                      src={hotel.images[0]}
                      alt={`${hotel.name} - Main hotel view showcasing elegant architecture and welcoming atmosphere`}
                      className="w-full h-64 md:h-full object-cover rounded-l-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/800x600?text=${hotel.name.replace(/\s+/g, '+')}+Main+View`;
                      }}
                    />
                  </div>
                  {hotel.images.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${hotel.name} - Additional view ${index + 1} showing hotel amenities and facilities`}
                      className="w-full h-32 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/400x300?text=${hotel.name.replace(/\s+/g, '+')}+View+${index + 2}`;
                      }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Room Types */}
            <Card>
              <CardHeader>
                <CardTitle>Available Rooms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {hotel.roomTypes.map((room) => (
                  <div key={room.id} className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <img
                        src={room.imageUrl}
                        alt={`${room.name} - Comfortable and well-appointed room with modern amenities`}
                        className="w-full md:w-48 h-32 object-cover rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://placehold.co/400x300?text=${room.name.replace(/\s+/g, '+')}+Room`;
                        }}
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{room.name}</h4>
                        <p className="text-gray-600 text-sm mb-3">{room.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {room.amenities.map((amenity, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-600">Max {room.maxGuests} guests</span>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold">${room.price}</div>
                            <div className="text-sm text-gray-600">per night</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl mb-2">📍</div>
                    <div className="font-semibold">{hotel.location}</div>
                    <div className="text-sm">Interactive map would be displayed here</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card>
              <CardHeader>
                <CardTitle>Guest Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Sample Reviews */}
                {[
                  {
                    name: "Sarah M.",
                    rating: 9.5,
                    comment: "Absolutely wonderful stay! The staff was incredibly helpful and the room was spotless.",
                    date: "2 days ago"
                  },
                  {
                    name: "John D.",
                    rating: 8.8,
                    comment: "Great location and excellent amenities. Would definitely stay here again.",
                    date: "1 week ago"
                  },
                  {
                    name: "Maria L.",
                    rating: 9.2,
                    comment: "Beautiful property with amazing views. The breakfast was exceptional.",
                    date: "2 weeks ago"
                  }
                ].map((review, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="font-semibold">{review.name}</div>
                        <div className={`${getRatingColor(review.rating)} text-white px-2 py-1 rounded text-sm`}>
                          {review.rating}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">{review.date}</div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  View All Reviews
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <BookingForm hotel={hotel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
