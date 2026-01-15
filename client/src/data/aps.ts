import { 
  Wrench, ClipboardList, Activity, Trash2, 
  Zap, Battery, Server, ShieldCheck, Truck, DraftingCompass 
} from "lucide-react";

export const companyInfo = {
  name: "American Power Systems",
  founded: "1994",
  phone: "(800) 395-0693",
  email: "info@ampowersys.com",
  address: "1851 Central Place South, Suite 206",
  cityStateZip: "Kent, WA 98030",
  tagline: "Complete DC Power Solutions",
  linkedinUrl: "https://www.linkedin.com/company/american-power-systems-llc",
  lineCardUrl: "/assets/aps-line-card.pdf" 
};

// UPDATED: Navigation now points to REAL PAGES for a "built out" experience
export const navItems = [
  { name: "Home", href: "/", id: "home" },
  { name: "Products", href: "/products", id: "products" },
  { name: "Services", href: "/services", id: "services" },
  { name: "Locations", href: "/locations", id: "locations" },
  { name: "Partners", href: "/#partners", id: "partners" }, // Keep partners on homepage
  { name: "Contact", href: "#contact", id: "contact" },
];

export const products = [
  { 
    title: "DC Power Plants", 
    desc: "Complete turnkey DC power plants, rectifiers, and distribution panels for telecom & utility.",
    details: "We provide solutions from industry leaders with necessary rectifiers, chargers, converters, and distribution.",
    image: "/assets/cd_cat_header.jpg", 
    icon: Zap
  },
  { 
    title: "Batteries (VRLA & Flooded)", 
    desc: "Premium reserve power solutions including VRLA, NiCad, and Lithium-ion technologies.",
    details: "Authorized distributor for MK Battery, East Penn, and other top-tier manufacturers.",
    image: "/assets/897bc8aa394edab959e2a18f5c83f36a.jpg",
    icon: Battery
  },
  { 
    title: "UPS & Inverters", 
    desc: "Single Phase and Three Phase UPS systems and inverters for critical AC power backup.",
    details: "Protect your critical loads with reliable AC power solutions.",
    image: "/assets/generated_images/industrial_power_systems_factory_floor.png",
    icon: Server
  },
  { 
    title: "Racking & Containment", 
    desc: "Seismic-rated battery racking, spill containment systems, and safety compliance gear.",
    details: "Includes over-current protection, bus/cable components, and certified spill containment.",
    image: "/assets/40181a_faa5d04f181b4812b04963a4670024b5~mv2.jpg",
    icon: ShieldCheck
  }
];

export const services = [
  {
    title: "Installation & Removal",
    desc: "Specializing in Central Office, Cellular, and Data Centers. We handle batteries, grounding, cabling, ironwork, and bussing.",
    icon: Wrench,
    details: ["Power Plants & Distribution", "Batteries & Grounding", "Ironwork & Bussing"]
  },
  {
    title: "Battery Maintenance",
    desc: "Comprehensive preventative maintenance programs: Basic, Extended, & Select options available.",
    icon: ClipboardList,
    details: ["Preventative Programs", "IEEE Standards", "VRLA & Flooded"]
  },
  {
    title: "Testing & Monitoring",
    desc: "IEEE battery capacity testing, internal resistance testing (VRLA), and remote site monitoring down to individual cells.",
    icon: Activity,
    details: ["Capacity Testing", "Resistance Testing", "Cell Tracking"]
  },
  {
    title: "Project Management",
    desc: "Full installation management and multi-site scheduling, including complex remote site logistics.",
    icon: ClipboardList,
    details: ["Installation Management", "Multi-site Scheduling", "Remote Sites"]
  },
  {
    title: "Engineering",
    desc: "Custom power design, equipment layouts, material selection, and logistics planning.",
    icon: DraftingCompass,
    details: ["Design & Layouts", "Material Selection", "Logistics"]
  },
  {
    title: "Disposal & Logistics",
    desc: "Removal and disposal of lead acid batteries with certificates. Labor, material procurement, and site delivery.",
    icon: Truck,
    details: ["EPA Compliant Disposal", "Material Procurement", "Site Delivery"]
  }
];

export const partners = [
  { name: "East Penn Manufacturing", logo: "/assets/EPM-Logo_RGB.jpg" },
  { name: "C&D Technologies", logo: "/assets/cd-logo.png" }, // Priority Supplier
  { name: "MK Battery", logo: "/assets/MK Battery.png" },
  { name: "Enviroguard", logo: "/assets/Enviroguard.png" },
  { name: "Hindle Power", logo: "/assets/Hindle.png" },
  { name: "C&C Power", logo: "/assets/cc-power-logo.png" }
];

