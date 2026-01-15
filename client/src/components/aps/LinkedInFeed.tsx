import { useEffect } from "react";
import { companyInfo } from "@/data/aps";

interface LinkedInFeedProps {
  variant?: "default" | "dark" | "minimal";
}

export function LinkedInFeed({ variant = "default" }: LinkedInFeedProps) {
  
  useEffect(() => {
    // Only load script if not already present
    if (!document.querySelector('script[src*="linkedin.com/badges"]')) {
        const script = document.createElement("script");
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
  }, []);

  const isDark = variant === "dark";
  const isMinimal = variant === "minimal";

  // Styles based on variant
  const bgClass = isDark ? "bg-[#0f0f0f] border-t border-gray-800" : "bg-gray-50 border-t border-gray-200";
  const textClass = isDark ? "text-white" : "text-aps-navy";
  
  if (isMinimal) {
      return (
        <section className={`py-8 ${bgClass}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <span className={`font-bold ${textClass}`}>Latest Updates</span>
                <div 
                    className="badge-base LI-profile-badge" 
                    data-locale="en_US" 
                    data-size="medium" 
                    data-theme={isDark ? "dark" : "light"} 
                    data-type="HORIZONTAL" 
                    data-vanity="american-power-systems-llc" 
                    data-version="v1"
                >
                    <a className="badge-base__link LI-simple-link" href={companyInfo.linkedinUrl}>
                        American Power Systems
                    </a>
                </div>
            </div>
        </section>
      );
  }

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
                <h2 className={`text-3xl font-bold ${textClass} mb-2`}>Connect with APS</h2>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                    Follow us for recent projects, installation photos, and company news.
                </p>
            </div>
            <a 
                href={companyInfo.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0077b5] text-white px-6 py-2 rounded font-bold text-sm hover:bg-[#005582] transition-colors flex items-center gap-2"
            >
                <i className="fab fa-linkedin"></i> View Full Feed
            </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Primary Profile Badge (Official Widget) */}
            <div className={`p-4 rounded-lg shadow-sm flex justify-center ${isDark ? "bg-[#1a1a1a]" : "bg-white"}`}>
                <div 
                    className="badge-base LI-profile-badge" 
                    data-locale="en_US" 
                    data-size="large" 
                    data-theme={isDark ? "dark" : "light"} 
                    data-type="VERTICAL" 
                    data-vanity="american-power-systems-llc" 
                    data-version="v1"
                >
                    <a className="badge-base__link LI-simple-link" href={companyInfo.linkedinUrl}>
                       American Power Systems, LLC
                    </a>
                </div>
            </div>

            {/* Fallback / Manual Link Card (Safe if JS fails) */}
            <div className={`p-8 rounded-lg shadow-sm flex flex-col justify-center items-center text-center ${isDark ? "bg-[#1a1a1a]" : "bg-white"}`}>
                <h3 className={`text-xl font-bold mb-4 ${textClass}`}>Recent Project Highlights</h3>
                <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    We frequently post photos from our Central Office and remote site installations.
                </p>
                <a href={companyInfo.linkedinUrl + "/posts"} target="_blank" className="text-aps-red font-bold hover:underline">
                    Browse Project Gallery &rarr;
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
