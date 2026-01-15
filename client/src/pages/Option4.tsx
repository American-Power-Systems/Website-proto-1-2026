import { navItems, products } from "@/data/aps";
import { LinkedInFeed } from "@/components/aps/LinkedInFeed";
import { Link } from "wouter";

const heroImage = "/assets/homepage_hero.avif";

export default function Option4() {
  return (
    <div className="font-sans min-h-screen flex bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-aps-blue text-white fixed h-full overflow-y-auto hidden md:flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="font-heading font-bold text-3xl">APS</h1>
          <p className="text-xs text-white/50 mt-1">DC Power Solutions</p>
        </div>

        <nav className="flex-1 py-6">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="block px-6 py-3 hover:bg-white/10 transition-colors border-l-4 border-transparent hover:border-aps-red">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 px-6">
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {products.map(p => (
                <li key={p.title}><a href="#" className="hover:text-white block py-1">{p.title}</a></li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="p-6 border-t border-white/10 bg-aps-dark">
          <Link href="/" className="text-sm text-white/50 hover:text-white flex items-center gap-2">
            &larr; Back to Prototypes
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64">
        {/* Mobile Header */}
        <div className="md:hidden bg-aps-blue text-white p-4 flex justify-between items-center sticky top-0 z-20">
          <span className="font-bold">APS</span>
          <button className="p-2 border border-white/20 rounded">Menu</button>
        </div>

        {/* Hero */}
        <header className="bg-white p-8 md:p-12 border-b border-gray-200">
          <div className="max-w-4xl">
            <span className="text-aps-red font-bold text-sm uppercase tracking-widest mb-2 block">Engineering Excellence</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Leading DC Power Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              We provide comprehensive power solutions designed to meet the rigorous demands of industrial and telecommunications applications.
            </p>
            <div className="h-64 md:h-96 w-full overflow-hidden rounded-xl shadow-inner bg-gray-100">
               <img src={heroImage} className="w-full h-full object-cover" alt="Industrial" />
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Product Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {products.map((prod, idx) => (
              <div key={idx} className="bg-white p-6 rounded border border-gray-200 hover:border-aps-blue transition-colors group">
                 <div className="flex justify-between items-start mb-4">
                   <h4 className="font-bold text-lg text-gray-800 group-hover:text-aps-blue">{prod.title}</h4>
                   <span className="text-gray-300 text-xs">0{idx+1}</span>
                 </div>
                 <p className="text-sm text-gray-500 mb-4">{prod.desc}</p>
                 <a href="#" className="text-sm font-bold text-aps-blue hover:underline">View Catalog &rarr;</a>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Updates</h3>
            <LinkedInFeed className="bg-transparent px-0 py-0" />
          </div>
        </div>

        <footer className="p-8 md:p-12 border-t border-gray-200 text-gray-500 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
             <div>
               <h4 className="font-bold text-gray-900 mb-2">American Power Systems</h4>
               <p>1851 Central Place South, Suite 206<br/>Kent, WA 98030</p>
             </div>
             <div>
               <h4 className="font-bold text-gray-900 mb-2">Contact</h4>
               <p>(800) 395-0693<br/>info@ampowersys.com</p>
             </div>
          </div>
          <p>&copy; 2026 American Power Systems. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
