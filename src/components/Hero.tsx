export default function Hero() {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://placehold.co/1920x1080?text=Beautiful+Travel+Destination+with+Modern+Hotels+and+Scenic+Views"
        alt="Beautiful travel destination showcasing modern hotels with scenic mountain and ocean views in a luxurious setting"
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.backgroundColor = '#3b82f6';
          target.style.display = 'none';
          if (target.parentElement) {
            target.parentElement.style.backgroundColor = '#3b82f6';
          }
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover amazing hotels, resorts, and unique accommodations worldwide
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏨</span>
              <span>2M+ Properties</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⭐</span>
              <span>Verified Reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">📞</span>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🔒</span>
              <span>Secure Booking</span>
            </div>
          </div>
          
          {/* Special Offer Banner */}
          <div className="mt-8 inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
            🎉 Special Offer: Save up to 30% on your next booking!
          </div>
        </div>
      </div>
    </section>
  )
}
