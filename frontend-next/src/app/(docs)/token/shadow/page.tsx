import GuideBox from '@/shared/components/guideBox/GuideBox'
import Title from '@/shared/components/Title/Title'
import React from 'react'

type shdowType = {
  shadow: string;
  title: string;
  info: string;
  desc?: string;
}

const shadowList: RadiusItem[] = [
  { radius: "roundedXs", title: "rounded-xm", info: "2px · .roundedXs" },
  { radius: "roundedSm", title: "rounded-sm", info: "4px · .roundedSm" },
  { radius: "roundedMd", title: "rounded-md", info: "8px · .roundedMd", desc: "작은 요소" },
  { radius: "roundedLg", title: "rounded-lg", info: "12px · .roundedLg", desc: "sm 버튼 · 사이드바 항목" },
  { radius: "roundedXl", title: "rounded-xl", info: "16px · .roundedXl", desc: "버튼 · 입력 · 카드" },
  { radius: "rounded2xl", title: "rounded-2xl", info: "24px · .rounded2xl" },
  { radius: "roundedFull", title: "rounded-full", info: "100% · .roundedFull", desc: "원형" },
]

const page = () => {
  return (
    <div className="content">
      <Title
        title="Radius"
        desc="기준값 --radius: 0.75rem(12px)에서 단계가 계산됩니다. 넉넉한 둥글기가 이 시스템의 부드러운 인상을 만듭니다."
      />

      <GuideBox title="스케일">
        <ul className="typeList">
          {radiusList.map((radius) => (
            <li className="typeItem" key={radius.title}>
              <div className={radius.radius} style={{ width: "100%", height: "96px", background: "var(--primaryLight)", border: "1px solid var(--primary)" }}></div>
              <span className="typeTitle">{radius.title}</span>
              <span className="typeDesc">{radius.desc}</span>
              <span className="typeInfo">{radius.info}</span>
            </li>
          ))}
        </ul>
      </GuideBox>
    </div>
  )
}

export default page