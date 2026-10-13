"use client";
import { usePathname } from "next/navigation";
import "./Aside.css";
import { getSidebarMenu } from "@/shared/constants/navigation";
import Link from "next/link";
import Image from "next/image";

const Aside = () => {
  const pathname = usePathname();
  const menus = getSidebarMenu(pathname);

  return (
    <aside>
      <div className="sidebar">
        <div className="logo">
          <Link href="/">
            <Image src="/icons/logo.png" alt="logo" width={32} height={32} />
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="검색어를 입력하세요" />
        </div>
        <ul className="sideList">
          {menus.map((menu) => (
            <li key={menu.path} className={pathname === menu.path ? "active" : ""}>
              <Link href={menu.path}>{menu.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside> 
  )
}
export default Aside