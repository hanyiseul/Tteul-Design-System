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
    { label: "Typography", path: "/color/typography" },
    { label: "Spacing", path: "/color/spacing" },
  ],

  component: [
    { label: "Button", path: "/component/button" },
    { label: "Input", path: "/input" },
    { label: "FileUploader", path: "/file-uploader" },
  ],

  pattern: [
    { label: "Login", path: "/login" },
    { label: "Form", path: "/form" },
  ],
};

export const getCurrentPath = (path: string): string => {
  const section = menuList.find(
    (menu) =>
      menu.path !== "/" &&
      (path === menu.path || path.startsWith(`${menu.path}/`))
  )?.section ?? "overview";

  return section;
}

export const getSidebarMenu = (path: string): SidebarMenuItem[] => {
  const section = menuList.find(
    (menu) =>
      menu.path !== "/overview" &&
      (path === menu.path || path.startsWith(`${menu.path}/`))
  )?.section ?? "overview";

  return sidebarMenus[section] ?? sidebarMenus.overview;
};
