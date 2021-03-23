import React from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
import {
  PageFooter,
  PageHeader,
  PageImage,
  PageSection,
} from "../../src/components/page_elements";

export default function WrappingRoutes() {
  const wrapperImg = require("../../src/assets/books_wrapper.png");
  return (
    <div>
      <PageHeader title="Wrapping Routes" />
      <PageSection>
        In the last page, we created a<InlineCode>BooksRouter</InlineCode> and
        <InlineCode>AccountRouter</InlineCode> to handle their respective routes
        via nested routes. We can take this example one step further by wrapping
        our nested routes with other widgets. <p /> For example, we might want
        to wrap our <InlineCode>BooksRouter</InlineCode> with a state management
        solution. By doing so, we can scope our state to <b>only</b> books
        routes instead of lifting state up above our main{" "}
        <InlineCode>AppRouter</InlineCode>. <p /> In this example, we'll wrap
        our <InlineCode>BooksRouter</InlineCode> with a <b>cubit</b>, scaffold
        and app bar , and scope it to just books routes. Let's start by creating
        the <InlineCode>BooksWrapperPage</InlineCode> class.
        <CodeBlock
          codeString={`class BookWrapperPage extends StatelessWidget {
  const BookWrapperPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) { 
    return Scaffold(
      appBar: BooksAppBar(),
      body: BlocProvider(
        create: (context) => BooksCubit(),
        child: AutoRouter(), // The AutoRouter() widget used here
        // is required to render sub-routes
      ),
    );
  }
}`}
        />
        Now, we just need to insert our{" "}
        <InlineCode>BooksWrapperPage</InlineCode> into the
        <InlineCode>BooksRouter</InlineCode>
        <CodeBlock
          codeString={`...
AutoRoute(
    path: "/books",
    name: "BooksRouter",
    page: BooksWrapperPage, // We replace EmptyRouterPage with our
    // BooksWrapperPage now!
    children: [
        AutoRoute(path: '', page: BooksPage),
        AutoRoute(path: 'details', page: BookDetailsPage),
        RedirectRoute(path: '*', redirectTo: ''),
    ],
),
...`}
        />
        <p />
        And that's it! Now, all of your books sub-routes will be wrapped by our
        <InlineCode>BooksCubit</InlineCode>, <InlineCode>Scaffold</InlineCode>,
        and <InlineCode>BooksAppBar</InlineCode>. To see a visual representation
        of what is happening, check out the image below:
        <PageImage image={wrapperImg} maxWidth={300} />
      </PageSection>
      <PageFooter
        back={{
          name: "Nested Routes",
          href: "/basics/nested_routes",
        }}
        next={{
          name: "Declarative Routing",
          href: "/advanced/declarative_routing",
        }}
      />
    </div>
  );
}
