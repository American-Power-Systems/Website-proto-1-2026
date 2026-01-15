import { navItems, products, partners } from "@/data/aps";
import { Link } from "wouter";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

export default function Products() {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Header */}
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

      {/* Hero */}
      <section className="bg-gray-100 py-20 border-b border-gray-200">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-aps-navy mb-6">Product Solutions</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We supply DC and AC power system solutions from the leaders in the industry.
            </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
                {products.map((prod, idx) => (
                    <div key={idx} className="flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
                        <div className="h-64 overflow-hidden bg-gray-100 relative group">
                            {/* Placeholder for real image */}
                            <div className="absolute inset-0 bg-aps-blue/10 group-hover:bg-transparent transition-colors"></div>
                            <img src={prod.image} alt={prod.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <prod.icon className="w-8 h-8 text-aps-red" />
                                <h3 className="text-2xl font-bold text-aps-navy">{prod.title}</h3>
                            </div>
                            <p className="text-gray-700 font-medium mb-4">{prod.desc}</p>
                            <p className="text-gray-500 text-sm mb-8 flex-1">{prod.details}</p>
                            
                            <a href="#contact" className="self-start inline-flex items-center gap-2 text-aps-red font-bold uppercase text-sm tracking-wider hover:underline">
                                Request Quote <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Partners Logos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">Authorized Distributor For</p>
            <div className="flex flex-wrap justify-center gap-12 grayscale opacity-70">
                {partners.map((p, i) => (
                    <img key={i} src={p.logo} alt={p.name} className="h-10 object-contain" />
                ))}
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-aps-navy py-16 text-white text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Need Equipment Pricing?</h2>
            <a href="tel:800-395-0693" className="inline-flex items-center gap-2 bg-aps-red text-white px-8 py-4 font-bold rounded shadow-lg hover:bg-red-700 transition">
                <Phone size={20} /> Call Sales (800) 395-0693
            </a>
        </div>
      </section>
    </div>
  );
}
