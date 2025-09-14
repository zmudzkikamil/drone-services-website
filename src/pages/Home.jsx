import { Link } from 'react-router-dom';
import { Camera, Heart, Home as HomeIcon, Play, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Home = () => {
  // Carousel images - using Unsplash for high-quality drone photography
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Wedding Perfection",
      description: "Capturing your special day from breathtaking aerial perspectives"
    },
    {
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Luxury Real Estate",
      description: "Showcasing properties with stunning aerial photography and videography"
    },
    {
      url: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Outdoor Ceremonies",
      description: "Perfect aerial shots of outdoor weddings and scenic venues"
    },
    {
      url: "https://images.unsplash.com/photo-1560448204-e1a3145c13b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Modern Architecture",
      description: "Highlighting architectural beauty and property features from above"
    },
    {
      url: "https://images.unsplash.com/photo-1544944194-1c2d3d5ec75e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Seaside Venues",
      description: "Capturing the romance of waterfront weddings and coastal properties"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="pt-16">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        {/* Image Carousel */}
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                Capture Life from Above
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up">
                Professional drone services for weddings and real estate. 
                Creating stunning aerial footage that tells your story from a breathtaking perspective.
              </p>
            </div>
            
            {/* Dynamic content based on current image */}
            <div className="mb-12 animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                {carouselImages[currentSlide].title}
              </h3>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                {carouselImages[currentSlide].description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                to="/services"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Camera className="h-5 w-5 mr-2" />
                  View Services
                </span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
              <Link
                to="/portfolio"
                className="group px-8 py-4 border-2 border-white/80 text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10"
              >
                <span className="flex items-center justify-center">
                  <Play className="h-5 w-5 mr-2" />
                  See Our Work
                </span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 z-20 animate-bounce">
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm mb-2 rotate-90 origin-center">scroll</span>
            <div className="w-px h-8 bg-white/50"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Drone Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in creating captivating aerial content for life's most important moments and valuable properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Wedding Services */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-pink-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Wedding Cinematography</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Transform your special day with breathtaking aerial footage. Our drones capture 
                the romance and grandeur of your wedding from unique perspectives that will leave 
                you and your guests in awe.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  Ceremony and reception coverage
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  4K video and high-resolution photography
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  Edited highlight reels
                </li>
              </ul>
              <Link
                to="/services#wedding"
                className="text-pink-600 font-semibold hover:text-pink-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Real Estate Services */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <HomeIcon className="h-8 w-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Real Estate Media</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Showcase properties like never before with stunning aerial photography and videography. 
                Help potential buyers see the full scope and beauty of listings from above.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Exterior and landscape photography
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Property tour videos
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Quick turnaround times
                </li>
              </ul>
              <Link
                to="/services#realestate"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SkyVision?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with creative expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art drones with 4K cameras and stabilization technology 
                for crystal-clear footage.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Pilots</h3>
              <p className="text-gray-600">
                Licensed and insured drone pilots with years of experience in 
                wedding and real estate photography.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick turnaround times with professional editing and color correction 
                included in every package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Content?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and get a personalized quote 
            for our drone services.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;