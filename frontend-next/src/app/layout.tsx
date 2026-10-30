import type { Metadata } from "next";
import "./globals.css";
import "@/shared/styles/index.css";
import Header from "@/shared/layout/Header/Header";
import Aside from "@/shared/layout/Aside/Aside";
import ToastProvider from "@/shared/components/Toast/ToastProvider";
import QueryProvider from "@/shared/providers/QueryProvider";

export const metadata: Metadata = {
  title: "Tteul Design System",
  description: "이슬 디자인 시스템",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <ToastProvider>
            <div className="container">
              <Header />
              <Aside />
              <main>
                {children}
              </main>
            </div>
          </ToastProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
