import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h5 className="text-gray-800 font-semibold mb-2">About</h5>
            <ul>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  How Airbnb works
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Newsroom
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Investors
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Airbnb Plus
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Airbnb Luxe
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  HotelTonight
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Airbnb for Work
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Made possible by Hosts
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Founders' Letter
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h5 className="text-gray-800 font-semibold mb-2">Community</h5>
            <ul>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Diversity & Belonging
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Accessibility
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Airbnb Associates
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Frontline Stays
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Guest Referrals
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  AirAI.org
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h5 className="text-gray-800 font-semibold mb-2">Host</h5>
            <ul>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Host your home
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Host an Online Experience
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Host an Experience
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Responsible hosting
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Resource Center
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Community Center
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h5 className="text-gray-800 font-semibold mb-2">Support</h5>
            <ul>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Our COVID-19 Response
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Help Center
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Cancellation options
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Neighborhood Support
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-600 hover:underline">
                  Trust & Safety
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <p className="text-gray-600">© 2024 AirAI, Inc.</p>
            <a href="#" className="text-gray-600 hover:underline ml-4">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:underline ml-4">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:underline ml-4">
              Sitemap
            </a>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-gray-600 hover:underline">
              English (US)
            </a>
            <a href="#" className="text-gray-600 hover:underline ml-4">
              $ USD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
