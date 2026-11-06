import GuideBox from '@/shared/components/guideBox/GuideBox'
import Title from '@/shared/components/Title/Title'
import "./typography.css"

type TypeItem = {
  title: string;
  titleDesc?: string;
  desc: string;
  info: string;
  style: string;
}

const typeList: TypeItem[] = [
  {
    title: "h1",
    titleDesc: "페이지 제목",
    desc: "컴포넌트 라이브러리",
    info: "24px · 700 · 1.3 · -0.02em",
    style: "text2xl fontBold leadingMd"
  },
  {
    title: "h2",
    titleDesc: "섹션 제목",
    desc: "최근 업로드한 파일",
    info: "20px · 600 · 1.4",
    style: "textXl fontSbold leadingMd"
  },
  {
    title: "h3",
    titleDesc: "카드 · 다이얼로그 제목",
    desc: "게시글을 삭제할까요?",
    info: "18px · 600 · 1.4",
    style: "textLg fontSbold leadingMd"
  },
  {
    title: "body",
    titleDesc: "본문",
    info: "16px · 400 · 1.3",
    desc: "본문 내용",
    style: "textMd leadingSm"
  },
  {
    title: "meta",
    titleDesc: "메타 정보",
    info: "14px · 400 · 1.3",
    desc: "작성 · 운영진  2026.11.03",
    style: "textSm leadingMd textGray600"
  },
  {
    title: "eyebrow",
    titleDesc: "eyebrow",
    info: "12px · 400 · 1.3",
    desc: "02 — PROGRAMS",
    style: "textXs leadingMd textGray600"
  },
]

const page = () => {
  return (
    <div className="content">
      <Title
        title="Typography"
        desc="본문과 제목은 Pretendard Variable, html 기준 크기는 16px 입니다. "
      />

      <GuideBox title="서체">
        <div className="typographyBox">
          <div className="typographyTitle">가나다 Aa</div>
          <div className="typographyDesc">Pretendard Variable</div>
          <span className="typographyInfo">font-sans · font-display · 45–920</span>
        </div>
      </GuideBox>

      <GuideBox title="타입 스케일">
        <ul className="typeList">
          {typeList.map((type) => (
            <li className="typeItem" key={type.title}>
              <div className="typeTitle">
                <p className="titleComponent">{type.title}</p>
                <span className="titleDesc">{type.titleDesc}</span>
              </div>
              <div className={`typeDesc ${type.style}`}>{type.desc}</div>
              <span className="typeInfo">{type.info}</span>
            </li>
          ))}
        </ul>
      </GuideBox> 
    </div>
  )
}

export default page