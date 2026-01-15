import { navItems, locations, companyInfo } from "@/data/aps";
import apsLogo from "/assets/aps-logo-white.png";
import { Link } from "wouter";
import { MapPin, Phone, User, Building2, Menu } from "lucide-react";
import { useState } from "react";

export default function Locations() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen bg-gray-100 flex flex-col">
       {/* 1. HEADER (Option 1 Style) */}
       <header className="sticky top-0 z-50 bg-aps-blue shadow-lg border-b-4 border-aps-red">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/">
                <a className="flex items-center gap-2 cursor-pointer">
                    <img src={apsLogo} alt={companyInfo.name} className="h-12 w-auto" />
                </a>
            </Link>
            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className={`font-bold hover:text-aps-red transition-colors text-sm uppercase tracking-wider ${item.name === 'Locations' ? 'text-aps-red' : 'text-white'}`}>
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-aps-dark border-t border-white/10 p-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}><a className="text-white font-bold">{item.name}</a></Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* 2. HERO */}
      <section className="bg-aps-navy text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Locations</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Serving customers nationwide. Find your local warehouse or sales representative below.
          </p>
        </div>
      </section>

      {/* 3. LOCATIONS GRID */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((loc, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 flex flex-col md:flex-row h-full">
                
                {/* Map Column (Mobile: Top, Desktop: Left) */}
                <div className="md:w-5/12 bg-gray-200 min-h-[250px] md:min-h-full border-b md:border-b-0 md:border-r border-gray-200 relative">
                     {/* Overlay for map interaction */}
                    <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 text-[10px] font-bold text-gray-500 rounded z-10 pointer-events-none">
                        Interactive Map
                    </div>
                    <iframe 
                        src={loc.mapUrl} 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy"
                        title={`Map of ${loc.name}`}
                        className="w-full h-full min-h-[250px]"
                    ></iframe>
                </div>

                {/* Info Column */}
                <div className="p-8 md:w-7/12 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-2xl font-bold text-aps-navy">{loc.name}</h2>
                            <span className={`inline-block text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${loc.type.includes('Corporate') ? 'bg-aps-red text-white' : 'bg-gray-100 text-gray-600'}`}>
                                {loc.type}
                            </span>
                        </div>
                        
                        <div className="mb-8 flex items-start gap-3 text-gray-700">
                            <MapPin className="text-aps-red shrink-0 w-5 h-5 mt-1" />
                            <span className="text-sm font-medium">{loc.address}<br/>{loc.city}</span>
                        </div>

                        {/* Contacts List */}
                        <div className="space-y-4 border-t border-gray-100 pt-4">
                            {loc.contacts.map((contact, cIdx) => (
                                <div key={cIdx} className="flex items-start gap-3 group">
                                    <div className="mt-1">
                                        {contact.label.toLowerCase().includes("sales") ? (
                                            <User className="text-aps-blue w-4 h-4" />
                                        ) : (
                                            <Building2 className="text-gray-400 w-4 h-4" />
                                        )}
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-0.5">
                                            {contact.label}
                                        </span>
                                        <a href={`tel:${contact.phone}`} className="text-lg text-aps-navy font-bold hover:text-aps-red transition-colors">
                                            {contact.phone}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Reuse */}
      <footer className="bg-black text-gray-500 py-8 text-center text-xs border-t border-gray-800 mt-auto">
        <p>© 2026 {companyInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
