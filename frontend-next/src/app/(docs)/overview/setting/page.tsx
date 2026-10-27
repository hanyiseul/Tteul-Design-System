import CodeBlock from "@/shared/components/CodeBlock/CodeBlock"
import Title from "@/shared/components/Title/Title"

const page = () => {
  const bashCode = `npm i class-variance-authority clsx tailwind-merge lucide-react sonner
npm i @radix-ui/react-dialog @radix-ui/react-select @radix-ui/react-tooltip  # 쓰는 것만
npm i -D tailwindcss @tailwindcss/postcss tw-animate-css`

  const tokenCode = `@import '/shared/styles/variables.css'`

  return (
    <div className="content">
      <Title title="설치 · 사용" desc="Next.js(App Router) 프로젝트에 컴포넌트와 토큰을 가져오는 방법입니다."/>
    
      <div className="guideBox">
        <p className="boxTitle">1. 의존성 설치</p>
        <div className="code">
          <CodeBlock lang="BASH" copy code={bashCode} />
        </div>
      </div>

      <div className="guideBox">
        <div className="boxTitle">
          <p>2. 토큰과 스타일</p>
          <span className="boxDesc">variables.css 의 :root 안의 컬러 관련 변수가 모든 컴포넌트의 색을 결정합니다.</span>  
        </div>
        <div className="code">
          <CodeBlock lang="css" copy code={tokenCode} />
        </div>
      </div>

      <div className="guideBox">
        <p className="boxTitle">3. 컴포넌트 사용</p>
        <div className="code">
          <CodeBlock lang="css" copy code={tokenCode} />
        </div>
      </div>
    </div>
  )
}
export default page