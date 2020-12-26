import React from "react";
import ReactMarkdown from "react-markdown";
import { CodeBlock, InlineCode } from "../../src/components/code_block";
import { PageHeader, PageSection } from "../../src/components/page_elements";

export default function Navigation() {
  return (
    <div>
      <PageHeader title="Navigation" />
      <PageSection>
        {" "}
        <InlineCode>AutoRoute</InlineCode> offers the same known push, pop and
        friends methods to manipulate the pages stack using the generated
        <InlineCode>PageRouteInfo</InlineCode> objects.
        <CodeBlock
          codeString={`// get the scoped router by calling
AutoRouter.of(context)
// or using the extension
context.router

// adds a new entry to pages stack
router.push(BooksListRoute())

// pops the last page unless stack has 1 entry
context.router.pop()


// pops until provided route, if it already exists in stack
// else adds it to the stack (good for web Apps).
router.navigate(BooksListRoute())

// replaces last entry in stack, throws an error if stack is empty
router.replace(BooksListRoute())`}
        />
      </PageSection>
    </div>
  );
}
