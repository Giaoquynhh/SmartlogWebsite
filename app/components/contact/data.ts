export type ContactMethod = {
  key: string;
  label: string;
  value: string;
  icon: "phone" | "email" | "whatsapp";
};

export const contactMethods: ContactMethod[] = [
  {
    key: "phone",
    label: "Nhận tư vấn qua hotline ngay!",
    value: "1800 6464",
    icon: "phone",
  },
  {
    key: "email",
    label: "Gửi đề xuất hợp tác?",
    value: "marketing@gosmartlog.com",
    icon: "email",
  },
  {
    key: "whatsapp",
    label: "Whatsapp",
    value: "+84 909 999 999",
    icon: "whatsapp",
  },
];

export type ContactOffice = {
  key: string;
  city: string;
  address: string;
};

export const contactOffices: ContactOffice[] = [
  {
    key: "hcm",
    city: "Trụ sở TP.HCM",
    address:
      "Số 9 TTC1 Đường Sông Hành, Thảo Điền, TP. Thủ Đức, TP. HCM",
  },
  {
    key: "hn",
    city: "Văn phòng Hà Nội",
    address:
      "Số 4, ngách 8, ngõ 102, Ngụy Như Kon Tum, Nhân Chính, Thanh Xuân, Hà Nội",
  },
  {
    key: "india",
    city: "Văn phòng Ấn Độ",
    address:
      "203, Pyramid Axis, 8/A Cosmo Stone, Baner Road, Pune, Mh, IN - 411045",
  },
];

export type ContactFormField = {
  key: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
  required?: boolean;
};

export const contactFormFields: ContactFormField[] = [
  {
    key: "fullname",
    label: "Họ và tên",
    placeholder: "Họ và tên",
    type: "text",
    required: true,
  },
  {
    key: "company",
    label: "Doanh nghiệp đang công tác",
    placeholder: "Doanh nghiệp đang công tác",
    type: "text",
  },
  {
    key: "phone",
    label: "Số điện thoại",
    placeholder: "Số điện thoại",
    type: "tel",
    required: true,
  },
  {
    key: "position",
    label: "Chức vụ",
    placeholder: "Chức vụ",
    type: "text",
  },
  {
    key: "email",
    label: "Email",
    placeholder: "Email",
    type: "email",
    required: true,
  },
  {
    key: "industry",
    label: "Ngành hàng cần quan tâm",
    placeholder: "Ngành hàng cần quan tâm",
    type: "text",
  },
  {
    key: "product",
    label: "Sản phẩm cần tư vấn",
    placeholder: "Sản phẩm cần tư vấn",
    type: "text",
  },
  {
    key: "source",
    label: "Bạn biết đến Smartlog từ đâu?",
    placeholder: "Bạn biết đến Smartlog từ đâu?",
    type: "text",
  },
  {
    key: "message",
    label: "Lời nhắn cho Smartlog",
    placeholder: "Lời nhắn cho Smartlog",
    type: "textarea",
  },
];
