import { Checkbox } from "@/shared/components/Checkbox/Checkbox"
import Title from "@/shared/components/Title/Title"
import GuideBox from "@/shared/components/guideBox/GuideBox"

const checkboxCode = `<Checkbox text="기본 체크박스"/>
<Checkbox text="기본 체크박스" disabled />
<Checkbox text="기본 체크박스" disabled checked />`

const page = () => {
  return (
    <div className="content">
      <Title
        title="Checkbox"
        desc="indeterminate 상태를 지원합니다. 전체 선택/해제 UI에 활용하세요."
      />

      <GuideBox
        title="기본"
        code={checkboxCode}
        collapsible
      >
        <Checkbox text="기본 체크박스"/>
        <Checkbox text="기본 체크박스" disabled />
        <Checkbox text="기본 체크박스" disabled checked />
      </GuideBox>

    </div>
  )
}
export default page