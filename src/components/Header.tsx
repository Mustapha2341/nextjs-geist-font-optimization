"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
            HotelBooking
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Hotels
            </Link>
            <Link href="#" className="hover:text-blue-200 transition-colors">
              Flights
            </Link>
            <Link href="#" className="hover:text-blue-200 transition-colors">
              Car Rentals
            </Link>
            <Link href="#" className="hover:text-blue-200 transition-colors">
              Attractions
            </Link>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Currency Selector */}
            <Select defaultValue="usd">
              <SelectTrigger className="w-20 bg-blue-700 border-blue-500 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
                <SelectItem value="gbp">GBP</SelectItem>
              </SelectContent>
            </Select>

            {/* Language Selector */}
            <Select defaultValue="en">
              <SelectTrigger className="w-16 bg-blue-700 border-blue-500 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="es">ES</SelectItem>
                <SelectItem value="fr">FR</SelectItem>
              </SelectContent>
            </Select>

            {/* User Account Buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" className="text-white hover:bg-blue-700">
                Sign In
              </Button>
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Register
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
