import { Linkedin } from "lucide-react";

interface LinkedInFeedProps {
  className?: string;
  variant?: "default" | "dark" | "minimal";
}

export function LinkedInFeed({ className, variant }: LinkedInFeedProps) {
  // Replace these with the actual "src" URLs from your LinkedIn Embeds
  const postUrls = [
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7272654321987654321", // Replace with real Post ID
    "https://www.linkedin.com/embed/feed/update/urn:li:share:EXAMPLE_ID_2",      // Replace with real Post ID
    "https://www.linkedin.com/embed/feed/update/urn:li:share:EXAMPLE_ID_3"       // Replace with real Post ID
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-3xl font-heading font-bold text-aps-blue flex items-center gap-3">
              <Linkedin className="w-8 h-8 text-aps-red" />
              Latest from LinkedIn
            </h2>
            <p className="text-gray-500 mt-2">
              Follow us <a href="https://www.linkedin.com/company/american-power-systems-llc" target="_blank" rel="noreferrer" className="text-aps-blue font-bold hover:text-aps-red">@AmericanPowerSystems</a> for real-time updates.
            </p>
          </div>
          
          <a 
            href="https://www.linkedin.com/company/american-power-systems-llc" 
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center justify-center px-6 py-2 border-2 border-aps-blue text-aps-blue font-bold uppercase text-sm tracking-wider hover:bg-aps-blue hover:text-white transition-all"
          >
            View All Posts
          </a>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Post 1 (Featured) */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-[500px]">
            <iframe 
              src={postUrls[0]} 
              height="100%" 
              width="100%" 
              frameBorder="0" 
              title="Embedded post 1"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Post 2 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-[500px]">
             {/* Logic: If URL is valid, show iframe. If not, show placeholder. */}
             {postUrls[1].includes("EXAMPLE") ? (
                <EmptyPlaceholder />
             ) : (
                <iframe 
                  src={postUrls[1]} 
                  height="100%" 
                  width="100%" 
                  frameBorder="0" 
                  title="Embedded post 2"
                  className="w-full h-full"
                ></iframe>
             )}
          </div>

          {/* Post 3 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-[500px]">
             {postUrls[2].includes("EXAMPLE") ? (
                <EmptyPlaceholder />
             ) : (
                <iframe 
                  src={postUrls[2]} 
                  height="100%" 
                  width="100%" 
                  frameBorder="0" 
                  title="Embedded post 3"
                  className="w-full h-full"
                ></iframe>
             )}
          </div>

        </div>
        
        {/* Mobile "View All" Button (Only shows on phone) */}
        <div className="mt-8 text-center md:hidden">
            <a 
            href="https://www.linkedin.com/company/american-power-systems-llc" 
            target="_blank"
            rel="noreferrer"
            className="inline-block w-full bg-aps-blue text-white py-3 font-bold uppercase rounded shadow"
          >
            View Company Page
          </a>
        </div>

      </div>
    </section>
  );
}

// Helper component for empty slots
function EmptyPlaceholder() {
    return (
        <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center text-center p-6">
            <Linkedin className="w-12 h-12 text-gray-300 mb-4" />
            <h3 className="text-gray-400 font-bold text-lg">Coming Soon</h3>
            <p className="text-gray-400 text-sm max-w-[200px]">
                New updates from our engineering team will appear here.
            </p>
        </div>
    );
}
