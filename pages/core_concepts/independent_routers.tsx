import { Typography } from "@material-ui/core";
import React from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
import { PageHeader, PageSection } from "../../src/components/page_elements";

export default function BasicUsage() {
  return (
    <div>
      <PageHeader title="Independent Routers" />
      <PageSection>
        In larger projects where there are a large number of pages, you may want
        to separate your pages into separate routers. In the following example,
        we will split a large <InlineCode>AppRouter</InlineCode> into multiple
        smaller routers in the following example.
        <p />
        Initial monolithic router file:
        <CodeBlock
          codeString={`@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(page: HomePage, initial: true),
    
    AutoRoute(page: BookListPage, initial: true),
    AutoRoute(page: BookDetailsPage),
    // ...and more Book pages

    AutoRoute(page: AccountPage),
    AutoRoute(page: AccountSettingsPage),
    // ...and more Account pages
  ],
)
class $AppRouter {}`}
        />
        We can now create <InlineCode>book_router.dart</InlineCode> and{" "}
        <InlineCode>account_router.dart</InlineCode> which look like this:
        <CodeBlock
          codeString={`const bookRouter = AutoRoute(
  path: '/book',
  name: 'BookStack',
  page: EmptyRouterPage,
  children: [
    // relative routes do not start with a forward slash '/'
    AutoRoute(path: '', page: BookPage),
    AutoRoute(path: 'settings', page: BookSettingsPage)
    // ...and more Book pages
  ],
);

const accountRouter = AutoRoute(
  path: '/account',
  name: 'AccountStack',
  page: EmptyRouterPage,
  children: [
    // relative routes do not start with a forward slash '/'
    AutoRoute(path: '', page: AccountPage),
    AutoRoute(path: 'settings', page: AccountSettingsPage)
    // ...and more Account pages
  ],
);`}
        />
        And now our <InlineCode>AppRouter</InlineCode> looks like this:
        <CodeBlock
          codeString={`@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(page: HomePage, initial: true),
    bookRouter,
    accountRouter
  ],
)
class $AppRouter {}`}
        />
      </PageSection>
      <PageSection title="Navigation within a Router">
        If we are in <InlineCode>BookPage</InlineCode> or any page inside the{" "}
        <InlineCode>bookRouter</InlineCode>, we can easily navigate to{" "}
        <b>other book pages</b> by simply calling
        <CodeBlock
          codeString={`// get the scoped router by calling
AutoRouter.of(context).push(BookSettingsRoute())
// or using the extension
context.router.push(BookSettingsRoute())`}
        />
      </PageSection>
      <PageSection title="Navigation across Routers">
        Routing controllers are context-scoped, so we must perform an additional
        step when navigating across routers. If we want to navigate from the{" "}
        <InlineCode>bookRouter</InlineCode> to{" "}
        <InlineCode>accountRouter</InlineCode>, we need to first find the
        correct router/controller and then push the Router like so:
        <CodeBlock
          codeString={`router.root.push(AccountStack(children: [
  // push any sequence of Account routes here!
  // only the last route will be the currently visible route on the screen
  AccountRoute(),
  AccountSettingsRoute()
])`}
        />
        <b>**Note**</b> that we gave our <InlineCode>accountRouter</InlineCode>{" "}
        a <InlineCode>name</InlineCode> parameter of{" "}
        <InlineCode>AccountStack</InlineCode> in the example above which allows
        this to works!
      </PageSection>
    </div>
  );
}
