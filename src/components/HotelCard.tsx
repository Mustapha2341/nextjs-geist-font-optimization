import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface HotelCardProps {
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
}

export default function HotelCard({
  id,
  name,
  location,
  rating,
  reviewCount,
  price,
  originalPrice,
  imageUrl,
  hasDeals = false,
  dealText = "Special Deal"
}: HotelCardProps) {
  const defaultImageUrl = `https://placehold.co/400x300?text=Hotel+${name.replace(/\s+/g, '+')}+Exterior+View`
  
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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative">
        <img
          src={imageUrl || defaultImageUrl}
          alt={`${name} - Modern hotel exterior showcasing elegant architecture and welcoming entrance`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = defaultImageUrl;
          }}
        />
        {hasDeals && (
          <Badge className="absolute top-3 left-3 bg-red-600 text-white">
            {dealText}
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Hotel Name and Location */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
              {name}
            </h3>
            <p className="text-sm text-gray-600">{location}</p>
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center space-x-2">
            <div className={`${getRatingColor(rating)} text-white px-2 py-1 rounded text-sm font-semibold`}>
              {rating.toFixed(1)}
            </div>
            <div className="text-sm">
              <span className="font-medium">{getRatingText(rating)}</span>
              <span className="text-gray-600 ml-1">
                ({reviewCount.toLocaleString()} reviews)
              </span>
            </div>
          </div>

          {/* Price and Booking */}
          <div className="flex items-center justify-between">
            <div className="text-right">
              {originalPrice && originalPrice > price && (
                <div className="text-sm text-gray-500 line-through">
                  ${originalPrice}
                </div>
              )}
              <div className="text-xl font-bold text-gray-900">
                ${price}
                <span className="text-sm font-normal text-gray-600">/night</span>
              </div>
            </div>
            <Link href={`/hotel/${id}`}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                View Details
              </Button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Free cancellation</span>
            <span>No prepayment needed</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
