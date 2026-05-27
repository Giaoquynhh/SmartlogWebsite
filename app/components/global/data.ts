export type GlobalStat = {
  value: string;
  label: string;
  caption: string;
};

export const globalStats: GlobalStat[] = [
  {
    value: "30-40%",
    label: "Boost in Operational Efficiency",
    caption: "",
  },
  {
    value: "50-70%",
    label: "Faster System Integration",
    caption: "",
  },
  {
    value: "10-15%",
    label: "Reduction in Management Costs",
    caption: "",
  },
  {
    value: "10-20%",
    label: "Lower Average Logistics Costs",
    caption: "",
  },
];

export type GlobalBrand = {
  name: string;
  src: string;
};

export const globalBrandLogos: GlobalBrand[] = [
  { name: "One Mount", src: "/images/global/brands/one-mount.png" },
  { name: "THIÊN LONG", src: "/images/global/brands/thien-long.png" },
  { name: "HÄFELE", src: "/images/global/brands/hafele.png" },
  { name: "MAINETTI", src: "/images/global/brands/mainetti.png" },
  { name: "CENTRAL RETAIL", src: "/images/global/brands/central-retail.png" },
];

export type GlobalAward = {
  key: string;
  title: string;
  subtitle: string;
};

export const globalAwards: GlobalAward[] = [
  {
    key: "apicta",
    title: "APICTA 2025",
    subtitle: "The 1st Runner-up",
  },
  {
    key: "sao-khue",
    title: "Sao Khuê 2025",
    subtitle: "Smart AI First Route Planning",
  },
  {
    key: "top-10",
    title: "Top 10 ICT",
    subtitle: "Vietnam Top 10 Tech & Map 2025",
  },
];

export type GlobalSuccessStory = {
  key: string;
  title: string;
  quote: string;
  name: string;
  position: string;
  videoThumb?: string;
};

export const globalSuccessStory: GlobalSuccessStory = {
  key: "story-1",
  title: "[Customer] slashes operational costs by [X]% with Smartlog STM",
  quote:
    "Smartlog turns operational complexity into seamless simplicity through their high-impact digital innovation.",
  name: "Name",
  position: "Position | [Customer Name]",
};

export type GlobalPartner = {
  key: string;
  name: string;
  website: string;
  description: string;
  location: string;
};

export type GlobalReachStep = {
  index: number;
  title: string;
  description: string;
};

export type GlobalFaq = {
  key: string;
  question: string;
  answer: string;
};

export const globalFaqs: GlobalFaq[] = [
  {
    key: "faq-1",
    question:
      "What does it mean to be a \"Strategic Partner\" in the Smartlog Ecosystem?",
    answer:
      "A Strategic Partner in the Smartlog Solution Ecosystem is a key collaborator co-innovating to redefine the Logistics & Supply Chain landscape. We integrate diverse expertise to build a tech-driven value chain, driving synergy and sustainable growth for a smarter global trade network.",
  },
  {
    key: "faq-2",
    question:
      "What is the long-term vision for the Smartlog International Ecosystem?",
    answer:
      "Our long-term vision is to build the most comprehensive and integrated Logistics ecosystem across Southeast Asia, expanding globally with a network of strategic partners united by technology, sustainability, and shared growth.",
  },
  {
    key: "faq-3",
    question: "How do we ensure a \"Win-Win\" in customized agreements?",
    answer:
      "We collaboratively map success metrics, align incentives, and design transparent agreements that reward joint achievement — making sure every partnership delivers measurable value for both sides.",
  },
];

export const globalSolutions: { code: string; name: string }[] = [
  { code: "STM", name: "Smartlog Transportation Management - STM" },
  { code: "SWM", name: "Smartlog Warehouse Management - SWM" },
  { code: "SOM", name: "Smartlog Order Management - SOM" },
  { code: "COS", name: "Container Optimization Solutions - COS" },
  { code: "STX", name: "Smartlog Transport Exchange - STX" },
  { code: "SSCP", name: "Smartlog Supply Chain Planning - SSCP" },
  { code: "PARTNER", name: "Smartlog Global Partner" },
];

export const globalReachSteps: GlobalReachStep[] = [
  {
    index: 1,
    title: "Legal & Corporate Standing",
    description:
      "Collaboratively supply technically sound portals and exceptional data.",
  },
  {
    index: 2,
    title: "Fixed Presence",
    description:
      "At least one permanent headquarters or operational office.",
  },
  {
    index: 3,
    title: "Vision Alignment",
    description:
      "Shared dedication to Digital Transformation and Sustainability.",
  },
  {
    index: 4,
    title: "Strategic Ambition",
    description:
      "Ready to transcend boundaries and co-author industry breakthroughs.",
  },
];

export const globalPartners: GlobalPartner[] = [
  {
    key: "partner-1",
    name: "Company Name",
    website: "Website",
    description:
      "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2B users after installed base benefits.",
    location: "Ho Chi Minh City",
  },
  {
    key: "partner-2",
    name: "Company Name",
    website: "Website",
    description:
      "Objectively supply technically sound portals than functional data. Quickly aggregate B2B users and worldwide potentialities.",
    location: "Ho Chi Minh City",
  },
  {
    key: "partner-3",
    name: "Company Name",
    website: "Website",
    description:
      "Collaboratively supply technically sound portals and exceptional data. Strategically deploy enterprise-class networks.",
    location: "Ho Chi Minh City",
  },
];
