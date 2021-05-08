import React from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
import { PageHeader, PageSection } from "../../src/components/page_elements";

export default function Analytics() {
  return (
    <div>
      <PageHeader title="Analytics" />
      <PageSection title="Firebase Analytics">
        {" "}
        <CodeBlock
          codeString={`MaterialApp.router(
    routerDelegate: _appRouter.delegate(
        navigatorObservers: () => [
        FirebaseAnalyticsObserver(
            analytics: FirebaseAnalytics(),
        ),
        ],
    ),
    ...
);`}
        />
      </PageSection>
    </div>
  );
}
