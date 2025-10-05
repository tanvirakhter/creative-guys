
import React from "react";
import { Mail, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return <footer className="w-full bg-white py-8 border-t border-gray-200">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
            <a href="mailto:creativeguyscompany@gmail.com" className="flex items-center gap-2 hover:text-pulse-500 transition-colors">
              <Mail className="w-4 h-4" />
              creativeguyscompany@gmail.com
            </a>
            <a href="https://instagram.com/creativeguys.co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pulse-500 transition-colors">
              <Instagram className="w-4 h-4" />
              @creativeguys.co
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              London, United Kingdom
            </div>
          </div>
          
          {/* Copyright */}
          <p className="text-center text-gray-600 text-sm">
            © 2025 Creative Guys. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
