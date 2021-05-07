import React from "react";
import { CodeBlock, InlineCode } from "../../src/components/code_block";
import {
  PageFooter,
  PageHeader,
  PageSection,
} from "../../src/components/page_elements";

export default function RootRouter() {
  return (
    <div>
      <PageHeader title="Navigation" />
      <PageSection>
        We've touched upon programmatic navigation in the previous two sections.
        However, there are many more methods to get fine-grained control of
        navigation within your app.
        <p />
        AutoRouter offers the same known push, pop and friends methods to
        manipulate the pages stack using the generated
        <InlineCode>PageRouteInfo</InlineCode> objects.
        <CodeBlock
          codeString={`// get the scoped router by calling
AutoRouter.of(context)
// or using the extension
context.router
   
// adds a new entry to pages stack 
context.pushRoute(BooksRoute())
// or push the route via path
context.router.pushNamed("/books")

// pops the last page unless stack has 1 entry
context.router.pop()


// if the route exists in the stack, it will pop until the specified route
// if it does not exist in the stack, it will add it to the stack (good for web)
context.navigateTo(BooksRoute())

// replaces last entry in stack, throws an error if stack is empty
context.replaceRoute(BooksRoute())`}
        />
      </PageSection>
      <PageFooter
        back={{
          name: "Working with Paths",
          href: "/basics/working_with_paths",
        }}
        next={{ name: "Passing Arguments", href: "/basics/passing_arguments" }}
      />
    </div>
  );
}
