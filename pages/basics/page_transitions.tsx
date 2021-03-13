import React from "react";
import { CodeBlock, InlineCode } from "../../src/components/code_block";
import { MyLink } from "../../src/components/link";
import {
  PageFooter,
  PageHeader,
  PageSection,
} from "../../src/components/page_elements";

export default function PageTransitions() {
  return (
    <div>
      <PageHeader title="Page Transitions" />
      <PageSection>
        AutoRoute provides an easy way to declare custom transitions between
        pages. Just add your transition to the{" "}
        <InlineCode>transitionsBuilder</InlineCode> field of your route
        <CodeBlock
          codeString={`...
CustomRoute(
    path: '', 
    page: BooksPage,
    transitionsBuilder: SlideTransition(
        position: Tween<Offset>(
          begin: const Offset(0.0, -1.0),
          end: Offset.zero,
        ).animate(animation),
        child: child, 
    );
)
...`}
        />
        <p />
        You can also pick from the several pre-built transitions that ship with
        AutoRoute! For example, the above example can be re-written like so
        <CodeBlock
          codeString={`...
CustomRoute(
    path: '', 
    page: BooksPage,
    transitionsBuilder: TransitionsBuilders.slideTop
)
...`}
        />
      </PageSection>

      <PageFooter
        back={{ name: "Passing Arguments", href: "/basics/passing_arguments" }}
        next={{ name: "Nested Routes", href: "/basics/nested_routes" }}
      />
    </div>
  );
}
