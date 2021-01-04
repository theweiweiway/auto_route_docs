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
        to separate your pages into separate routers that each handle their own domain.
        To illustrate this, we will split a large <InlineCode>AppRouter</InlineCode> into multiple
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
        We will split up all of the <InlineCode>Book</InlineCode> routes into it's own 
        <InlineCode>book_router.dart</InlineCode> and the <InlineCode>Account</InlineCode>
        routes into it's own <InlineCode>account_router.dart</InlineCode>
        <CodeBlock
          codeString={`const bookRouter = AutoRoute(
  path: '/book',
  name: 'BookStack',
  page: EmptyRouterPage,
  children: [
    // relative routes do not start with a forward slash '/'
    AutoRoute(path: '', page: BookPage), // available at /book
    AutoRoute(path: 'settings', page: BookSettingsPage) // available at /book/settings
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

       Our <InlineCode>AppRouter</InlineCode> now looks like this:
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
Use the standard routing methods to push new routes within a router. For example, 
       if we are currently in the <InlineCode>BookRoute</InlineCode> or any other route inside the{" "}
        <InlineCode>bookRouter</InlineCode>, we can easily navigate to{" "}
        <b>any book route</b> by simply calling
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
        <InlineCode>accountRouter</InlineCode> we need to:
        <ol>
          <li>get the router (<InlineCode>AccountStack</InlineCode> in this case)</li>
          <li>push the account routes that we we want by defining them in the <InlineCode>children</InlineCode> parameter</li> 
        </ol>
        <CodeBlock
          codeString={`router.root.push(AccountStack(
  children: [
    // push any sequence of Account routes here!
    // the last route will be the one that is currently visible
    AccountRoute(),
    AccountSettingsRoute()
  ]
));`}
        />
        <b>**Note**</b> that we gave our <InlineCode>accountRouter</InlineCode>{" "}
        a <InlineCode>name</InlineCode> parameter of{" "}
        <InlineCode>AccountStack</InlineCode> in the example above which allows
        this to works!
      </PageSection>
    </div>
  );
}
