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
        Sometimes, you may want to wrap specific routers with a state management
        tool or other widgets. Drawing from the example before in{" "}
        <b>Independent Routers</b>, we may want to wrap the{" "}
        <InlineCode>bookRouter</InlineCode> with a{" "}
        <InlineCode>SafeArea</InlineCode>, <InlineCode>Scaffold</InlineCode> and{" "}
        <InlineCode>BookBloc</InlineCode>. This would make sure that every
        single route inside of
        <InlineCode>bookRouter</InlineCode> has access to the{" "}
        <InlineCode>BookBloc</InlineCode>, as well as have a{" "}
        <InlineCode>Scaffold</InlineCode> and <InlineCode>SafeArea</InlineCode>{" "}
        to work with.
      </PageSection>
      <PageSection title="Setup">
        To acheive this, first define a <InlineCode>BookWrapperPage</InlineCode>
        with <InlineCode>AutoRouteWrapper</InlineCode>. Now override the
        <InlineCode>wrappedRoute</InlineCode> widget with whatever you want to
        wrap the router in, making sure to return <InlineCode>this</InlineCode>{" "}
        as the child.
        <CodeBlock
          codeString={`class BookWrapperPage extends AutoRouter with AutoRouteWrapper {
  const BookWrapperPage({Key key}) : super(key: key);

  @override
  Widget wrappedRoute(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider(
          create: (context) => BookBloc(),
        ),
      ],
      child: Scaffold(
        child: SafeArea(
          child: this,
        )
      ),
    );
  }
}`}
        />
        Now, set the <InlineCode>page</InlineCode> argument of your{" "}
        <InlineCode>bookRouter</InlineCode> to the new{" "}
        <InlineCode>BookWrapperPage</InlineCode> we just created.
        <CodeBlock
          codeString={`const bookRouter = AutoRoute(
  path: '/book',
  name: 'BookStack',
  page: BookWrapperPage, // we replaced EmptyRouterPage
  children: [
    AutoRoute(path: '', page: BookPage),
    AutoRoute(path: 'settings', page: BookSettingsPage)
    // ...and more Book pages
  ],
);
`}
        />
        Now, your <InlineCode>bookRouter</InlineCode> is wrapped with a{" "}
        <InlineCode>SafeArea</InlineCode>, <InlineCode>Scaffold</InlineCode> and{" "}
        <InlineCode>BookBloc</InlineCode>!
      </PageSection>
      <PageSection title="The secret ingredient">
        You may have noticed that in the example above that
        <InlineCode>
          <b>BookWrapperPage</b> extends <b>AutoRouter</b>
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
  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider(
          create: (context) => BookBloc(),
        ),
      ],
      child: Scaffold(
        child: SafeArea(
          // Notice how we return the AutoRouter() widget 
          // instead of extending AutoRouter!
          child: AutoRouter(),
        )
      ),
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
          name: "Bottom Navigation Bar Routing",
          href: "/advanced/bottom_navigation_bar_routing",
        }}
      />
    </div>
  );
}
