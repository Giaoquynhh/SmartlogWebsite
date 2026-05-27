export type CustomerCategory = {
  key: string;
  label: string;
};

export const customerCategories: CustomerCategory[] = [
  { key: "all", label: "Tất cả" },
  { key: "retail", label: "Bán sỉ & bán lẻ" },
  { key: "fnb", label: "F&B" },
  { key: "3pl", label: "3PL" },
  { key: "agriculture", label: "Nông Nghiệp" },
  { key: "pharma", label: "Dược phẩm" },
  { key: "materials", label: "Nguyên vật liệu" },
  { key: "appliances", label: "Công nghệ & Điện gia dụng" },
  { key: "fashion", label: "Thời trang" },
];

export type CustomerLogo = {
  name: string;
  src: string;
  category?: string;
};

export const customerLogos: CustomerLogo[] = [
  { name: "Gemadept", src: "/images/customers/logos/gemadept.png" },
  { name: "TBS Logistics", src: "/images/customers/logos/tbs-logistics.png" },
  { name: "Tan Cang Song Than ICD", src: "/images/customers/logos/tan-cang.png" },
  { name: "Bollore Logistics", src: "/images/customers/logos/bollore.png" },
  { name: "Raiza Express", src: "/images/customers/logos/raiza-express.png" },
  { name: "Sabeco", src: "/images/customers/logos/sabeco.png" },
  { name: "One Mount", src: "/images/customers/logos/one-mount.png" },
  { name: "NutiFood", src: "/images/customers/logos/nutifood.png" },
  { name: "Decathlon", src: "/images/customers/logos/decathlon.png" },
  { name: "DEVYT", src: "/images/customers/logos/devyt.png" },
  { name: "TTC Trading", src: "/images/customers/logos/ttc-trading.png" },
  { name: "THACO", src: "/images/customers/logos/thaco.png" },
  { name: "TH true MILK", src: "/images/customers/logos/th-true-milk.png" },
  { name: "Vietnam Post", src: "/images/customers/logos/vietnam-post.png" },
  { name: "Brenntag", src: "/images/customers/logos/brenntag.png" },
  { name: "Abbott", src: "/images/customers/logos/abbott.png" },
  { name: "Saint-Gobain", src: "/images/customers/logos/saint-gobain.png" },
  { name: "ACC", src: "/images/customers/logos/acc.png" },
  { name: "IMEXCO", src: "/images/customers/logos/imexco.png" },
  { name: "Vinaco", src: "/images/customers/logos/vinaco.png" },
];

export type CustomerTestimonial = {
  key: string;
  customer: string;
  productCode: string;
  quote: string;
  logo: string;
};

export const customerTestimonials: CustomerTestimonial[] = [
  {
    key: "asia-dragon-stm",
    customer: "Rồng Á Châu",
    productCode: "STM",
    quote:
      "Chúng tôi đánh giá hệ thống và dịch vụ của Smartlog đang vận hành tốt, ổn định.",
    logo: "/images/customers/testimonials/asia-dragon.png",
  },
  {
    key: "asia-dragon-swm",
    customer: "Rồng Á Châu",
    productCode: "SWM",
    quote:
      "Giao diện mượt, thao tác ổn định. Dịch vụ hỗ trợ nhanh và nhiệt tình.",
    logo: "/images/customers/testimonials/leaf-green.png",
  },
  {
    key: "pvl-som",
    customer: "PVL",
    productCode: "SOM",
    quote:
      "Tôi đánh giá hệ thống vận hành ổn định với mức điểm 4/5.",
    logo: "/images/customers/testimonials/pvl.png",
  },
  {
    key: "asia-dragon-stm-2",
    customer: "Rồng Á Châu",
    productCode: "STM",
    quote:
      "Chúng tôi đánh giá hệ thống và dịch vụ của Smartlog đang vận hành tốt, ổn định.",
    logo: "/images/customers/testimonials/asia-dragon.png",
  },
  {
    key: "asia-dragon-swm-2",
    customer: "Rồng Á Châu",
    productCode: "SWM",
    quote:
      "Giao diện mượt, thao tác ổn định. Dịch vụ hỗ trợ nhanh và nhiệt tình.",
    logo: "/images/customers/testimonials/leaf-green.png",
  },
  {
    key: "pvl-som-2",
    customer: "PVL",
    productCode: "SOM",
    quote:
      "Tôi đánh giá hệ thống vận hành ổn định với mức điểm 4/5.",
    logo: "/images/customers/testimonials/pvl.png",
  },
];

export type CustomerStep = {
  index: number;
  title: string;
  icon: string;
};

export const customerSteps: CustomerStep[] = [
  {
    index: 1,
    title: "Khám phá điểm nghẽn trong quy trình vận hành",
    icon: "/images/customers/steps/step-1.png",
  },
  {
    index: 2,
    title: "Nghiên cứu và thiết kế giải pháp chuẩn xác",
    icon: "/images/customers/steps/step-2.png",
  },
  {
    index: 3,
    title: "Kiểm thử và hiệu chỉnh giải pháp",
    icon: "/images/customers/steps/step-3.png",
  },
  {
    index: 4,
    title: "Triển khai và đào tạo vận hành",
    icon: "/images/customers/steps/step-4.png",
  },
  {
    index: 5,
    title: "Hỗ trợ và bảo trì sau triển khai",
    icon: "/images/customers/steps/step-5.png",
  },
];
