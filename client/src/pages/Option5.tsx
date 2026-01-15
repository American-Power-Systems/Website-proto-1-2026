import { navItems, products } from "@/data/aps";
import { LinkedInFeed } from "@/components/aps/LinkedInFeed";
import { Link } from "wouter";

export default function Option5() {
  return (
    <div className="font-sans min-h-screen bg-white text-black selection:bg-aps-red selection:text-white">
      {/* Minimal Header */}
      <header className="px-6 py-6 flex justify-between items-baseline border-b-4 border-black">
        <h1 className="font-heading font-bold text-4xl tracking-tighter">APS</h1>
        <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-black font-bold text-sm uppercase hover:text-aps-red transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Link href="/" className="text-gray-400 text-sm font-medium hover:text-black">Exit</Link>
        </nav>
      </header>

      <main className="px-6">
        {/* Text Hero - No Image */}
        <section className="py-24 max-w-5xl">
          <p className="text-aps-red font-mono font-bold mb-4">EST. 1995 // DC POWER SPECIALISTS</p>
          <h2 className="text-6xl md:text-8xl font-heading font-bold leading-[0.9] mb-8">
            RELIABLE POWER.<br/>
            CRITICAL INFRASTRUCTURE.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black pt-8">
            <div className="col-span-2">
              <p className="text-2xl font-medium leading-tight">
                We engineer and manufacture custom DC power systems for telecommunications, utility, and industrial markets.
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <a href="#" className="inline-block bg-black text-white px-8 py-4 font-bold text-center hover:bg-aps-red transition-colors">
                DOWNLOAD LINE CARD (PDF)
              </a>
            </div>
          </div>
        </section>

        {/* List Layout for Products */}
        <section className="py-16 border-t border-black">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h3 className="font-bold text-xl uppercase">Divisions</h3>
            </div>
            <div className="md:col-span-3">
              <div className="divide-y divide-gray-200">
                {products.map((prod, idx) => (
                  <div key={idx} className="py-6 group flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors -mx-4 px-4 cursor-pointer">
                    <div>
                      <h4 className="text-2xl font-bold group-hover:text-aps-red transition-colors">{prod.title}</h4>
                      <p className="text-gray-500 mt-1">{prod.desc}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Social Feed */}
        <section className="py-16 border-t border-black">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             <div className="md:col-span-1">
               <h3 className="font-bold text-xl uppercase">News Feed</h3>
             </div>
             <div className="md:col-span-3">
               <LinkedInFeed className="py-0" variant="minimal" />
             </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white p-6 mt-12">
        <div className="flex justify-between items-end">
           <div>
             <span className="font-heading font-bold text-2xl">APS</span>
             <p className="text-gray-500 text-sm mt-2">American Power Systems &copy; 2026</p>
           </div>
           <div className="text-right">
             <p className="text-sm font-mono">POWERING THE FUTURE</p>
           </div>
        </div>
      </footer>
    </div>
  );
}
