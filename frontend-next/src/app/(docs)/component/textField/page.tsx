import GuideBox from "@/shared/components/guideBox/GuideBox"
import Input from "@/shared/components/Input/Input"
import InputField from "@/shared/components/InputField/InputField"
import Title from "@/shared/components/Title/Title"

const variantsCode = `<Input placeholder="기본 텍스트 필드" />
<InputField label="이메일" placeholder="name@example.com" />
<InputField label="사용자명" placeholder="john_doe" infoMsg="영문, 숫자, 언더스코어만 사용 가능합니다." />
<InputField label="사용자명" placeholder="john_doe" errorMsg="비밀번호가 일치하지 않습니다." />`

const iconCode = `<InputField label="이메일" placeholder="name@example.com" icon="email" />
<InputField type="tel" label="전화번호" placeholder="010-1234-5678" icon="tell" />
<InputField label="검색" placeholder="검색어를 입력하세요" icon="search" />
`

const page = () => {
  return (<div className="content">
    <Title
      title="TextField"
      desc="레이블, 도움말, 오류 문구, 앞·뒤 요소를 지원하는 입력 필드입니다."
    />

    <GuideBox
      title="기본 variants"
      code={variantsCode}
      collapsible
    >
      <div className="flex flexCol gapSm">
        <Input placeholder="기본 텍스트 필드" />
        <InputField label="이메일" placeholder="name@example.com" />
        <InputField label="사용자명" placeholder="john_doe" infoMsg="영문, 숫자, 언더스코어만 사용 가능합니다." />
        <InputField label="사용자명" placeholder="john_doe" errorMsg="비밀번호가 일치하지 않습니다." />
      </div>
    </GuideBox>

    <GuideBox
      title="Prefix icon"
      code={iconCode}
      collapsible
    >
      <div className="flex flexCol gapSm">
        <InputField label="이메일" placeholder="name@example.com" icon="email" />
        <InputField type="tel" label="전화번호" placeholder="010-1234-5678" icon="tell" />
        <InputField label="검색" placeholder="검색어를 입력하세요" icon="search" />
      </div>
    </GuideBox>

    <GuideBox
      title="Suffix button"
      code={iconCode}
      collapsible
    >
      <div className="flex flexCol gapSm">
        <InputField type="password" label="비밀번호" placeholder="비밀번호를 입력하세요" />
      </div>
    </GuideBox>
  </div>
  )
}
export default page