import { navItems, products } from "@/data/aps";
import { Link } from "wouter";
import { Zap } from "lucide-react";

export default function Products() {
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
            <h1 className="text-5xl font-bold mb-6">Products</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
                Explore our comprehensive range of DC power solutions.
            </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, idx) => (
                    <div key={idx} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                        <div className="h-48 bg-gray-100 rounded mb-4 overflow-hidden flex items-center justify-center">
                             {/* Placeholder for image */}
                             <Zap className="text-gray-300 w-12 h-12" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                        <p className="text-gray-600 mb-4">{product.desc}</p>
                        <button className="text-aps-red font-bold uppercase text-sm">View Details</button>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
