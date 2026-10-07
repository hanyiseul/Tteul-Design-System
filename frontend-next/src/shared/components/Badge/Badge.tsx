import "./Badge.css"
  
type badgeProps = {
  desc: string
  type: "primary" | "secondary" | "white" | "success" | "warning" | "error"
}
const Badge = ({ desc, type }: badgeProps) => {
  return (
    <span className={`badge badge_${type}`}>{desc}</span>
  )
}

export default Badge