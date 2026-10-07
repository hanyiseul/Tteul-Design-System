import Link from "next/dist/client/link";
import "./Card.css"

type CardProps = {
  className?: string;
  children: React.ReactNode;
  href?: string;
}
const Card = ({className, children, href}: CardProps) => {

  const classNames = `card ${className || ""}`;

  if (href) {
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );
  }
  return (
    <div className={classNames}>
      {children}
    </div>
  )
}
export default Card