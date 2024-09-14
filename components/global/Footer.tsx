import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">ChaosCrowd</h2>
            <p className="mt-2 text-sm">
              Empowering creators and innovators to bring their ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">About</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Company</Link></li>
                <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Team</Link></li>
                <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-center">
            &copy; {currentYear} ChaosCrowd, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
