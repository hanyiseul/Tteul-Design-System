import GuideBox from '@/shared/components/guideBox/GuideBox'
import Title from '@/shared/components/Title/Title'
import "./shadow.css"

type ShadowItem = {
  shadow: string;
  title: string;
  info: string;
  desc?: string;
}

const shadowList: ShadowItem[] = [
  { shadow: "shadowSm", title: "shadow-sm", info: "0 1px 2px rgba(0, 0, 0, 0.05) · .shadowSm" },
  { shadow: "shadowMd", title: "shadow-md", info: "0 4px 12px rgba(0, 0, 0, 0.08) · .shadowMd" },
  { shadow: "shadowLg", title: "shadow-lg", info: "0 8px 24px rgba(0, 0, 0, 0.12) · .shadowLg" },
  { shadow: "shadowXl", title: "shadow-xl", info: "0 16px 40px rgba(0, 0, 0, 0.16) · .shadowXl" },
]

const page = () => {
  return (
    <div className="content">
      <Title
        title="Shadow"
        desc="표면 구분은 border가 먼저이고, 그림자는 떠 있는 정도를 나타낼 때만 씁니다."
      />

      <GuideBox title="단계">
        {shadowList.map((shadow) => (
          <div className={`shadowBox ${shadow.shadow}`} key={shadow.shadow}>
          <div className="shadowInfo">
            <strong>{shadow.title}</strong>
            <span>{shadow.info}</span>
          </div>
        </div>

        ))}
      </GuideBox>
    </div>
  )
}

export default page