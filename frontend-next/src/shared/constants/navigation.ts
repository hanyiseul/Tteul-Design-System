export type MenuItem = {
  label: string;
  path: string;
  section: string;
};

export type SidebarMenuItem = {
  label: string;
  path: string;
};

export const menuList = [
  {
    label: "오버뷰",
    path: "/overview",
    section: "overview",
  },
  {
    label: "디자인 토큰",
    path: "/token/color",
    section: "color",
  },
  {
    label: "컴포넌트",
    path: "/component/button",
    section: "component",
  },
  {
    label: "패턴",
    path: "/login",
    section: "pattern",
  },
];

export const sidebarMenus: Record<string, SidebarMenuItem[]>  = {
  overview: [
    { label: "소개", path: "/overview" },
    { label: "설계 원칙", path: "/overview/principles" },
    { label: "설치 · 사용", path: "/overview/setting" },
  ],

  color: [
    { label: "Color", path: "/token/color" },
    { label: "Typography", path: "/token/typography" },
    { label: "Spacing", path: "/token/spacing" },
  ],

  component: [
    { label: "Button", path: "/component/button" },
    { label: "TextField", path: "/component/textField" },
    { label: "FileUploader", path: "/file-uploader" },
  ],

  pattern: [
    { label: "Login", path: "/login" },
    { label: "Form", path: "/form" },
  ],
};

const getSection = (path: string): string => {
  const section = Object.keys(sidebarMenus).find((key) =>
    sidebarMenus[key].some((item) => path === item.path || path.startsWith(`${item.path}/`))
  );
  return section ?? "overview";
};

export const getCurrentPath = (path: string): string => getSection(path);

export const getSidebarMenu = (path: string): SidebarMenuItem[] => sidebarMenus[getSection(path)];