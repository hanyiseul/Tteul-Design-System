"use client"

import Button from "@/shared/components/Button/Button"
import GuideBox from "@/shared/components/guideBox/GuideBox"
import Title from "@/shared/components/Title/Title"
import { useMutation } from "@tanstack/react-query"

const Page = () => {
  const variantsCode = `<Button text="Primary" />
<Button text="Secondary" variant="secondary" />
<Button text="Ghost" variant="ghost" />
<Button text="Outline" variant="outline" />
<Button text="Danger" variant="danger" />`

  const loadingCode = `<Button text="로딩 테스트" onClick={() => mutation.mutateAsync()}/>`

  const sizeCode = `<Button text="Primary" size="sm" />
<Button text="Primary" />
<Button text="Primary" size="lg" />`

  const disabledCode = `<Button text="Primary" disabled />
<Button text="Secondary" variant="secondary" disabled />
<Button text="Ghost" variant="ghost" disabled />
<Button text="Outline" variant="outline" disabled />
<Button text="Danger" variant="danger" disabled />`

  const withIconCode = `<Button text="추가하기" img="icon_plus.png" />
<Button text="내보내기" variant="secondary" img="icon_download.png" />
<Button text="삭제" variant="danger" img="icon_delete.png" />`

  const mutation = useMutation({
    mutationFn: async () => {
      // 3초 동안 가짜 요청 대기
      await new Promise((resolve) => setTimeout(resolve, 3000));

      return { success: true };
    },
    onSuccess: () => {
      console.log("성공!");
    },
    onError: () => {
      console.log("실패!");
    },
  });

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
        title="Loading — 클릭하면 로딩 상태가 됩니다"
        desc="로딩 중 이중 제출이 방지됩니다."
        code={loadingCode}
        collapsible
      >
        <Button text="로딩 테스트" onClick={() => mutation.mutateAsync()}/>
      </GuideBox>

      <GuideBox
        title="Size"
        code={sizeCode}
        collapsible
      >
        <Button text="Primary" size="sm" />
        <Button text="Primary" />
        <Button text="Primary" size="lg" />
      </GuideBox>

      <GuideBox
        title="Disabled"
        code={disabledCode}
        collapsible
      >
        <Button text="Primary" disabled />
        <Button text="Secondary" variant="secondary" disabled />
        <Button text="Ghost" variant="ghost" disabled />
        <Button text="Outline" variant="outline" disabled />
        <Button text="Danger" variant="danger" disabled />
      </GuideBox>

      <GuideBox
        title="With Icon"
        code={withIconCode}
        collapsible
      >
        <Button text="추가하기" img="icon_plus.png" />
        <Button text="내보내기" variant="secondary" img="icon_download.png" />
        <Button text="삭제" variant="danger" img="icon_delete.png" />
      </GuideBox>

      <GuideBox
        title="Icon Only"
        code={disabledCode}
        collapsible
      >
        <Button text="추가하기" icon="plus" />
        <Button text="다운로드" variant="ghost" icon="download" />
        <Button text="삭제" variant="ghost" icon="delete" />
      </GuideBox>
    </div>
  )
}
export default Page