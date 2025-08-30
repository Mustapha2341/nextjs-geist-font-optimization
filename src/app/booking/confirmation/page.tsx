import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function BookingConfirmationPage() {
  // In a real app, this would come from the booking data
  const bookingDetails = {
    confirmationNumber: 'HB' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    hotelName: 'Grand Plaza Hotel',
    location: 'New York City, NY',
    checkIn: '2024-02-15',
    checkOut: '2024-02-18',
    guests: 2,
    rooms: 1,
    nights: 3,
    pricePerNight: 299,
    total: 897,
    guestName: 'John Doe',
    email: 'john.doe@example.com'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Booking Confirmed!
          </h1>
          <p className="text-gray-600">
            Your reservation has been successfully processed
          </p>
        </div>

        {/* Confirmation Details */}
        <Card className="mb-6">
          <CardHeader className="bg-blue-600 text-white">
            <CardTitle className="text-center">
              Confirmation Number: {bookingDetails.confirmationNumber}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Hotel Information */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Hotel Details</h3>
              <div className="space-y-1">
                <div className="font-medium">{bookingDetails.hotelName}</div>
                <div className="text-gray-600">{bookingDetails.location}</div>
              </div>
            </div>

            <Separator />

            {/* Stay Details */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Stay Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600">Check-in</div>
                  <div className="font-medium">
                    {new Date(bookingDetails.checkIn).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="text-sm text-gray-600">After 3:00 PM</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Check-out</div>
                  <div className="font-medium">
                    {new Date(bookingDetails.checkOut).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="text-sm text-gray-600">Before 11:00 AM</div>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{bookingDetails.nights}</div>
                  <div className="text-sm text-gray-600">Nights</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">{bookingDetails.guests}</div>
                  <div className="text-sm text-gray-600">Guests</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">{bookingDetails.rooms}</div>
                  <div className="text-sm text-gray-600">Room{bookingDetails.rooms > 1 ? 's' : ''}</div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Guest Information */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Guest Information</h3>
              <div className="space-y-1">
                <div className="font-medium">{bookingDetails.guestName}</div>
                <div className="text-gray-600">{bookingDetails.email}</div>
              </div>
            </div>

            <Separator />

            {/* Price Breakdown */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Price Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>${bookingDetails.pricePerNight} × {bookingDetails.nights} nights</span>
                  <span>${bookingDetails.pricePerNight * bookingDetails.nights}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Taxes and fees</span>
                  <span>Included</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${bookingDetails.total}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Important Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="text-green-600 mt-1">✓</span>
              <div>
                <div className="font-medium">Free Cancellation</div>
                <div className="text-sm text-gray-600">
                  Cancel for free until 24 hours before check-in
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 mt-1">📧</span>
              <div>
                <div className="font-medium">Confirmation Email</div>
                <div className="text-sm text-gray-600">
                  A confirmation email has been sent to {bookingDetails.email}
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-purple-600 mt-1">📱</span>
              <div>
                <div className="font-medium">Mobile Check-in</div>
                <div className="text-sm text-gray-600">
                  Use your confirmation number for express check-in
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
            Print Confirmation
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="lg">
              Add to Calendar
            </Button>
            <Button variant="outline" size="lg">
              Share Booking
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-8 space-y-4">
          <Link href="/">
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
              ← Return to Home
            </Button>
          </Link>
          
          <div className="text-sm text-gray-600">
            Need help? Contact our 24/7 customer support
          </div>
        </div>

        {/* Next Steps */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900">What's Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-blue-600">1.</span>
              <span className="text-blue-900">Save your confirmation number</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600">2.</span>
              <span className="text-blue-900">Check your email for detailed information</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600">3.</span>
              <span className="text-blue-900">Arrive at the hotel and enjoy your stay!</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
