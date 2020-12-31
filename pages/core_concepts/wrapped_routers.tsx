import { Typography } from "@material-ui/core";
import React from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
import { PageHeader, PageSection } from "../../src/components/page_elements";

export default function BasicUsage() {
  return (
    <div>
      <PageHeader title="Wrapped Routers" />
      <PageSection>
        Sometimes, you may want to wrap specific routers with a state management
        tool or other widgets. Drawing from the example before in{" "}
        <b>Independent Routers</b>, we may want to wrap the{" "}
        <InlineCode>bookRouter</InlineCode> with a{" "}
        <InlineCode>SafeArea</InlineCode>, <InlineCode>Scaffold</InlineCode> and{" "}
        <InlineCode>Bloc</InlineCode>.
      </PageSection>
      <PageSection title="Setup">
        First, define a <InlineCode>BookWrapperPage</InlineCode> widget:
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
    </div>
  );
}
