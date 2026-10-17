import CodeBlock from "@/shared/components/CodeBlock/CodeBlock"
import Title from "@/shared/components/Title/Title"
import Toast from "@/shared/components/Toast/Toast"

const page = () => {
  const bashCode = `npm i class-variance-authority clsx tailwind-merge lucide-react sonner
npm i @radix-ui/react-dialog @radix-ui/react-select @radix-ui/react-tooltip  # 쓰는 것만
npm i -D tailwindcss @tailwindcss/postcss tw-animate-css`
  return (
    <div className="content">
      <Title title="설치 · 사용" desc="Next.js(App Router) 프로젝트에 컴포넌트와 토큰을 가져오는 방법입니다."/>
    
      <Toast message="test"/>
      <section>
        <div className="settingBox">
          <p className="boxTitle">1. 의존성 설치</p>
        
          <CodeBlock lang="BASH" copy code={bashCode} />
        </div>
      </section>
    </div>
  )
}
export default page