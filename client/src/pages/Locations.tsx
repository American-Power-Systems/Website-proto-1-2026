import { navItems, locations } from "@/data/aps";
import apsLogo from "/assets/aps-logo-white.png";
import { Link } from "wouter";
import { MapPin, Phone, User, Building2 } from "lucide-react";

export default function Locations() {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Header */}
      <header className="bg-aps-navy text-white py-4 px-6 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <a className="font-bold text-2xl tracking-tighter flex items-center gap-2">
               <img src={apsLogo} alt="APS" className="h-8 w-auto" />
            </a>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {navItems.map(item => (
                <Link key={item.name} href={item.id === "home" ? "/" : `/${item.id}`}>
                    <a className="hover:text-aps-red transition-colors">{item.name}</a>
                </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-aps-navy text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Locations</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Serving customers nationwide with strategic warehouses and support offices across the United States.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((loc, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 flex flex-col md:flex-row h-full">
                
                {/* Map Column */}
                <div className="md:w-5/12 bg-gray-200 min-h-[250px] md:min-h-full">
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
                <div className="p-6 md:w-7/12 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-xl font-bold text-aps-navy">{loc.name}</h2>
                            <span className="inline-block bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                                {loc.type}
                            </span>
                        </div>
                        
                        <div className="mb-6 flex items-start gap-3 text-gray-600">
                            <MapPin className="text-aps-red shrink-0 w-5 h-5 mt-1" />
                            <span className="text-sm">{loc.address}<br/>{loc.city}</span>
                        </div>

                        {/* Contacts List */}
                        <div className="space-y-4 border-t border-gray-100 pt-4">
                            {loc.contacts.map((contact, cIdx) => (
                                <div key={cIdx} className="flex items-start gap-3">
                                    {contact.label.toLowerCase().includes("sales") ? (
                                        <User className="text-aps-blue shrink-0 w-4 h-4 mt-1" />
                                    ) : (
                                        <Building2 className="text-gray-400 shrink-0 w-4 h-4 mt-1" />
                                    )}
                                    <div>
                                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-0.5">
                                            {contact.label}
                                        </span>
                                        <a href={`tel:${contact.phone}`} className="text-aps-red font-bold hover:underline">
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
    </div>
  );
}
