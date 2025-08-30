"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change background
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          setIsScrolled(scrollPosition > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const navigationItems = [
    { name: "About Us", href: "#about" },
    { name: "Organic Manure Park", href: "#park" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Us", href: "#contact" },
    { name: "Kamdhenu", href: "/kamdhenu" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-green-100 shadow-lg"
          : "bg-white backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-0 align-left">
            <span className="text-base text-green-800">
              MaAMMA Agribusiness <br />
              Private Limited
            </span>
          </div>

          {/* Hamburger Menu Button - Now visible on all screen sizes */}
          <div className="flex items-center space-x-3">
            {/* Cow Icon - Redirects to Kamdhenu */}
            <Link href="/kamdhenu" className="hidden lg:block">
              <div className="flex items-center justify-center w-14 h-14 rounded-full hover:bg-green-50 transition-all duration-200 cursor-pointer">
                <Image
                  src="/cow.png"
                  alt="Cow Icon - Go to Kamdhenu"
                  width={48}
                  height={48}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </Link>

            <span
              className={`text-base hidden lg:block transition-colors duration-300 uppercase ${
                isScrolled ? " text-green-700" : "text-black drop-shadow-lg"
              }`}
            >
              Menu
            </span>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`transition-all duration-200 cursor-pointer ${
                    isScrolled
                      ? "text-green-700 hover:text-green-900 hover:bg-green-50"
                      : "text-black"
                  }`}
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] lg:w-[450px] bg-white border-l border-gray-100"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full pt-6 pb-6">
                  {/* Header Section */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                    <div className="flex items-center space-x-4 px-5">
                      <div>
                        <h2 className="text-lg font-bold text-green-800 leading-tight">
                          Organic Manure Park
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">
                          Sustainable. Natural. Revolutionary.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 px-2">
                    <div className="space-y-3">
                      {navigationItems.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center space-x-3 px-4 py-4 rounded-xl text-green-700 hover:text-green-800 hover:bg-green-50 font-medium transition-all duration-200 group"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                          <span className="text-base">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </nav>

                  {/* Footer Section */}
                  <div className="pt-6 border-t border-gray-100 px-2">
                    <div className="text-center space-y-3">
                      <p className="text-sm text-gray-600 font-medium">
                        Promoted by
                      </p>
                      <p className="text-sm text-green-700 font-semibold">
                        MaAMMA Agribusiness Pvt Ltd
                      </p>
                      <div className="flex justify-center space-x-4 pt-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-xs font-bold">
                            M
                          </span>
                        </div>
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-xs font-bold">
                            A
                          </span>
                        </div>
                      </div>
                    </div>
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
