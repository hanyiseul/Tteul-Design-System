"use client"

import Button from "@/shared/components/Button/Button"
import CodeBlock from "@/shared/components/CodeBlock/CodeBlock"
import GuideBox from "@/shared/components/guideBox/GuideBox"
import Title from "@/shared/components/Title/Title"
import { useState } from "react"

const Page = () => {
  const variantsCode = `<Button text="Primary" />
<Button text="Secondary" variant="secondary" />
<Button text="Ghost" variant="ghost" />
<Button text="Outline" variant="outline" />
<Button text="Danger" variant="danger" />`

return (
  <div className="content">
    <Title
      title="Button"
      desc="클릭 액션의 기본 단위. loading 상태에서는 이중 제출이 자동 방지됩니다."
    />

    <GuideBox
      title="Variants"
      code={variantsCode}
      collapsible
    >
      <Button text="Primary" />
      <Button text="Secondary" variant="secondary" />
      <Button text="Ghost" variant="ghost" />
      <Button text="Outline" variant="outline" />
      <Button text="Danger" variant="danger" />
    </GuideBox>

    <GuideBox
      title="Size"
      code={`<Button text="Primary" size="sm" />
<Button text="Primary" />
<Button text="Primary" size="lg" />`}
      collapsible
    >
      <Button text="Primary" size="sm" />
      <Button text="Primary" />
      <Button text="Primary" size="lg" />
    </GuideBox>
  </div>
  )
}
export default Page