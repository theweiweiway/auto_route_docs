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
    BookDetailsPage({@PathParam('bookId') this.bookId, this.onRateBook}); 

    final int bookId;  
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
    bookId: 1,
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
  AutoRoute<int>(page: BookDetailsPage)`}
        />
        Then, use it in your code!
        <CodeBlock
          codeString={`class BookDetailsPage extends StatelessWidget {
BookDetailsPage({@PathParam('bookId') this.bookId}); 
// note that we took out the onRateBook callback
final int bookId;  

// In the BookDetailsPage, pop with the values you want to return
onPressed: () async {
  context.popRoute(<BOOK_RATING>)
}`}
        />
        And now in the page you are pushing from, simply use it like so
        <CodeBlock
          codeString={`onPressed: () async {
  final int value = await context.pushRoute(BookDetailsPage(bookId: 1))
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
