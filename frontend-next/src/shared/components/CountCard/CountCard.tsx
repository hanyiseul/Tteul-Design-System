import Card from "../Card/Card";
import "./CountCard.css"

type CountCardData = {
  title: string;
  count: number;
  desc?: string;
};
type CountCardProps = {
  datas: CountCardData[];
  columns?: number;
};

const CountCard = ({datas, columns}: CountCardProps) => {
  return (
    <div className={`cardList colums${columns}`}>
      {datas.map((data, index) => (
        <Card className="countCard" key={index}>
          <p className="cardTitle">{data.title}</p>
          <p className="count">{data.count}</p>
          {data.desc && <span className="desc">{data.desc}</span>}
        </Card>
      ))}
    </div>
  )
}
export default CountCard