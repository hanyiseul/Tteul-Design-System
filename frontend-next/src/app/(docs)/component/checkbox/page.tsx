import { Checkbox } from "@/shared/components/Checkbox/Checkbox"
import Radio from "@/shared/components/Radio/Radio"
import Title from "@/shared/components/Title/Title"
import GuideBox from "@/shared/components/guideBox/GuideBox"

const checkboxCode = `<Checkbox text="Default"/>
<Checkbox text="Checked" checked/>
<Checkbox text="Disabled" disabled />
<Checkbox text="Disabled Checked" disabled checked />`

const radioCode = `<Radio name="radio1" option="Default" />
<Radio name="radio2" option="Checked" checked />
<Radio name="radio3" option="Disabled" disabled />
<Radio name="radio4" option="Disabled Checked" disabled checked />`

const radioGrupCode = `<Radio name="radio" option="Free" desc="개인 프로젝트, 기본 기능"/>
<Radio name="radio" option="Pro" desc="소규모 팀, 고급 기능 포함" />
<Radio name="radio" option="Enterprise" desc="대규모 조직, 전용 지원" />`

const page = () => {
  return (
    <div className="content">
      <Title
        title="Checkbox & Radio"
        desc="체크박스와 라디오 버튼은 선택 항목을 나타내는 UI 컴포넌트입니다."
      />

      <GuideBox
        title="CheckBox"
        code={checkboxCode}
        desc="indeterminate 상태를 지원합니다. 전체 선택/해제 UI에 활용하세요."
      >
        <Checkbox text="Default"/>
        <Checkbox text="Checked" checked/>
        <Checkbox text="Disabled" disabled />
        <Checkbox text="Disabled Checked" disabled checked />
      </GuideBox>

      <GuideBox
        title="Radio"
        code={radioCode}
        desc="하나의 그룹 내에서 하나의 옵션만 선택할 수 있습니다. 선택 항목을 변경할 때 사용하세요."
        collapsible
      >
        <Radio name="radio1" option="Default" />
        <Radio name="radio2" option="Checked" checked />
        <Radio name="radio3" option="Disabled" disabled />
        <Radio name="radio4" option="Disabled Checked" disabled checked />
      </GuideBox>

      <GuideBox
        title="Radio Group"
        code={radioGrupCode}
        desc="단일 선택 그룹입니다."
        collapsible
      >
        <Radio name="radio" option="Free" desc="개인 프로젝트, 기본 기능"/>
        <Radio name="radio" option="Pro" desc="소규모 팀, 고급 기능 포함" />
        <Radio name="radio" option="Enterprise" desc="대규모 조직, 전용 지원" />
      </GuideBox>

    </div>
  )
}
export default page