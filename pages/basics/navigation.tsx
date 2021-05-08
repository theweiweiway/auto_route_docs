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
        <InlineCode>PageRouteInfo</InlineCode> objects. The main four types of
        methods are:
        <ul>
          <li>
            <InlineCode>push</InlineCode>{" "}
          </li>

          <li>
            <InlineCode>replace</InlineCode>
          </li>
          <li>
            <InlineCode>pop</InlineCode>
          </li>
          <li>
            <InlineCode>navigate</InlineCode>{" "}
          </li>
        </ul>
        Use the following navigation helpers like so
        <CodeBlock
          codeString={`// First, get the scoped router by calling
AutoRouter.of(context)
// or using the extension
context.router

// PUSH methods
// for pushing to the top of the stack
.push(BooksRoute())
.pushNamed('/books')  
// for pushing multiple pages into the stack
.pushAll([BooksRoute(), BookDetailsRoute()])
.popAndPush(BooksRoute())
.popAndPushAll([BooksRoute(), BookDetailsRoute()]) 
// pushes a route and pops the underlying pages based on a predicate
.pushAndPopUntil(BooksRoute(), (route) {return shouldPop(route);})

// REPLACE methods
// for replacing the last page in the stack (throws an error if the stack is empty)
.replace(BooksRoute())
.replaceNamed('/books')
// for replacing multiple pages into the stack
.replaceAll([BooksRoute(), BookDetailsRoute()]) 

// POP methods
// for popping last page of the current stack (unless the stack only has one entry)
.pop()
.popAndPush(BooksRoute())
.popAndPushAll([BooksRoute(), BookDetailsRoute()])
// pops until a specific page based on a predicate
.popUntil((route) {return shouldPop(route);})
.popUntilRoot()
.popUntilRouteWithName('/books') 

// NAVIGATE methods
// if the route already exists in the stack, it will pop until the
// specified route. Otherwise, if the route doesn't exist in the stack,
// then add it to the stack
// The navigate method is especially good for web apps
.navigate(BooksRoute())
.navigateNamed('/books')  
.navigateAll([BooksRoute(), BookDetailsRoute()])`}
        />
        Want to have more streamlined code? Use the built-in{" "}
        <b>context extension methods</b>
        <CodeBlock
          codeString={`context.pushRoute(BooksRoute())
context.replaceRoute(BooksRoute())
context.popRoute()
context.navigateTo(BooksRoute())`}
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
