import React from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
import {
  PageFooter,
  PageHeader,
  PageSection,
} from "../../src/components/page_elements";

export default function WrappingRoutes() {
  return (
    <div>
      <PageHeader title="Wrapped Routers" />
      <PageSection>
        In the last page, we created a<InlineCode>BooksRouter</InlineCode> and
        <InlineCode>AccountRouter</InlineCode> to handle their respective routes
        via nested routes. We can take this example one step further with the
        <InlineCode>
          <b>AutoRouteWrapper</b>
        </InlineCode>{" "}
        widget. <p /> In many cases, we'll want to wrap a set of routes with
        other widgets. For example, we may want to wrap our{" "}
        <InlineCode>BooksRouter</InlineCode> with a state management solution.
        By doing so, we can scope our state to <b>only</b> books routes instead
        of lifting state up above our main <InlineCode>AppRouter</InlineCode>.{" "}
        <p /> In this example, we'll wrap our{" "}
        <InlineCode>BooksRouter</InlineCode> with a <b>cubit</b> and scope it to
        just books routes. Let's start by creating a{" "}
        <InlineCode>BooksWrapperPage</InlineCode> class.
        <CodeBlock
          codeString={`class BookWrapperPage extends AutoRouter with AutoRouteWrapper {
  const BookWrapperPage({Key key}) : super(key: key);

  @override
  Widget wrappedRoute(BuildContext context) {
    return BlocProvider(
      create: (context) => BooksCubit(),
      child: this, // make sure to return "this" so that child routes will be wrapped properly!
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
    page: BooksWrapperPage, // This use to be EmptyRouterPage
    // EmptyRouterPage is an AutoRoute widget that is used when
    // you don't want to wrap child routes with anything
    children: [
        AutoRoute(path: '', page: BooksPage),
        AutoRoute(path: 'details', page: BookDetailsPage),
        RedirectRoute(path: '*', redirectTo: ''),
    ],
),
...`}
        />
      </PageSection>
      <PageSection title="The secret ingredient">
        You may have noticed in the example above that
        <InlineCode>
          <b>BooksWrapperPage</b> extends <b>AutoRouter</b>
        </InlineCode>
        . The{" "}
        <InlineCode>
          {" "}
          <b>AutoRouter</b>
        </InlineCode>{" "}
        widget is the key that allows the router to work! In fact, we could
        choose not to extend <InlineCode>AutoRouter</InlineCode> and instead
        return
        <InlineCode>AutoRouter()</InlineCode> as shown in the example below and
        everything would function perfectly!
        <CodeBlock
          codeString={`class BookWrapperPage extends StatelessWidget {
  const BookWrapperPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => BooksCubit(),
      child: AutoRouter(), // We can return AutoRouter() instead of this 
     // because we are no longer extending the AutoRouter widget
    );
  }
}`}
        ></CodeBlock>
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
