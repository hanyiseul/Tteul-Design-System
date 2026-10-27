import Button from "@/shared/components/Button/Button"
import CodeBlock from "@/shared/components/CodeBlock/CodeBlock"
import Title from "@/shared/components/Title/Title"

const page = () => {

  const variantsCode = `<Button variant="primary">Primary</Button>`
  return (
    <div className="content">
      <Title title="Button" desc="클릭 액션의 기본 단위. loading 상태에서는 이중 제출이 자동 방지됩니다."/>

      <div className="guideBox">

        <p className="boxTitle">Variants</p>
        <div className="sample">
          <Button text="Primary"/>
          <Button text="Secondary" variant="secondary"/>
          <Button text="Ghost" variant="ghost"/>
          <Button text="Outline" variant="outline"/>
          <Button text="Danger" variant="danger"/>
          링크
        </div>
        <div className="code">
          <CodeBlock lang="TSX" copy code={variantsCode} />
        </div>
      </div>
    </div>
  )
}
export default page