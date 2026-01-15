import { navItems, services } from "@/data/aps";
import { Link } from "wouter";
import { CheckCircle2, Phone } from "lucide-react";

export default function Services() {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Header Reused */}
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

      {/* Services Hero */}
      <section className="bg-aps-navy text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-5xl font-bold mb-6">Services & Support</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
                We provide complete DC power solutions—from initial engineering and design to installation, maintenance, and final disposal.
            </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="grid gap-12">
                {services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                        <div key={idx} className="flex flex-col md:flex-row gap-8 border-b border-gray-100 pb-12 last:border-0">
                            {/* Icon Column */}
                            <div className="md:w-1/4">
                                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-aps-red mb-4">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-aps-navy">{service.title}</h3>
                            </div>
                            
                            {/* Description Column */}
                            <div className="md:w-3/4">
                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                    {service.desc}
                                </p>
                                
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-bold text-sm uppercase text-gray-400 mb-4 tracking-wider">Capabilities</h4>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {service.details?.map((detail, dIdx) => (
                                            <div key={dIdx} className="flex items-center gap-2">
                                                <CheckCircle2 className="text-aps-red w-5 h-5" />
                                                <span className="text-aps-navy font-medium">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-aps-red py-16 text-white text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Need a Site Survey?</h2>
            <p className="text-xl mb-8 opacity-90">Our project managers can schedule a visit to your Central Office or remote site.</p>
            <a href="tel:800-395-0693" className="inline-flex items-center gap-2 bg-white text-aps-red px-8 py-4 font-bold rounded shadow-lg hover:bg-gray-100 transition">
                <Phone size={20} /> Call (800) 395-0693
            </a>
        </div>
      </section>
    </div>
  );
}