// FULL LOCATION LIST
export const locations = [
  {
    name: "Kent, WA",
    type: "Corporate Office",
    address: "1851 Central Place South, Suite 206",
    city: "Kent, WA 98030",
    contacts: [{ label: "Office", phone: "1-800-395-0693" }],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.5678!2d-122.2!3d47.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905f0!2sAmerican+Power+Systems!5e0!3m2!1sen!2sus!4v1"
  },
  {
    name: "Kent, WA",
    type: "Warehouse",
    address: "26507 79th Ave South",
    city: "Kent, WA 98032",
    contacts: [
        { label: "Sales | Jon Wagoner", phone: "253-216-8288" },
        { label: "Sales | Joshua Sharp", phone: "253-406-9037" }
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.393278637734!2d-122.2465996843699!3d47.41459997917244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905ecc3a223f6b%3A0x6b2b733777777777!2s1851%20Central%20Pl%20S%20%23206%2C%20Kent%2C%20WA%2098030!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
  },
  {
    name: "Anchorage, AK",
    type: "Warehouse",
    address: "2410 Azurite, Suite B",
    city: "Anchorage, AK 99507",
    contacts: [{ label: "Sales | Cody Raymond", phone: "907-791-0288" }],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95460.29749069153!2d-90.6367356653282!3d41.54287532392476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e234c2e6f4277d%3A0x629f6266075677!2sDavenport%2C%20IA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
  },
  {
    name: "Phoenix, AZ",
    type: "Warehouse",
    address: "5237 S. 28th Place",
    city: "Phoenix, AZ 85040",
    contacts: [
        { label: "Sales | Matt Brubaker", phone: "602-361-3220" },
        { label: "Office", phone: "602-437-2150" }
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.353396860388!2d-122.2356!3d47.382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905bfdb7e62563%3A0x1!2s1851%20Central%20Pl%20S%20%23206%2C%20Kent%2C%20WA%2098030!5e0!3m2!1sen!2sus!4v1620000000000"
  },
  {
    name: "Rialto, CA",
    type: "Warehouse",
    address: "2595 W Renaissance Parkway #3",
    city: "Rialto, CA 92376",
    contacts: [{ label: "Sales | Keana Houston", phone: "714-725-2091" }],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95683.50742586324!2d-90.6366!3d41.543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e234c2e6f7b901%3A0x!2sDavenport%2C%20IA!5e0!3m2!1sen!2sus!4v1620000000000"
  },
  {
    name: "Stockton, CA",
    type: "Warehouse",
    address: "1627 Industrial Drive Suite C",
    city: "Stockton, CA 95206",
    contacts: [
        { label: "Office", phone: "209-467-8999" },
        { label: "Sales | Tom Treacy", phone: "661-212-6269" }
    ],
    mapUrl: "https://maps.google.com/maps?q=1851+Central+Place+South+Kent+WA&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Centennial, CO",
    type: "Warehouse | Newly Opened",
    address: "6951 S. Blackhawk St, Ste 200",
    city: "Centennial, CO 80112-4795",
    contacts: [
        { label: "Office", phone: "303-371-6777" },
        { label: "Sales | Nick Knebel", phone: "720-415-1531" }
    ],
    mapUrl: "https://maps.google.com/maps?q=Davenport+IA&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Indianapolis, IN",
    type: "Warehouse",
    address: "8440 E 33rd Street",
    city: "Indianapolis, IN 46226",
    contacts: [
        { label: "Sales | Jackie Mages", phone: "262-282-3678" },
        { label: "Office", phone: "317-550-0568" }
    ],
    mapUrl: "https://maps.google.com/maps?q=Davenport+IA&t=&z=13&ie=UTF8&iwloc=&output"
  },
  {
    name: "Albuquerque, NM",
    type: "Warehouse",
    address: "3500 Richmond Dr, NE, Suite B",
    city: "Albuquerque, NM 87107",
    contacts: [
        { label: "Sales | Kevin Lizarraga", phone: "928-203-6202" },
        { label: "Office", phone: "505-345-0523" }
    ],
    mapUrl: "https://maps.google.com/maps?q=1851+Central+Place+South,+Kent,+WA&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Garland, TX",
    type: "Warehouse",
    address: "1011 South Jupiter Road",
    city: "Garland, TX 75042",
    contacts: [
        { label: "Sales | Josh Hall", phone: "469-263-5484" },
        { label: "Office", phone: "1-877-995-4277" },
        { label: "Houston Sales | Chris Ferguson", phone: "979-398-9176" }
    ],
    mapUrl: "https://maps.google.com/maps?q=Davenport,+IA&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Kaysville, UT",
    type: "Warehouse",
    address: "1205 Flint Meadow Drive",
    city: "Kaysville, UT 84037",
    contacts: [
        { label: "Sales | Mark Nelson", phone: "303-336-8147" },
        { label: "Office", phone: "1-801-444-0207" }
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.566373733735!2d-122.2448966843815!3d47.38222997917046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905bfdb6444445%3A0x6665792d64444445!2s1851%20Central%20Pl%20S%20%23206%2C%20Kent%2C%20WA%2098030!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
  },
  {
    name: "Mequon, WI",
    type: "Warehouse",
    address: "6100 West Executive Drive, Ste D",
    city: "Mequon, WI 53092",
    contacts: [{ label: "Sales | Jackie Mages", phone: "262-282-3678" }],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95372.56942730303!2d-90.6476337775962!3d41.54305364444444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e234c644444445%3A0x6665792d64444445!2sDavenport%2C%20IA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
  }
];
