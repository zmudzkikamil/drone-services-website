import { Heart, Home as HomeIcon, Camera, Clock, DollarSign, Check } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Professional drone services tailored to capture your most important moments 
              and showcase properties with stunning aerial perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Services */}
      <section id="wedding" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Heart className="h-10 w-10 text-pink-600 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Wedding Cinematography
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Make your wedding day unforgettable with breathtaking aerial footage. 
                Our experienced pilots capture the romance, beauty, and grandeur of your 
                special day from perspectives that will leave you speechless.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <Camera className="h-8 w-8 text-pink-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">4K Video & Photos</h3>
                  <p className="text-gray-600 text-sm">
                    Crystal-clear 4K video recording and high-resolution photography
                  </p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <Clock className="h-8 w-8 text-pink-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Full Day Coverage</h3>
                  <p className="text-gray-600 text-sm">
                    From preparation to reception, we capture every moment
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Wedding Packages</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-pink-600 pl-6">
                  <h4 className="font-bold text-lg text-gray-900">Essential Package</h4>
                  <p className="text-2xl font-bold text-pink-600 mb-2">$899</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      2-hour ceremony coverage
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      4K video + RAW photos
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      3-minute highlight reel
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-pink-600 pl-6">
                  <h4 className="font-bold text-lg text-gray-900">Premium Package</h4>
                  <p className="text-2xl font-bold text-pink-600 mb-2">$1,499</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      Full day coverage (8 hours)
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      Multiple drone operators
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      10-minute cinematic film
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      Same-day sneak peek
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Services */}
      <section id="realestate" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Real Estate Packages</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-bold text-lg text-gray-900">Standard Package</h4>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$299</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      15-20 high-res photos
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      Property exterior shots
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      24-hour delivery
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-bold text-lg text-gray-900">Premium Package</h4>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$599</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      30+ high-res photos
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      2-minute property tour video
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      Neighborhood overview shots
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      12-hour delivery
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-bold text-lg text-gray-900">Luxury Package</h4>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$999</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      50+ photos + 4K video
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      Multiple angles & seasons
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      Virtual tour integration
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      6-hour delivery
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <HomeIcon className="h-10 w-10 text-blue-600 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Real Estate Media
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Help properties stand out in today's competitive market with stunning aerial 
                photography and videography. Our drone services showcase properties from 
                unique perspectives that capture buyers' attention and drive sales.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Clock className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
                  <p className="text-gray-600 text-sm">
                    Quick delivery to keep your listings moving
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <DollarSign className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600 text-sm">
                    Professional quality at affordable rates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We also offer specialized drone services for various other needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event Coverage</h3>
              <p className="text-gray-600 mb-4">
                Corporate events, festivals, and special occasions captured from above.
              </p>
              <p className="text-2xl font-bold text-green-600">Starting at $499</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Construction Progress</h3>
              <p className="text-gray-600 mb-4">
                Document construction phases with regular aerial photography.
              </p>
              <p className="text-2xl font-bold text-purple-600">Starting at $399</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial Photography</h3>
              <p className="text-gray-600 mb-4">
                Business properties, facilities, and promotional content.
              </p>
              <p className="text-2xl font-bold text-orange-600">Starting at $699</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;