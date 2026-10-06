import CountCard from "@/shared/components/CountCard/CountCard";

export default function Home() {
  return (
    <>
      <section>
        <div className="contentBox">
          <span className="badge">v1.0 2026.11</span>
          <h2 className="title">Tteul Design System</h2>
          <span className="desc">상태와 비동기, 성능까지 고려해 설계한 Next.js 디자인 시스템입니다. 
            <br/> 
            로딩 · 빈 결과 · 에러 · 재시도 상태와 중복 요청 방지, 동시 업로드 제어, 뒤로가기 스크롤 복원까지 컴포넌트와 패턴으로 정리했습니다.</span>
        </div>
      </section>

      <section>
        <CountCard title="dd" count={10} desc="Description" />
        <CountCard title="dd" count={10} desc="Description" />
      </section>
    </>
  )
}
