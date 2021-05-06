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
      <PageHeader title="Working with paths" />
      <PageSection>
        Paths are especially useful when you are using deep linking in your app,
        or if you are developing for web. To give a page a path, just set it's{" "}
        <InlineCode>path</InlineCode> field like so:
        <CodeBlock codeString={`AutoRoute(path: "/books", page: BooksPage)`} />
        <p />
        Now, we can easily navigate to this page via deep link, or with the{" "}
        <InlineCode>pushPath</InlineCode> function:
        <CodeBlock codeString={`context.router.pushNamed("/books")`} />
      </PageSection>
      <p />
      <PageSection title="Path Parameters (Dyanmic Segments)">
        You can also define dynamic segments by prefixing with a colon like so:
        <CodeBlock
          codeString={`AutoRoute(path: '/books/:id', page: BookDetailsPage)`}
        />
        If you do this, the corresponding page's constructor <b>must</b> have a
        parameter annotated with{" "}
        <InlineCode>@PathParam('optional-alias')</InlineCode> with the same
        alias/name of the segment.
        <CodeBlock
          codeString={`class BookDetailsPage extends StatelessWidget {
    BookDetailsPage({@PathParam('id') this.bookId});

    final int bookId;
    ...`}
        />
        Now, writing <InlineCode>/books/1</InlineCode> in the browser will
        navigate you to <InlineCode>BookDetailsPage</InlineCode> and
        automatically extract the <InlineCode>bookId</InlineCode> argument from
        the path
      </PageSection>

      <PageSection title="Query Parameters">
        Query parameters are accessed the same way. Simply annotate the
        constructor parameter to hold the value of the query param with
        <InlineCode>@QueryParam('optional-alias')</InlineCode> and let AutoRoute
        do the rest.
        <p />
        You can also access both <b>path</b> or <b>query</b> parameters using
        the scoped <InlineCode>RouteData</InlineCode> object: alias/name of the
        segment.
        <CodeBlock
          codeString={`RouteData.of(context).pathParams;
// or using the extension
context.route.queryParams`}
        />
      </PageSection>

      <PageSection title="Redirection">
        Paths can be redirected using <InlineCode>RedirectRoute</InlineCode>.
        The following setup will navigate us to <b>/books</b> when <b>/</b> is
        matched.
        <CodeBlock
          codeString={`<AutoRoute> [
    RedirectRoute(path: '/', redirectTo: '/books'),
    AutoRoute(path: '/books', page: BookListPage),
]`}
        />
        <b>Note</b>: <InlineCode>RedirectRoute</InlineCode>s are fully matched.
      </PageSection>

      <PageSection title="Wildcards">
        AutoRoute also supports wildcard matching to handle invalid or undefined
        paths.
        <CodeBlock
          codeString={`// wildcards can be used with defined prefixes
AutoRoute(path: '/books/*', page: BooksPage) 
// or with RedirectRoute  
RedirectRoute(path: '*', redirectTo: '/')
`}
        />
        <b>Note</b>: be sure to always add your wildcards at the end of your
        route list because routes are matched in order.
      </PageSection>
      <PageFooter
        next={{
          name: "Navigation",
          href: "/basics/navigation",
        }}
        back={{ name: "The Root Router", href: "/basics/root_router" }}
      />
    </div>
  );
}
