import { Link } from "wouter";
import apsLogo from "/assets/aps-logo-white.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-aps-navy text-white py-6 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <img src={apsLogo} alt="APS" className="h-10" />
                <span className="font-light opacity-70 text-sm border-l border-white/30 pl-3 ml-3 hidden sm:block">Website Design Prototypes</span>
            </div>
            <div className="text-xs font-mono bg-black/30 px-3 py-1 rounded">v2.1 (Dark Mode Added)</div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-aps-navy mb-4">Select a Design Concept</h1>
            <p className="text-gray-600 text-lg">
                These 5 options explore different branding balances between "Corporate Industrial" (like East Penn) and "Modern Engineering" (APS).
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Option 1 */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-aps-red overflow-hidden hover:-translate-y-1 transition-transform">
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-aps-navy mb-2">Option 1</h3>
                    <div className="text-xs font-bold text-aps-red uppercase tracking-widest mb-4">The Flagship</div>
                    <p className="text-gray-600 text-sm mb-6">
                        Best blend of East Penn's corporate structure with modern APS branding. Features a sticky header, strong hero image, and clear service separation.
                    </p>
                    <Link href="/option-1">
                        <a className="block w-full text-center bg-aps-navy text-white py-3 rounded font-bold hover:bg-aps-red transition-colors">Launch Prototype</a>
                    </Link>
                </div>
                <div className="bg-gray-100 px-8 py-4 text-xs text-gray-500">
                    <strong>Best for:</strong> General Corporate Audience
                </div>
            </div>

            {/* Option 2 */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-gray-400 overflow-hidden hover:-translate-y-1 transition-transform">
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-aps-navy mb-2">Option 2</h3>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Corporate Standard</div>
                    <p className="text-gray-600 text-sm mb-6">
                        A conservative, grid-based layout similar to many industrial distributor sites. Uses a "boxed" design and standard Bootstrap-style navigation.
                    </p>
                    <Link href="/option-2">
                        <a className="block w-full text-center bg-gray-800 text-white py-3 rounded font-bold hover:bg-black transition-colors">Launch Prototype</a>
                    </Link>
                </div>
                <div className="bg-gray-100 px-8 py-4 text-xs text-gray-500">
                    <strong>Best for:</strong> Conservative / Procurement
                </div>
            </div>

            {/* Option 3 */}
            <div className="bg-[#1a1a1a] rounded-xl shadow-lg border-t-4 border-blue-500 overflow-hidden hover:-translate-y-1 transition-transform">
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Option 3</h3>
                    <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Dark Mode / Engineering</div>
                    <p className="text-gray-400 text-sm mb-6">
                        High-tech, dark-themed dashboard look. Differentiates APS as an advanced engineering partner rather than just a distributor.
                    </p>
                    <Link href="/option-3">
                        <a className="block w-full text-center bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-500 transition-colors">Launch Prototype</a>
                    </Link>
                </div>
                <div className="bg-black px-8 py-4 text-xs text-gray-500">
                    <strong>Best for:</strong> Recruiting & Engineers
                </div>
            </div>

            {/* Option 4 */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-aps-navy overflow-hidden hover:-translate-y-1 transition-transform">
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-aps-navy mb-2">Option 4</h3>
                    <div className="text-xs font-bold text-aps-navy uppercase tracking-widest mb-4">Sidebar / Catalog</div>
                    <p className="text-gray-600 text-sm mb-6">
                        Features a permanent left sidebar navigation. Ideal if the main goal of the site is browsing a large catalog of PDFs and specs.
                    </p>
                    <Link href="/option-4">
                        <a className="block w-full text-center border-2 border-aps-navy text-aps-navy py-3 rounded font-bold hover:bg-aps-navy hover:text-white transition-colors">Launch Prototype</a>
                    </Link>
                </div>
                <div className="bg-gray-100 px-8 py-4 text-xs text-gray-500">
                    <strong>Best for:</strong> Document/Catalog Heavy Usage
                </div>
            </div>

            {/* Option 5 - UPDATED */}
            <div className="bg-black rounded-xl shadow-lg border-t-4 border-aps-red overflow-hidden hover:-translate-y-1 transition-transform ring-1 ring-gray-200">
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Option 5</h3>
                    <div className="text-xs font-bold text-aps-red uppercase tracking-widest mb-4">Dark Mode Corporate</div>
                    <p className="text-gray-400 text-sm mb-6">
                        The exact structure of Option 1, but completely re-skinned in dark tones. Sleek, premium, and reduces eye strain for engineers.
                    </p>
                    <Link href="/option-5">
                        <a className="block w-full text-center bg-gray-800 text-white py-3 rounded font-bold hover:bg-gray-700 transition-colors">Launch Prototype</a>
                    </Link>
                </div>
                <div className="bg-gray-900 px-8 py-4 text-xs text-gray-500">
                    <strong>Best for:</strong> Modern / Premium Feel
                </div>
            </div>

        </div>
      </main>
    </div>
  );
}
