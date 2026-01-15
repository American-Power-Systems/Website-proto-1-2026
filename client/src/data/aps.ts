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
    title: "Disposal & Logistics",
    desc: "Removal and disposal of lead acid batteries with certificates. Labor, material procurement, and site delivery.",
    icon: Trash2,
    details: ["EPA Compliant Disposal", "Material Procurement", "Site Delivery"]
  }
];

export const partners = [
  { name: "East Penn Manufacturing", logo: "/assets/EPM-Logo_RGB.jpg" },
  { name: "C&D Technologies", logo: "/assets/cd-logo.png" },
  { name: "MK Battery", logo: "/assets/MK Battery.png" },
  { name: "Enviroguard", logo: "/assets/Enviroguard.png" },
  { name: "Hindle Power", logo: "/assets/Hindle.png" },
  { name: "C&C Power", logo: "/assets/cc-power-logo.png" }
];

// UPDATED LOCATIONS LIST
export const locations = [
  {
    name: "Kent, WA",
    type: "Corporate Office",
    address: "1851 Central Place South, Suite 206",
    city: "Kent, WA 98030",
    contacts: [
        { label: "Office", phone: "1-800-395-0693" }
    ],
    mapUrl: "https://maps.google.com/maps?q=1851+Central+Place+South+Kent+WA+98030&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
    mapUrl: "https://maps.google.com/maps?q=26507+79th+Ave+South+Kent+WA+98032&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Anchorage, AK",
    type: "Warehouse",
    address: "2410 Azurite, Suite B",
    city: "Anchorage, AK 99507",
    contacts: [
        { label: "Sales | Cody Raymond", phone: "907-791-0288" }
    ],
    mapUrl: "https://maps.google.com/maps?q=2410+Azurite+Suite+B+Anchorage+AK+99507&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
    mapUrl: "https://maps.google.com/maps?q=5237+S+28th+Place+Phoenix+AZ+85040&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Rialto, CA",
    type: "Warehouse",
    address: "2595 W Renaissance Parkway #3",
    city: "Rialto, CA 92376",
    contacts: [
        { label: "Sales | Keana Houston", phone: "714-725-2091" }
    ],
    mapUrl: "https://maps.google.com/maps?q=2595+W+Renaissance+Parkway+Rialto+CA+92376&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
    mapUrl: "https://maps.google.com/maps?q=1627+Industrial+Drive+Suite+C+Stockton+CA+95206&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
    mapUrl: "https://maps.google.com/maps?q=6951+S+Blackhawk+St+Centennial+CO+80112&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
    mapUrl: "https://maps.google.com/maps?q=8440+E+33rd+Street+Indianapolis+IN+46226&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
    mapUrl: "https://maps.google.com/maps?q=3500+Richmond+Dr+NE+Albuquerque+NM+87107&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
    mapUrl: "https://maps.google.com/maps?q=1011+South+Jupiter+Road+Garland+TX+75042&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
    mapUrl: "https://maps.google.com/maps?q=1205+Flint+Meadow+Drive+Kaysville+UT+84037&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Mequon, WI",
    type: "Warehouse",
    address: "6100 West Executive Drive, Ste D",
    city: "Mequon, WI 53092",
    contacts: [
        { label: "Sales | Jackie Mages", phone: "262-282-3678" }
    ],
    mapUrl: "https://maps.google.com/maps?q=6100+West+Executive+Drive+Mequon+WI+53092&t=&z=13&ie=UTF8&iwloc=&output=embed"
  }
];
