import GuideBox from "@/shared/components/guideBox/GuideBox"
import Title from "@/shared/components/Title/Title"
import "./color.css"

const Page = () => {

  const backgrounds = [
    {
      className: "bgGray50",
      name: "background",
      hex: "#f9fafb",
      desc: "페이지 바탕",
    },
    {
      className: "bgWhite",
      name: "card",
      hex: "#fff",
      desc: "카드 · 패널 · 드롭다운 · 툴팁",
    },
    {
      className: "bgSecondary",
      name: "secondary",
      hex: "#f4f6f8",
      desc: "보조 버튼 · 중립 배지",
    },
    {
      className: "bgMuted",
      name: "muted",
      hex: "#f2f4f6",
      desc: "hover · 스켈레톤",
    },
    {
      className: "bgAccent",
      name: "accent",
      hex: "#ebf3fe",
      desc: "선택된 메뉴 · 정보 알림",
    },
    {
      className: "bgGray200",
      name: "border",
      hex: "#e5e8eb",
      desc: "선택된 메뉴 · 정보 알림",
    },
    {
      className: "bgGray100",
      name: "input-background",
      hex: "#f4f6f8",
      desc: "입력 채움",
    },
  ];

  const texts = [
    {
      bg: "bgGray900",
      className: "textGray900",
      name: "foreground",
      hex: "#191f28",
      desc: "본문 · 제목",
    },
    {
      bg: "bgGray700",
      className: "textSecondary",
      name: "secondary-foreground",
      hex: "#4e5968",
      desc: "본문 · 제목",
    },
    {
      bg: "bgGray500",
      className: "textGray500",
      name: "muted-foreground",
      hex: "#8b95a1",
      desc: "캡션 · 플레이스홀더",
    },
    {
      bg: "bgPrimaryHover",
      className: "textAccent",
      name: "accent-foreground",
      hex: "#1b64da",
      desc: "accent 위 글자",
    },
  ]

  const brands = [
    {
      bg: "bgPrimary",
      className: "textPrimary",
      name: "primary",
      hex: "#3182f6",
      desc: "주 액션 · 링크 · 진행률",
    },
    {
      bg: "bgWhite",
      className: "textWhite",
      name: "primary-foreground",
      hex: "#fff",
      desc: "primary 위 글자",
    },
    {
      bg: "bgDestructive",
      className: "textDestructive",
      name: "destructive",
      hex: "#f04452",
      desc: "에러 · 삭제",
    },
    {
      bg: "bgWhite",
      className: "textWhite",
      name: "destructive-foreground",
      hex: "#fff",
      desc: "destructive 위 글자",
    },
    {
      bg: "bgPrimaryLight",
      className: "bgPrimaryLight",
      name: "ring",
      hex: "#ebf3fe",
      desc: "포커스 링",
    },
    {
      bg: "bgGray400",
      className: "bgGray400",
      name: "switch-background",
      hex: "#c0c7d2",
      desc: "꺼진 스위치",
    },
  ]

  const charts = [
    {
      bg: "bgPrimary",
      name: "chart-1",
      hex: "#3182f6",
      desc: "1번 계열",
    },
    {
      bg: "bgDestructive",
      name: "chart-2",
      hex: "#f04452",
      desc: "2번 계열",
    },
    {
      bg: "bgSuccess",
      name: "chart-3",
      hex: "#00b8a9",
      desc: "3번 계열",
    },
    {
      bg: "bgWarning",
      name: "chart-4",
      hex: "#ff8c00",
      desc: "4번 계열",
    },
    {
      bg: "bgChart5",
      name: "chart-5",
      hex: "#9747ff",
      desc: "5번 계열",
    },
  ]
  return (
    <div className="content">
      <Title
        title="Color"
        desc="모든 색은 variables.css 의 CSS 변수입니다."
      />

      <GuideBox
        title="Background"
        desc="면과 경계"
      >
        {backgrounds.map((bg) => (
          <div className="colorBox" key={bg.className}>
            <div className={`color ${bg.className}`}></div>

            <div className="colorDesc">
              <strong>{bg.name}</strong>
              <strong>{bg.className}</strong>
              <span>{bg.hex}</span>
              <span>{bg.desc}</span>
            </div>
          </div>
        ))}
      </GuideBox>

      <GuideBox
        title="Text"
        desc="글자색"
      >
        {texts.map((tc) => (
          <div className="colorBox" key={tc.className}>
            <div className={`color ${tc.bg}`}></div>

            <div className="colorDesc">
              <strong>{tc.name}</strong>
              <span>.{tc.className}</span>
              <span>{tc.hex}</span>
              <span>{tc.desc}</span>
            </div>
          </div>
        ))}
      </GuideBox>

      <GuideBox
        title="Brand · Status"
        desc="액션과 상태"
      >
        {brands.map((brand, index) => (
          <div className="colorBox" key={index}>
            <div className={`color ${brand.bg}`}></div>

            <div className="colorDesc">
              <strong>{brand.name}</strong>
              <span>.{brand.className}</span>
              <span>{brand.hex}</span>
              <span>{brand.desc}</span>
            </div>
          </div>
        ))}
      </GuideBox>

      <GuideBox
        title="Chart"
        desc="차트 계열"
      >
        {charts.map((chart) => (
          <div className="colorBox" key={chart.bg}>
            <div className={`color ${chart.bg}`}></div>

            <div className="colorDesc">
              <strong>{chart.name}</strong>
              <span>{chart.hex}</span>
              <span>{chart.desc}</span>
            </div>
          </div>
        ))}
      </GuideBox>
    </div>
  )
}
export default Page