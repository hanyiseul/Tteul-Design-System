'use client'
import Link from "next/link"
import "./Header.css"
import { usePathname } from "next/navigation";
import { menuList } from "@/shared/constants/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <ul className="menuList">
        {menuList.map((menu) => (
          <li key={menu.path} className={pathname === menu.path ? "active" : ""}>
            <Link href={menu.path}>{menu.label}</Link>
          </li>
        ))}
      </ul>

      <div className="siteInfo">
        <span className="siteSkill">Next.js · TypeScript · Java · MySQL</span>
        <span className="siteName">hanyiseul</span>
      </div>
    </header>
  )
}
export default Header