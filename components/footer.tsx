
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Mail, Phone, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative h-12 w-12 mr-3">
                <Image
                  src="/moringaling-logo.jpg"
                  alt="Moringaling Philippines Foundation"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Moringaling Philippines Foundation Inc.
                </h3>
              </div>
            </div>
            <p className="text-green-100 mb-6">
              Promoting moringa cultivation and health benefits throughout the Philippines. 
              Join our community to discover the miracle tree and its impact on Filipino wellness and agriculture.
            </p>
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/moringaling.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Recipes', href: '/recipes' },
                { name: 'Forums', href: '/forums' },
                { name: 'Membership', href: '/membership' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-green-300" />
                <a
                  href="mailto:sales@avasiaonline.com"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  sales@avasiaonline.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-green-300" />
                <a
                  href="tel:+639178340896"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  +63 917 834 0896
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-3 text-green-300 mt-1" />
                <div className="text-green-200">
                  <div>Monday–Friday</div>
                  <div>8:00 AM – 5:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-sm mb-4 md:mb-0">
              © 2025 Moringaling Philippines Foundation Inc. All rights reserved.
            </p>
            <p className="text-green-300 text-sm">
              Powered by{' '}
              <span className="font-medium text-white">
                Avasia Information Systems Inc.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
