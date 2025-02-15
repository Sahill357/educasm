"use client"; // Ensure this runs on the client-side

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Compass, Gamepad2 } from "lucide-react";

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
        <div className="flex justify-center items-center h-14 px-4">
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
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mt-14 mb-[5.5rem]">
        <div className="max-w-4xl mx-auto px-4">{children}</div>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-14 left-0 right-0">
  <div className="flex justify-around items-center h-12 max-w-4xl mx-auto pl-[250px]"> {/* Add pl-[15px] here */}
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
  <footer className="w-full bg-black text-gray-400 text-sm py-1 mt-6 ml-32">
      <div className="container mx-auto flex justify-center space-x-6">
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
</nav>
    </div>
  );
};
