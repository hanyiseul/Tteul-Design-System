import FeatureCard from "@/shared/components/FeatureCard/FeatureCard";
import Title from "@/shared/components/Title/Title"

const page = () => {
  const principlesData = [
    { 
      icon: "/icons/icon_overview1.png",
      title: "디자인 토큰", 
      desc: "컬러, 타이포그래피, 스페이싱, 레디어스, 쉐도우, 사이즈", 
    },
    {
      icon: "/icons/icon_overview2.png", 
      title: "컴포넌트", 
      desc: "버튼부터 데이터 테이블까지 40개의 재사용 컴포넌트", 
    },
    {
      icon: "/icons/icon_overview3.png", 
      title: "패턴", 
      desc: "로그인, 무한 스크롤, 뒤로가기 복원, 게시판, 대시보드", 
    }
  ];
  return (
    <div className="content">
      <Title title="설계 원칙" desc="컴포넌트를 만들고 쓸 때 지키는 여섯 가지 기준입니다." />

      <section>
        <FeatureCard datas={principlesData} columns={2} />
      </section>
    </div>
  )
}
export default page