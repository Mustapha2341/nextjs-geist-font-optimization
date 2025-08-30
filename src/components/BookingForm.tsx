"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Hotel } from '@/lib/mockData'

interface BookingFormProps {
  hotel: Hotel
}

export default function BookingForm({ hotel }: BookingFormProps) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    rooms: '1',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const validateStep1 = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required'
    if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required'
    if (formData.checkIn && formData.checkOut && new Date(formData.checkIn) >= new Date(formData.checkOut)) {
      newErrors.checkOut = 'Check-out must be after check-in date'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required'
    if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required'
    if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required'
    if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    let isValid = false
    
    switch (step) {
      case 1:
        isValid = validateStep1()
        break
      case 2:
        isValid = validateStep2()
        break
      case 3:
        isValid = validateStep3()
        break
    }
    
    if (isValid) {
      if (step < 3) {
        setStep(step + 1)
      } else {
        // Complete booking
        router.push('/booking/confirmation')
      }
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn)
      const checkOut = new Date(formData.checkOut)
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }
    return 1
  }

  const calculateTotal = () => {
    const nights = calculateNights()
    const roomCount = parseInt(formData.rooms)
    return hotel.price * nights * roomCount
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Book Your Stay</span>
          <span className="text-sm font-normal text-gray-600">Step {step} of 3</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Price Summary */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Price per night:</span>
            <span className="text-xl font-bold">${hotel.price}</span>
          </div>
          {formData.checkIn && formData.checkOut && (
            <>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>{calculateNights()} nights × {formData.rooms} room(s)</span>
                <span>${calculateTotal()}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span className="text-xl">${calculateTotal()}</span>
              </div>
            </>
          )}
        </div>

        {/* Step 1: Dates and Guests */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="checkin">Check-in</Label>
                <Input
                  id="checkin"
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => updateFormData('checkIn', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className={errors.checkIn ? 'border-red-500' : ''}
                />
                {errors.checkIn && <p className="text-red-500 text-xs">{errors.checkIn}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="checkout">Check-out</Label>
                <Input
                  id="checkout"
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => updateFormData('checkOut', e.target.value)}
                  min={formData.checkIn || new Date().toISOString().split('T')[0]}
                  className={errors.checkOut ? 'border-red-500' : ''}
                />
                {errors.checkOut && <p className="text-red-500 text-xs">{errors.checkOut}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Guests</Label>
                <Select value={formData.guests} onValueChange={(value) => updateFormData('guests', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Rooms</Label>
                <Select value={formData.rooms} onValueChange={(value) => updateFormData('rooms', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Room</SelectItem>
                    <SelectItem value="2">2 Rooms</SelectItem>
                    <SelectItem value="3">3 Rooms</SelectItem>
                    <SelectItem value="4">4+ Rooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Guest Information */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  className={errors.firstName ? 'border-red-500' : ''}
                />
                {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  className={errors.lastName ? 'border-red-500' : ''}
                />
                {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                className={errors.phone ? 'border-red-500' : ''}
              />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="requests">Special Requests (Optional)</Label>
              <textarea
                id="requests"
                className="w-full p-2 border rounded-md resize-none h-20"
                value={formData.specialRequests}
                onChange={(e) => updateFormData('specialRequests', e.target.value)}
                placeholder="Any special requests or preferences..."
              />
            </div>
          </div>
        )}

        {/* Step 3: Payment Information */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={(e) => updateFormData('cardNumber', e.target.value)}
                className={errors.cardNumber ? 'border-red-500' : ''}
              />
              {errors.cardNumber && <p className="text-red-500 text-xs">{errors.cardNumber}</p>}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={(e) => updateFormData('expiryDate', e.target.value)}
                  className={errors.expiryDate ? 'border-red-500' : ''}
                />
                {errors.expiryDate && <p className="text-red-500 text-xs">{errors.expiryDate}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={(e) => updateFormData('cvv', e.target.value)}
                  className={errors.cvv ? 'border-red-500' : ''}
                />
                {errors.cvv && <p className="text-red-500 text-xs">{errors.cvv}</p>}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cardName">Cardholder Name</Label>
              <Input
                id="cardName"
                value={formData.cardName}
                onChange={(e) => updateFormData('cardName', e.target.value)}
                className={errors.cardName ? 'border-red-500' : ''}
              />
              {errors.cardName && <p className="text-red-500 text-xs">{errors.cardName}</p>}
            </div>
            
            <div className="bg-gray-50 p-3 rounded text-sm text-gray-600">
              🔒 Your payment information is secure and encrypted
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          {step > 1 && (
            <Button variant="outline" onClick={handleBack} className="flex-1">
              Back
            </Button>
          )}
          <Button onClick={handleNext} className="flex-1 bg-blue-600 hover:bg-blue-700">
            {step === 3 ? 'Complete Booking' : 'Next'}
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="text-center text-xs text-gray-500 space-y-1">
          <div>✓ Free cancellation until 24 hours before check-in</div>
          <div>✓ No booking fees • Pay at the property</div>
        </div>
      </CardContent>
    </Card>
  )
}
