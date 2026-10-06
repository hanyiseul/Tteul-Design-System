import Card from "../Card/Card";
import "./CountCard.css"

type CountCardProps = {
  title: string;
  count?: number;
  desc?: string;
};

const CountCard = ({title, count, desc}: CountCardProps) => {
  return (
    <div className="countCardLit">
      <Card className="countCard">
          <div className="cardTitle">{title}</div>
          <div className="count">{count}</div>
          <div className="desc">{desc}</div>
      </Card>
    </div>
  )
}
export default CountCard