"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([50, 500])
  const [selectedStars, setSelectedStars] = useState<string[]>([])
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([])
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [selectedReviewScores, setSelectedReviewScores] = useState<string[]>([])

  const handleStarChange = (star: string, checked: boolean) => {
    if (checked) {
      setSelectedStars([...selectedStars, star])
    } else {
      setSelectedStars(selectedStars.filter(s => s !== star))
    }
  }

  const handlePropertyTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setSelectedPropertyTypes([...selectedPropertyTypes, type])
    } else {
      setSelectedPropertyTypes(selectedPropertyTypes.filter(t => t !== type))
    }
  }

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      setSelectedAmenities([...selectedAmenities, amenity])
    } else {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity))
    }
  }

  const handleReviewScoreChange = (score: string, checked: boolean) => {
    if (checked) {
      setSelectedReviewScores([...selectedReviewScores, score])
    } else {
      setSelectedReviewScores(selectedReviewScores.filter(s => s !== score))
    }
  }

  const clearAllFilters = () => {
    setPriceRange([50, 500])
    setSelectedStars([])
    setSelectedPropertyTypes([])
    setSelectedAmenities([])
    setSelectedReviewScores([])
  }

  return (
    <div className="w-full max-w-sm space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Filters</h2>
        <Button variant="ghost" onClick={clearAllFilters} className="text-sm text-blue-600">
          Clear All
        </Button>
      </div>

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Price Range (per night)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={1000}
            min={0}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Star Rating */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Star Rating</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {['5', '4', '3', '2', '1'].map((stars) => (
            <div key={stars} className="flex items-center space-x-2">
              <Checkbox
                id={`stars-${stars}`}
                checked={selectedStars.includes(stars)}
                onCheckedChange={(checked) => handleStarChange(stars, checked as boolean)}
              />
              <Label htmlFor={`stars-${stars}`} className="flex items-center cursor-pointer">
                <span className="mr-2">{stars}</span>
                <div className="flex">
                  {Array.from({ length: parseInt(stars) }).map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Property Type */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Property Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            'Hotels',
            'Apartments',
            'Resorts',
            'Villas',
            'Hostels',
            'Bed & Breakfasts'
          ].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={`type-${type}`}
                checked={selectedPropertyTypes.includes(type)}
                onCheckedChange={(checked) => handlePropertyTypeChange(type, checked as boolean)}
              />
              <Label htmlFor={`type-${type}`} className="cursor-pointer">
                {type}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Amenities */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Amenities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            'Free WiFi',
            'Swimming Pool',
            'Fitness Center',
            'Spa',
            'Restaurant',
            'Room Service',
            'Pet Friendly',
            'Parking',
            'Airport Shuttle',
            'Business Center'
          ].map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={`amenity-${amenity}`}
                checked={selectedAmenities.includes(amenity)}
                onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
              />
              <Label htmlFor={`amenity-${amenity}`} className="cursor-pointer text-sm">
                {amenity}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Review Score */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Review Score</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { label: 'Exceptional (9+)', value: '9+' },
            { label: 'Excellent (8+)', value: '8+' },
            { label: 'Very Good (7+)', value: '7+' },
            { label: 'Good (6+)', value: '6+' }
          ].map((score) => (
            <div key={score.value} className="flex items-center space-x-2">
              <Checkbox
                id={`score-${score.value}`}
                checked={selectedReviewScores.includes(score.value)}
                onCheckedChange={(checked) => handleReviewScoreChange(score.value, checked as boolean)}
              />
              <Label htmlFor={`score-${score.value}`} className="cursor-pointer text-sm">
                {score.label}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
