import CountCard from "@/shared/components/CountCard/CountCard";
import "./overview.css";
import Badge from "@/shared/components/Badge/Badge";
import FeatureCard from "@/shared/components/FeatureCard/FeatureCard";
import { menuList } from "@/shared/constants/navigation";

export default function Home() {
  const countDatas = [
    { title: "컴포넌트", count: 1500, desc: "Actions · Forms · Feedback" },
    { title: "화면 패턴", count: 300, desc: "인증 · 목록 · 데이터" },
    { title: "컬러 토큰", count: 50, desc: "variables.css" },
    { title: "Stroybook 스토리", count: 50, desc: "상태별 스토리" },
  ];

  const featureDatas = [
    { 
      icon: "/icons/icon_overview1.png",
      title: "디자인 토큰", 
      desc: "컬러, 타이포그래피, 스페이싱, 레디어스, 쉐도우, 사이즈", 
      href: menuList.find((menu) => menu.section === "color")?.path,
},
    {
      icon: "/icons/icon_overview2.png", 
      title: "컴포넌트", 
      desc: "버튼부터 데이터 테이블까지 40개의 재사용 컴포넌트", 
      href: menuList.find((menu) => menu.section === "component")?.path,
    },
    {
      icon: "/icons/icon_overview3.png", 
      title: "패턴", 
      desc: "로그인, 무한 스크롤, 뒤로가기 복원, 게시판, 대시보드", 
      href: menuList.find((menu) => menu.section === "pattern")?.path },
  ];
  return (
    <>
      <section>
        <div className="overviewBox">
          <Badge desc="v1.0 2026.11" type="primary" />
          <h1 className="title">Tteul Design System</h1>
          <span className="desc">
            프론트엔드 개발의 일관성과 재사용성을 높이기 위해 설계한 디자인 시스템입니다. <br/>
            디자인 토큰과 공통 컴포넌트를 기반으로 UI 상태, 비동기 처리, 성능을 고려한 다양한 패턴을 정리했습니다. <br />
            로딩 · 빈 결과 · 에러 · 재시도, 중복 요청 방지, 동시 업로드 제어, 뒤로가기 스크롤 복원 등을 재사용 가능한 형태로 구성했습니다.</span>
        </div>
      </section>

      <section>
        <CountCard datas={countDatas} />
      </section>

      <section>
        <FeatureCard datas={featureDatas} />
      </section>
    </>
  )
}
