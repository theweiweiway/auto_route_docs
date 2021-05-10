import React from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
import { PageHeader, PageSection } from "../../src/components/page_elements";

export default function Analytics() {
  return (
    <div>
      <PageHeader title="Url Helpers" />
      <PageSection title="Current Url">
        <CodeBlock
          codeString={`AutoRouterDelegate.of(context).urlState.path`}
        />
      </PageSection>

      <PageSection title="Accessing a path parameter from a child widget">
        <CodeBlock
          codeString={`context.routeData.inheritedPathParams.get("some_path_param")`}
        />
      </PageSection>
    </div>
  );
}
