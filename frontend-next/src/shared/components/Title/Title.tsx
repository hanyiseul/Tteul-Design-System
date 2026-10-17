import "./Title.css"

type TitleProps = {
  h1?: string;
  title: string;
  desc?: string;
}

const Title = ({h1, title, desc}: TitleProps) => {
  return (
    <div className="titleWrap">
        {h1 ? <h1 className="title">{title}</h1> : <p className="title">{title}</p>}
        {desc && <span className="desc">{desc}</span>}
    </div>
  )
}
export default Title