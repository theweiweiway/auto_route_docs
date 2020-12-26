import React from "react";
import ReactMarkdown from "react-markdown";
import { CodeBlock, InlineCode } from "../../src/components/code_block";
import { PageHeader, PageSection } from "../../src/components/page_elements";

export default function PassingArguments() {
  return (
    <div>
      <PageHeader title="Passing Arguments" />
      <PageSection>
        That's the fun part! <b>AutoRoute</b> automatically detects and handles
        your page arguments for your, the generated Route object will deliver
        all the arguments your page needs including callback functions (to
        return results).
        <p />
        e.g. The following page widget will take an argument of type Book and a
        callback function that returns a rating value on pop.
        <CodeBlock
          codeString={`class BookDetailsPage extends StatelessWidget {
const BookDetailsRoute({this.book, this.onRateBook});

  final Book book;
  final void Function(int) onRateBook;
  ...`}
        />
        <p />
        <b>Note:</b> Default values are respected. Required fields are also
        respected and handled properly.
        <p />
        The generated <InlineCode>bookDetailsRoute</InlineCode> will deliver the
        same arguments to it's corresponding page.
        <CodeBlock
          codeString={`context.router.push(
BookDetailsRoute(
    book: book,
    onRateBook: (rating) {
      // handle result
    }),
);`}
        />
        make sure you call the callback function as you pop the page
        <CodeBlock
          codeString={`onRateBook?.call(RESULT);
context.router.pop();`}
        />
      </PageSection>
    </div>
  );
}
