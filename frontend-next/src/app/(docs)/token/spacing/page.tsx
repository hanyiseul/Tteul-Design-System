import GuideBox from '@/shared/components/guideBox/GuideBox'
import Title from '@/shared/components/Title/Title'
import "./spacing.css"

type SpacingItem = {
  width: number
  desc: string
}

const spacingList: SpacingItem[] = [
  { width: 2, desc: "아이콘 미세 간격" },
  { width: 4, desc: "gap-1 · 아이콘–텍스트" },
  { width: 6, desc: "gap-1.5 · 라벨–입력" },
  { width: 8, desc: "gap-2 · 버튼 내부" },
  { width: 12, desc: "px-3 · 입력 좌우" },
  { width: 16, desc: "p-4 · 폼 간격" },
  { width: 20, desc: "p-5 · StatCard · 데모 헤더" },
  { width: 24, desc: "p-6 · 카드 패딩" },
  { width: 32, desc: "p-8 · 섹션 패딩" },
]

const page = () => {
  return (
    <div className="content">
      <Title
        title="Spacing"
        desc="기본 4px 스케일(0.25rem 단위)을 씁니다. 자주 쓰는 단계와 쓰임입니다."
      />

      <GuideBox title="스케일">
        <ul className="typeList">
          {spacingList.map((spacing) => (
            <li className="typeItem" key={spacing.width}>
              <span className="typeTitle">{spacing.width}px</span>
              <div className="typeDesc spacingBarWrap">
                <div className="spacingBar" style={{ width: spacing.width * 3 }} />
              </div>
              <span className="typeInfo">{spacing.desc}</span>
            </li>
          ))}
        </ul>
      </GuideBox>
    </div>
  )
}

export default page