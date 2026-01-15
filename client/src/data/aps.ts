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

export const navItems = [
  { name: "Home", href: "#top", id: "home" },
  { name: "Products", href: "#products", id: "products" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Locations", href: "/locations", id: "locations" },
  { name: "Partners", href: "#partners", id: "partners" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export const products = [
  { 
    title: "DC Power Plants", 
    desc: "Complete turnkey DC power plants, rectifiers, and distribution panels for telecom & utility.",
    details: "We provide solutions from industry leaders with necessary rectifiers, chargers, converters, and distribution.",
    // Using your C&D Header image here as it's perfect for DC Power
    image: "/assets/cd_cat_header.jpg", 
    icon: Zap
  },
  { 
    title: "Batteries (VRLA & Flooded)", 
    desc: "Premium reserve power solutions including VRLA, NiCad, and Lithium-ion technologies.",
    details: "Authorized distributor for MK Battery, East Penn, and other top-tier manufacturers.",
    // Using one of your uploaded facility/battery images
    image: "/assets/897bc8aa394edab959e2a18f5c83f36a.jpg",
    icon: Battery
  },
  { 
    title: "UPS & Inverters", 
    desc: "Single Phase and Three Phase UPS systems and inverters for critical AC power backup.",
    details: "Protect your critical loads with reliable AC power solutions.",
    // Using the generated industrial floor image as a placeholder for UPS
    image: "/assets/generated_images/industrial_power_systems_factory_floor.png",
    icon: Server
  },
  { 
    title: "Racking & Containment", 
    desc: "Seismic-rated battery racking, spill containment systems, and safety compliance gear.",
    details: "Includes over-current protection, bus/cable components, and certified spill containment.",
    // Using your facility photo
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
    title: "Disposal & Logistics",
    desc: "Removal and disposal of lead acid batteries with certificates. Labor, material procurement, and site delivery.",
    icon: Trash2,
    details: ["EPA Compliant Disposal", "Material Procurement", "Site Delivery"]
  }
];

export const partners = [
  { name: "East Penn Manufacturing", logo: "/assets/EPM-Logo_RGB.jpg" },
  { name: "C&D Technologies", logo: "/assets/cd-logo.png" }, // Ensure you upload this file!
  { name: "MK Battery", logo: "/assets/MK Battery.png" },
  { name: "Enviroguard", logo: "/assets/Enviroguard.png" },
  { name: "Hindle Power", logo: "/assets/Hindle.png" },
  { name: "C&C Power", logo: "/assets/cc-power-logo.png" }
];

export const locations = [
  {
    name: "Corporate Headquarters",
    address: "1851 Central Place South, Suite 206",
    city: "Kent, WA 98030",
    phone: "(800) 395-0693",
    type: "Headquarters",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.566373733735!2d-122.2448966843815!3d47.38222997917046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905bfdb6444445%3A0x6665792d64444445!2s1851%20Central%20Pl%20S%20%23206%2C%20Kent%2C%20WA%2098030!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
  },
  {
    name: "Midwest Operations",
    address: "Davenport Area", 
    city: "Davenport, IA",
    phone: "(563) 555-0123",
    type: "Regional Hub",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95372.56942730303!2d-90.6476337775962!3d41.54305364444444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e234c644444445%3A0x6665792d64444445!2sDavenport%2C%20IA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
  }
];
