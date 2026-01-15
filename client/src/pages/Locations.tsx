import { navItems, locations } from "@/data/aps";
import { Link } from "wouter";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Locations() {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Header */}
      <header className="bg-aps-navy text-white py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/"><a className="font-bold text-2xl tracking-tighter">APS</a></Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {navItems.map(item => <Link key={item.name} href={item.href}><a className="hover:text-aps-red">{item.name}</a></Link>)}
          </nav>
        </div>
      </header>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-aps-navy mb-4">Our Locations</h1>
            <p className="text-gray-600">Serving customers nationwide from our strategic hubs.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {locations.map((loc, idx) => (
              <div key={idx} className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 flex flex-col">
                {/* Map Frame */}
                <div className="h-[300px] w-full bg-gray-200">
                    <iframe 
                        src={loc.mapUrl} 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy"
                        title={`Map of ${loc.name}`}
                    ></iframe>
                </div>

                {/* Info */}
                <div className="p-8">
                    <div className="inline-block bg-aps-red text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                        {loc.type}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{loc.name}</h2>
                    
                    <div className="space-y-4 text-gray-600">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-aps-red shrink-0 w-6 h-6" />
                            <span className="text-lg">{loc.address}<br/>{loc.city}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="text-aps-red shrink-0 w-6 h-6" />
                            <a href={`tel:${loc.phone}`} className="text-lg font-bold hover:text-aps-navy transition">{loc.phone}</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <Clock className="text-aps-red shrink-0 w-6 h-6" />
                            <span className="text-sm">Mon-Fri: 8:00 AM - 5:00 PM</span>
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
