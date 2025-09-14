import { Link } from 'react-router-dom';
import { Camera, Heart, Home as HomeIcon, Play, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Capture Life from Above
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional drone services for weddings and real estate. 
              Creating stunning aerial footage that tells your story from a breathtaking perspective.
            </p>
            <div className="space-x-4">
              <Link
                to="/services"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Services
              </Link>
              <Link
                to="/portfolio"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                See Our Work
              </Link>
            </div>
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