export type MenuItem = {
  label: string;
  path: string;
  section: string;
};

export const menuList = [
  {
    label: "오버뷰",
    path: "/",
    section: "overview",
  },
  {
    label: "디자인 토큰",
    path: "/color",
    section: "color",
  },
  {
    label: "컴포넌트",
    path: "/button",
    section: "component",
  },
  {
    label: "패턴",
    path: "/login",
    section: "pattern",
  },
];

export const sidebarMenus = {
  overview: [
    { label: "Overview", path: "/" },
  ],

  color: [
    { label: "Color", path: "/color" },
    { label: "Typography", path: "/color/typography" },
    { label: "Spacing", path: "/color/spacing" },
  ],

  component: [
    { label: "Button", path: "/button" },
    { label: "Input", path: "/input" },
    { label: "FileUploader", path: "/file-uploader" },
  ],

  pattern: [
    { label: "Login", path: "/login" },
    { label: "Form", path: "/form" },
  ],
};