"use client"

import useToast from "../Toast/hooks/useToast";
import "./CodeBlock.css"

type CodeBlockProps = {
  lang: string;
  code: string;
  copy?: boolean;
}

const CodeBlock = ({lang, code, copy}: CodeBlockProps) => {
  const { showToast } = useToast();

  const handleCopy = async() => {
    try {
      await navigator.clipboard.writeText(code);
      showToast("복사가 완료되었습니다.")
    } catch(error) {
      console.error(error);
      showToast("복사가 실패했습니다.")
    }
  } 
  
  return (
    <>
      <div className="codeBlock">
        <div className="codeBlock_header">
          <span className="codeLang">{lang}</span>
          {copy && (
            <button type="button" className="btnCopy" onClick={handleCopy}><span className="blind">복사</span></button>
          )}
        </div>
        
        <div className="codeArea">
          <pre>
            {code}
          </pre>
        </div>
      </div>
    </>
  )
}
export default CodeBlock