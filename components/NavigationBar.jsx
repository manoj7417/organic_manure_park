'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Organic Manure Park', href: '#park' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-green-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-0 align-left">
            <Image
              src="/logo.png"
              alt="The Agro Village Logo"
              width={150}
              height={100}
              className="w-15 h-15"
            />
            {/* <span className="text-xl font-bold text-green-800">Organic Manure Park</span> */}
          </div>

          {/* Company Info - Now visible on all screen sizes */}
          <div className="flex items-center space-x-4 ml-auto mr-4">
            <Link href={"kamdhenu"}><Image
              src="/kamdhenu.png"
              alt="Kamdhenu Logo"
              width={100}
              height={100}
              className="w-15 h-15"
            /></Link> 
            <span className="text-sm text-gray-600 font-medium hidden sm:block">
              Promoted by MaAMMA Agribusiness Pvt Ltd
            </span>
          </div>

          {/* Hamburger Menu Button - Now visible on all screen sizes */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500 hidden lg:block">Menu</span>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-green-700 hover:text-green-900 hover:bg-green-50 transition-all duration-200"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] lg:w-[450px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/logo.png"
                        alt="The Agro Village Logo"
                        width={250}
                        height={50}
                        className="w-20 h-12"
                      />
                      <span className="text-lg font-bold text-green-800">Organic Manure Park</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-green-700 hover:text-green-900"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <nav className="flex-1">
                    <ul className="space-y-4">
                      {navigationItems.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="block text-lg text-green-700 hover:text-green-900 font-medium py-3 px-4 rounded-lg hover:bg-green-50 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  
                  <div className="pt-6 border-t font-bold border-green-100">
                    <p className="text-sm text-black font-bold text-center">
                      Promoted by MaAMMA Agribusiness Pvt Ltd
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
