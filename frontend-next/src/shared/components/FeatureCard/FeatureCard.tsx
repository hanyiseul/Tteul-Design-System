import Image from "next/image";
import Card from "../Card/Card";
import "./FeatureCard.css"

type FeatureCardData = {
  icon?: string;
  number?: number;
  title: string;
  desc?: string;
  href?: string;
  linkText?: string;
};
type FeatureCardProps = {
  datas: FeatureCardData[];
};

const FeatureCard = ({datas}: FeatureCardProps) => {
  return (
    <div className="cardList">
      {datas.map((data, index) => (
        <Card className="featureCard" key={index} href={data.href}>
          <div className="icon">
            {data.icon && <Image src={data.icon} alt={data.title} width={20} height={20} />}
            {data.number && <span className="number">{data.number}</span>}
          </div>          
          <p className="cardTitle">{data.title}</p>
          {data.desc && <span className="desc">{data.desc}</span>}
          {data.href && <span className="linkText">{data.linkText || "둘러보기"}</span>}
        </Card>
      ))}
    </div>
  )
}

export default FeatureCard