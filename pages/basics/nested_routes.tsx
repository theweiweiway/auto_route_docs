import React from "react";
import { CodeBlock, InlineCode } from "../../src/components/code_block";
import { MyLink } from "../../src/components/link";
import {
  PageFooter,
  PageHeader,
  PageSection,
} from "../../src/components/page_elements";

export default function NestedRoutes() {
  return (
    <div>
      <PageHeader title="Nested Routes" />
      <PageSection>
        Nesting routes with AutoRoute is as easy as populating the{" "}
        <InlineCode>children</InlineCode> field of the parent{" "}
        <InlineCode>AutoRoute</InlineCode>. Building upon our previous example
        in the <MyLink href="/basics/root_router">Root Router</MyLink> section,
        we can update our router to use nested routes for the <b>Books</b> and{" "}
        <b>Account</b> routes
        <CodeBlock
          codeString={`@MaterialAutoRouter(
    replaceInRouteName: 'Page,Route',
    routes: <AutoRoute>[ 
        AutoRoute(path: "/", page: HomePage), 
        AutoRoute(
            path: "/books",
            name: "BooksRouter",
            page: EmptyRouterPage,
            children: [
                AutoRoute(path: '', page: BooksPage),
                AutoRoute(path: 'details', page: BookDetailsPage),
                RedirectRoute(path: '*', redirectTo: ''),
            ],
        ),
        AutoRoute(
            path: "/account",
            name: "AccountRouter",
            page: EmptyRouterPage,
            children: [
                AutoRoute(path: '', page: AccountPage),
                AutoRoute(path: 'details', page: AccountDetailsPage),
                RedirectRoute(path: '*', redirectTo: ''),
            ],
        ),
    ],
)
class $AppRouter {}
`}
        />
        Now you have separate routers for the <InlineCode>HomePage</InlineCode>,{" "}
        <InlineCode>Books</InlineCode> routes and{" "}
        <InlineCode>Account</InlineCode> routes. To navigate within a route, use
        the standard routing methods that we used in{" "}
        <MyLink href="/basics/root_router">Root Router</MyLink>
      </PageSection>

      <PageSection title="Navigating between routers">
        Routing controllers are context-scoped, so we must perform an additional
        step when navigating across routers. If we want to navigate from the{" "}
        <InlineCode>BooksRouter</InlineCode> to{" "}
        <InlineCode>AccountRouter</InlineCode>, we need to:
        <ol>
          <li>
            get the router (<InlineCode>AccountStack</InlineCode> in this case)
          </li>
          <li>
            push the account routes that we we want by defining them in the{" "}
            <InlineCode>children</InlineCode> parameter
          </li>
        </ol>
        <CodeBlock
          codeString={`router.root.push(AccountStack(
  children: [
    // push any sequence of Account routes here   
    // the last route will be the one that is currently visible
    AccountRoute(),
    AccountSettingsRoute()
  ]
));`}
        />
        <b>Note</b> that we gave our <InlineCode>AccountRouter</InlineCode> a{" "}
        <InlineCode>name</InlineCode> parameter of{" "}
        <InlineCode>AccountStack</InlineCode> which allows this to work!
      </PageSection>
      <PageFooter
        back={{ name: "Passing Arguments", href: "/basics/passing_arguments" }}
        next={{ name: "Wrapping Routes", href: "/basics/wrapping_routes" }}
      />
    </div>
  );
}
