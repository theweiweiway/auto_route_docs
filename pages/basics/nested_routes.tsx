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
      </PageSection>
      <PageFooter
        back={{ name: "Passing Arguments", href: "/basics/passing_arguments" }}
        next={{ name: "Wrapping Routes", href: "/basics/wrapping_routes" }}
      />
    </div>
  );
}
