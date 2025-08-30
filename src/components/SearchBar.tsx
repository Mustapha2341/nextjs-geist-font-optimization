"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'

export default function SearchBar() {
  const [location, setLocation] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2')
  const [rooms, setRooms] = useState('1')
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!location.trim()) {
      newErrors.location = 'Please enter a destination'
    }
    if (!checkIn) {
      newErrors.checkIn = 'Please select check-in date'
    }
    if (!checkOut) {
      newErrors.checkOut = 'Please select check-out date'
    }
    if (checkIn && checkOut && new Date(checkIn) >= new Date(checkOut)) {
      newErrors.checkOut = 'Check-out must be after check-in date'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSearch = () => {
    if (validateForm()) {
      // Handle search logic here
      console.log('Searching for:', { location, checkIn, checkOut, guests, rooms })
    }
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mx-4 -mt-16 relative z-10 max-w-6xl mx-auto">
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium">
                Where are you going?
              </Label>
              <Input
                id="location"
                type="text"
                placeholder="Enter destination"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={errors.location ? 'border-red-500' : ''}
              />
              {errors.location && (
                <p className="text-red-500 text-xs">{errors.location}</p>
              )}
            </div>

            {/* Check-in Date */}
            <div className="space-y-2">
              <Label htmlFor="checkin" className="text-sm font-medium">
                Check-in
              </Label>
              <Input
                id="checkin"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className={errors.checkIn ? 'border-red-500' : ''}
              />
              {errors.checkIn && (
                <p className="text-red-500 text-xs">{errors.checkIn}</p>
              )}
            </div>

            {/* Check-out Date */}
            <div className="space-y-2">
              <Label htmlFor="checkout" className="text-sm font-medium">
                Check-out
              </Label>
              <Input
                id="checkout"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split('T')[0]}
                className={errors.checkOut ? 'border-red-500' : ''}
              />
              {errors.checkOut && (
                <p className="text-red-500 text-xs">{errors.checkOut}</p>
              )}
            </div>

            {/* Guests & Rooms */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Guests & Rooms</Label>
              <div className="flex space-x-2">
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="flex-1">
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
                <Select value={rooms} onValueChange={setRooms}>
                  <SelectTrigger className="flex-1">
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

            {/* Search Button */}
            <div>
              <Button 
                onClick={handleSearch}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                size="lg"
              >
                Search Hotels
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
