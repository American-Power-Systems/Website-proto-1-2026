import { navItems, locations } from "@/data/aps";
import { Link } from "wouter";
import { MapPin, Phone } from "lucide-react";

export default function Locations() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <header className="bg-aps-navy text-white py-4 px-6 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/"><a className="font-bold text-2xl tracking-tighter flex items-center gap-2">
             <img src="/assets/aps-logo-white.png" className="h-8" alt="APS"/>
          </a></Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {navItems.map(item => <Link key={item.name} href={item.href}><a className="hover:text-aps-red">{item.name}</a></Link>)}
          </nav>
        </div>
      </header>

      <section className="bg-aps-navy text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-5xl font-bold mb-6">Locations</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
                Find our offices and operational hubs.
            </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="grid gap-12">
                {locations.map((loc, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-8 border-b pb-12 last:border-0">
                        <div className="md:w-1/3">
                            <h3 className="text-2xl font-bold text-aps-navy mb-2">{loc.name}</h3>
                            <span className="inline-block bg-aps-red text-white text-xs px-2 py-1 rounded mb-4">{loc.type}</span>
                            <div className="flex items-start gap-2 text-gray-600 mb-2">
                                <MapPin className="w-5 h-5 text-aps-red shrink-0" />
                                <p>{loc.address}<br/>{loc.city}</p>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <Phone className="w-5 h-5 text-aps-red shrink-0" />
                                <p>{loc.phone}</p>
                            </div>
                        </div>
                        <div className="md:w-2/3 h-64 bg-gray-100 rounded-lg overflow-hidden">
                            <iframe 
                                src={loc.mapUrl} 
                                width="100%" 
                                height="100%" 
                                style={{border:0}} 
                                allowFullScreen 
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
