import { navItems, products } from "@/data/aps";
import { LinkedInFeed } from "@/components/aps/LinkedInFeed";
import heroImage from "@assets/generated_images/industrial_power_systems_factory_floor.png";
import { Link } from "wouter";

export default function Option2() {
  return (
    <div className="font-sans min-h-screen bg-gray-100 flex flex-col text-gray-800">
      {/* Top Bar - Black */}
      <div className="bg-black text-white py-1">
        <div className="container mx-auto px-4 flex justify-end gap-4 text-sm">
          <Link href="/" className="hover:underline opacity-70">Back to Menu</Link>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Careers</a>
        </div>
      </div>

      {/* Navbar - Bootstrap Style (Standard) */}
      <nav className="bg-aps-blue shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2 text-white no-underline hover:no-underline">
              <div className="bg-white text-aps-blue font-bold px-2 py-1 font-heading text-xl">APS</div>
              <span className="font-bold text-lg tracking-tight">American Power Systems</span>
            </a>
            
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - Boxed Container (Like Bootstrap .container) */}
      <div className="container mx-auto px-4 mt-8">
        <div className="relative rounded-lg overflow-hidden bg-gray-900 text-white h-[400px]">
          <img 
            src={heroImage} 
            alt="Hero" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Leading DC Power Solutions</h1>
            <p className="text-lg mb-6 max-w-xl">
              Reliable energy infrastructure for the modern world. Innovation, safety, and performance.
            </p>
            <div>
              <button className="bg-aps-red hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors mr-2">
                Learn More
              </button>
              <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-2 px-6 rounded transition-colors">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb Style Spacer */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          Home / Products / <span className="text-gray-900 font-bold">Overview</span>
        </div>
      </div>

      {/* Card Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Our Divisions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                <span className="text-4xl font-bold opacity-20">{idx + 1}</span>
              </div>
              <div className="p-5">
                <h5 className="text-lg font-bold mb-2 text-aps-blue">{prod.title}</h5>
                <p className="text-gray-600 text-sm mb-4">{prod.desc}</p>
                <a href="#" className="inline-block bg-aps-blue text-white px-4 py-2 rounded text-sm hover:bg-blue-900 transition-colors">
                  Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LinkedIn Section - Bootstrap Style Container */}
      <div className="bg-white py-12 mt-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
           <LinkedInFeed />
        </div>
      </div>

      {/* Footer - Simple Grey */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2026 American Power Systems</p>
          <div className="flex justify-center space-x-4 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
