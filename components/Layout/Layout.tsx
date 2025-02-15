"use client"; // Ensure this runs on the client-side

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Compass, Gamepad2 } from "lucide-react";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname(); // Replaces useLocation()
  const router = useRouter(); // Replaces useNavigate()

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/"); // Navigate to "/"
    window.dispatchEvent(new CustomEvent("resetExplore")); // Custom event
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Logo Bar */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-lg z-40">
        <div className="flex justify-between items-center h-14 px-4">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
                <path
                  fill="currentColor"
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">educasm</span>
          </a>

          {/* Toggle Menu (Popover) */}
          <Popover className="relative">
  {({ open }) => (
    <>
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-white">
        <span>Solutions</span>
        <ChevronDownIcon 
          aria-hidden="true" 
          className={`size-5 transition-transform ${open ? "rotate-180" : "rotate-0"}`} 
        />
      </PopoverButton>

      <PopoverPanel
        className={`absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition-all ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">
          <div className="p-4">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
              >
                <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </>
  )}
</Popover>

        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mt-14 mb-[5.5rem]">
        <div className="max-w-4xl mx-auto px-4">{children}</div>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-14 left-0 right-0">
        <div className="flex justify-around items-center h-12 max-w-4xl mx-auto pl-[250px] mb-32">
          <Link
            href="/"
            className={`flex flex-col items-center gap-0.5 px-6 py-1 rounded-lg transition-colors ${
              pathname === "/" ? "text-primary" : "text-gray-400 hover:text-gray-300"
            }`}
          >
            <Compass className="w-5 h-5" />
            <span className="text-[10px]">Explore</span>
          </Link>

          <Link
            href="/playground"
            className={`flex flex-col items-center gap-0.5 px-6 py-1 rounded-lg transition-colors ${
              pathname === "/playground" ? "text-primary" : "text-gray-400 hover:text-gray-300"
            }`}
          >
            <Gamepad2 className="w-5 h-5" />
            <span className="text-[10px]">Playground</span>
          </Link>
        </div>
      </nav>

      {/* Footer */}
      <footer className="fixed bottom-0 left-[115px] right-0 w-full text-gray-400 text-sm py-4">
        <div className="container mx-auto flex justify-center space-x-5">
          <a href="#" className="hover:text-white transition">Pro</a>
          <a href="#" className="hover:text-white transition">Enterprise</a>
          <a href="#" className="hover:text-white transition">Store</a>
          <a href="#" className="hover:text-white transition">Blog</a>
          <a href="#" className="hover:text-white transition">Careers</a>
          <a href="#" className="hover:text-white transition">Education</a>
          <a href="#" className="hover:text-white transition">Finance</a>
          <div className="flex items-center cursor-pointer hover:text-white transition">
            English (English) ▼
          </div>
        </div>
      </footer>
    </div>
  );
};