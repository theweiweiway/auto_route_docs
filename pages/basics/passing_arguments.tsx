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
          codeString={`context.pushRoute(
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

      <PageSection title="Awaiting results">
        If you would prefer to <InlineCode>await</InlineCode> for the results
        instead of using a callback like above, you can do the following:
        <CodeBlock
          codeString={`// In your router declaration, define the return type
  AutoRoute<int>(page: AwaitPage)`}
        />
        Then, use it in your code!
        <CodeBlock
          codeString={`// In the AwaitPage, pop with the values you want to return
onPressed: () async {
  await context.popRoute(YOUR_VALUES) 
}
...

// Now, you can use the values in the page you are pushing from
onPressed: () async {
  final int value = await context.pushRoute(AwaitPage())
  doSomethingWithYourValue(value)
}`}
        />
        (Thanks for the snippet @jlnrrg)
      </PageSection>

      <PageFooter
        back={{
          name: "Navigation",
          href: "/basics/navigation",
        }}
        next={{ name: "Page Transitions", href: "/basics/page_transitions" }}
      />
    </div>
  );
}
