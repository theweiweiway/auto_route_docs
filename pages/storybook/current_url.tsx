import React from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
import { PageHeader, PageSection } from "../../src/components/page_elements";

export default function Analytics() {
  return (
    <div>
      <PageHeader title="Current Url" />
      <CodeBlock
        codeString={`AutoRouterDelegate.of(context).urlState.path   `}
      />
    </div>
  );
}
