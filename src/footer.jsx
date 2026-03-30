import React from "react";
import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-gray-400 px-6 lg:px-16 py-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Left Info */}
          <div className="lg:col-span-2">
            <h2 className="text-white text-2xl font-semibold">
              DigiTools
            </h2>
            <p className="mt-4 text-sm leading-6 max-w-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          {/* Resources + Social */}
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>

            {/* Social */}
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">
                Social Links
              </h4>
              <div className="flex gap-3">
                <div className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                  <FaYoutube className="text-white text-sm" />
                </div>
                <div className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                  <FaFacebookF className="text-white text-sm" />
                </div>
                <div className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                  <FaXTwitter className="text-white text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col lg:flex-row justify-between items-center text-sm">
          
          <p className="text-gray-500">
            © 2026 Digitools. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 lg:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">
              Cookies
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}