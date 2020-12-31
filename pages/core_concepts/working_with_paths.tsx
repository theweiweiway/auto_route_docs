import { Typography } from "@material-ui/core";
import React from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
import { PageHeader, PageSection } from "../../src/components/page_elements";

export default function BasicUsage() {
  return (
    <div>
      <PageHeader title="Working with Paths" />
      <PageSection>
        Working with paths in <b>AutoRoute</b> is optional because PageRouteInfo
        objects are matched by name unless pushed as a string using the
        initialDeepLink property in root delegate or pushPath method in
        StackRouter.
        <p />
        When developing a web Application or a native App that requires
        deep-linking you'd probably need to define paths with clear names for
        your routes, if you don’t specify a path it’s going to be generated from
        the page name e.g. <InlineCode>BookListPage</InlineCode> will have
        book-list-page’ as a path, if initial arg is set to true the path will
        be <InlineCode>/</InlineCode> unless it's relative then it will be an
        empty string <InlineCode>''</InlineCode>.
        <CodeBlock
          codeString={`AutoRoute(path: '/books', page: BookListPage),`}
        />
        You can also define a path with a dynamic segment by prefixing it with a
        colon
        <CodeBlock
          codeString={`AutoRoute(path: '/books/:id', page: BookDetailsPage),`}
        />
        if you define a path with a dynamic segment the corresponding page's
        constructor must have a parameter that is annotated with
        <InlineCode>@PathParam('optional-alias')</InlineCode> with the same
        alias/name of the segment.
        <CodeBlock
          codeString={`class BookDetailsPage extends StatelessWidget {
  BookDetailsPage({@PathParam('id') this.bookId});

  final int bookId; 
  ...`}
        />
        Now writing <InlineCode>/books/1</InlineCode> in the browser will
        navigate you to <InlineCode>BookDetailsPage</InlineCode> and
        automatically extract the <InlineCode>bookId</InlineCode> argument from
        the path.
        <p />
        Paths can be redirected by using the{" "}
        <InlineCode>RedirectRoute</InlineCode>. The following setup will
        navigate us to <InlineCode>/books</InlineCode> when{" "}
        <InlineCode>/</InlineCode> is matched.
        <CodeBlock
          codeString={`<AutoRoute> [
  RedirectRoute(path: '/', redirectTo: '/books'),
  AutoRoute(path: '/books', page: BookListPage),
]`}
        />
        Note: <InlineCode>RedirectRoutes</InlineCode> are fullMatched.
      </PageSection>
    </div>
  );
}
