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
      <PageHeader title="Passing Arguments" />
      <PageSection>
        Unlike other routing solutions, AutoRoute can pass any type of argument
        to it's routes! AutoRoute automatically detects and handles your page
        arguments for you, and the generated Route object will deliver all the
        arguments your page needs including callback functions (eg. to return
        results).
        <p />
        The following page widget will take an argument of type
        <InlineCode>Book</InlineCode> and a callback function that returns a
        rating value on pop.
        <CodeBlock
          codeString={`class BookDetailsPage extends StatelessWidget {
    const BookDetailsRoute({this.book, this.onRateBook});
 
    final Book book; 
    final void Function(int) onRateBook;
    ...`}
        />
        <b>Note</b>: Default values are respected. Required fields are also
        respected and handled properly.
        <p />
        Now, the generated <InlineCode>BookDetailsRoute</InlineCode> will
        deliver the same arguments to it's corresponding page
        <CodeBlock
          codeString={`context.router.push(
BookDetailsRoute(
    book: book,
    onRateBook: (rating) { 
        // handle result
    }),
);`}
        />
        Don't forget to call the callback function as you pop the page!
        <CodeBlock
          codeString={`onRateBook?.call(RESULT);
context.router.pop();`}
        />
      </PageSection>
      <PageFooter
        back={{
          name: "Navigation",
          href: "/basics/navigation",
        }}
        next={{ name: "Nested Routes", href: "/basics/nested_routes" }}
      />
    </div>
  );
}
