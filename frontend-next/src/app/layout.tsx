import type { Metadata } from "next";
import "./globals.css";
import "@/shared/styles/index.css";
import Header from "@/shared/layout/Header/Header";

export const metadata: Metadata = {
  title: "Tteul Design System",
  description: "이슬 디자인 시스템",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>
           {children}
        </main>
      </body>
    </html>
  );
}
