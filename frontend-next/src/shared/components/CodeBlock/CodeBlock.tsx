"use client";

import { useEffect, useState } from "react";
import "./CodeBlock.css"
import Toast from "../Toast/Toast";

type CodeBlockProps = {
  lang: string;
  code: string;
  copy?: boolean;
}

const CodeBlock = ({lang, code, copy}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState("");

  const handleCopy = async() => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 200);
      setToast("복사가 완료되었습니다.")
    } catch(error) {
      console.error("실패")
    }
  } 
  
  return (
    <>
      <div className="codeBlock">
        <div className="coldeBlock_header">
          <span className="codeLang">{lang}</span>
          {copy && (
            <button type="button" className="btnCopy" onClick={handleCopy}><span className="blind">복사</span></button>
          )}
        </div>
        
        <div className="codeArea">
          <pre className="code">
            {code}
          </pre>
        </div>

      </div>

      {toast && <Toast message={toast} />}
    </>
  )
}
export default CodeBlock