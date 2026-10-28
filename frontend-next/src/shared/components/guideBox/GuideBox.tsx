"use client"

import { ReactNode, useId, useState } from "react"
import CodeBlock from "../CodeBlock/CodeBlock"
import "./GuideBox.css"

type GuideBoxProps = {
  title: string;
  desc?: string;
  children?: ReactNode;
  code?: string;
  lang?: string;
  collapsible?: boolean;
  defaultOpen?: boolean;
}

const GuideBox = ({
  title,
  desc,
  children,
  code,
  lang = "TSX",
  collapsible = false,
  defaultOpen = false,
}: GuideBoxProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const codeId = useId()

  const showCode = !collapsible || isOpen

  return (
    <div className={`guideBox ${showCode ? "isOpen" : ""}`}>
      <div className="boxHeader">
        <div>
          <span className="boxTitle">{title}</span>
          {desc && <p className="boxDesc">{desc}</p>}
        </div>

        {collapsible && code && (
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls={codeId}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? "코드 숨기기" : "코드 보기"}
          </button>
        )}
      </div>

      {children && <div className="sample">{children}</div>}

      {code && (
        <div
          id={codeId}
          className={`code ${showCode ? "codeOpen" : ""}`}
          aria-hidden={!showCode}
          inert={!showCode}
        >
          <CodeBlock lang={lang} copy code={code} />
        </div>
      )}
    </div>
  )
}

export default GuideBox