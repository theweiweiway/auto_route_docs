import React from "react";
import { CodeBlock, InlineCode } from "../../src/components/code_block";
import { PageHeader, PageSection } from "../../src/components/page_elements";

export default function GeneratedRoutes() {
  return (
    <div>
      <PageHeader title="Generated Routes" />
      <PageSection>
        AutoRoute generates a <InlineCode>PageRouteInfo</InlineCode> widget for
        every declared <InlineCode>AutoRoute</InlineCode> widget. These objects
        hold path information about your routes, as well as strongly-typed page
        arguments which are extracted from the page's default constructor.
        <CodeBlock
          codeString={`class BooksRoute extends PageRouteInfo {
    const BooksRoute() : super(name, path: '/books');

    static const String name = 'BooksRoute'; 
}`}
        />
      </PageSection>
    </div>
  );
}
