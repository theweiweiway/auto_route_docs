import React, { Fragment } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  a11yDark,
  vscDarkPlus,
  atomDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

export function CodeBlock({
  codeString,
  language = "dart",
}: {
  codeString: string;
  language?: "dart" | "yaml";
}) {
  return (
    <Fragment>
      <div style={{ height: 8 }} />
      <SyntaxHighlighter language={language} style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
      <div style={{ height: 8 }} />
    </Fragment>
  );
}

export function InlineCode({ children }: any) {
  return (
    <Fragment>
      {" "}
      <code
        style={{
          borderRadius: 4,
          background: "#e5e5e5",
          paddingTop: 1,
          paddingBottom: 1,
          paddingLeft: 6,
          paddingRight: 6,
        }}
      >
        {children}
      </code>
    </Fragment>
  );
}
