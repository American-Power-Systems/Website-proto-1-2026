import { navItems, products } from "@/data/aps";
import { LinkedInFeed } from "@/components/aps/LinkedInFeed";
import { Link } from "wouter";

const heroImage = "/assets/homepage_hero.avif";

export default function Option2() {
  return (
    <div className="font-sans min-h-screen bg-gray-100 flex flex-col text-gray-800">
      {/* Top Bar - Black */}
      <div className="bg-black text-white text-[12px] py-[5px] px-[20px] flex justify-end gap-[15px] items-center">
        <a href="#" className="text-white no-underline hover:text-gray-300">CAREERS</a>
        <span>|</span>
        <a href="#" className="text-white no-underline hover:text-gray-300">CONTACT US</a>
        <span>|</span>
        <a href="#" className="text-white no-underline hover:text-gray-300">APS PORTAL</a>
      </div>

      {/* Navbar - Bootstrap Style (Standard) */}
      <nav className="bg-aps-blue shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <a className="flex items-center gap-2 text-white no-underline hover:no-underline cursor-pointer">
                <div className="bg-white text-aps-blue font-bold px-2 py-1 font-heading text-xl">APS</div>
                <span className="font-bold text-lg tracking-tight">American Power Systems</span>
              </a>
            </Link>
            
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
      <footer className="bg-gray-800 text-gray-300 py-12 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-bold text-white text-lg mb-4">American Power Systems</h4>
            <p className="mb-4">
              Providing industry-leading DC power solutions for telecommunications, utility, and industrial applications.
            </p>
            <p>&copy; 2026 American Power Systems</p>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>1851 Central Place South, Suite 206</li>
              <li>Kent, WA 98030</li>
              <li>(800) 395-0693</li>
              <li>info@ampowersys.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-4">Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Careers</a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-3 mt-8 pt-8 border-t border-gray-700 flex justify-center">
             <div className="text-center">
               <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Contract Holder</p>
               <img src="/assets/naspo-logo-white.png" alt="NASPO ValuePoint" className="h-12 opacity-70 hover:opacity-100 transition-opacity mx-auto" />
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
