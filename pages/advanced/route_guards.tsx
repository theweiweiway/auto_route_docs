import { Typography } from "@material-ui/core";
import React from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
import { MyLink } from "../../src/components/link";
import {
  PageFooter,
  PageHeader,
  PageSection,
} from "../../src/components/page_elements";

export default function RouteGuards() {
  return (
    <div>
      <PageHeader title="Route Guards" />
      <PageSection>
        Route guards are powerful tools to protect routes from being accessed.
        The most common use case is an authentication guard that prevents users
        from accessing certain routes unless they are logged in. Let's see how
        we can create an <InlineCode>AuthGuard</InlineCode> to protect our{" "}
        <InlineCode>AccountRouter</InlineCode> routes from being access by
        unauthenticated users. Furthermore, we'll use the declarative{" "}
        <b>login flow</b> that we created in{" "}
        <MyLink href="/advanced/declarative_routing">
          Declarative Routing
        </MyLink>{" "}
        to compliment our <InlineCode>AuthGuard</InlineCode>.
        <p />
        Start by creating the guard
        <CodeBlock
          codeString={`// mock auth state
bool isAuthenticated = false;
          
class AuthGuard extends AutoRouteGuard {

  @override
  Future<bool> canNavigate(List<PageRouteInfo> pendingRoutes, StackRouter router) async {
    if (!isAuthenticated) {
      router.root.push(LoginRouter(
          onLoginResult: (success) {
            // after successfully logging in, we can now authenticate the user and return to our regularly scheduled program
            if (success) {
              isAuthenticated = true;
              router.replaceAll(pendingRoutes); // push all pending routes after authenticating
            }  
          }));
      return false;
    }
    return true;
  }
}`}
        />
        <p />
        We just need to put this guard in the{" "}
        <InlineCode>AccountRouter</InlineCode> now. Here's what our final app
        router looks like.
        <CodeBlock
          codeString={`@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(
      path: "/login",
      page: LoginWrapperPage,
      children: [
        AutoRoute(page: EmailPage),
        AutoRoute(page: PasswordPage),
      ]
    ),
    AutoRoute(
      path: "/",    
      page: HomePage,
      usesTabsRouter: true,
      children: [    
        AutoRoute(
          path: "books",
          name: "BooksRouter",
          page: BooksWrapperPage,
          children: [
            AutoRoute(path: "", page: BooksPage),
            AutoRoute(path: "details", page: BookDetailsPage),
            RedirectRoute(path: "*", redirectTo: ""),
          ], 
        ),
        AutoRoute(
          path: "account",
          name: "AccountRouter",
          guards: [AuthGuard], // Adding AuthGuard here will 
          // guard all account routes, ensuring that the user
          // must be logged in to access them
          page: EmptyRouterPage,
          children: [
            AutoRoute(path: "", page: AccountPage),
            AutoRoute(path: "details", page: AccountDetailsPage),
            RedirectRoute(path: "*", redirectTo: ""),
          ],
        ),
      ],
    ),
  ],
)
class $AppRouter {}`}
        />
        <p />
        And there you go! We now have a full-fledged app with:
        <ul>
          <li>Paths and redirects</li>
          <li>Nested routes</li>
          <li>Wrapped routes</li>
          <li>Bottom navigation bar routing</li>
          <li>Protected routes via Route Guard</li>
          <li>Declarative Flow Routing for logging in</li>
        </ul>
        and more..
        <p />
        Thanks for checking out the AutoRoute tutorial!
      </PageSection>
      <PageFooter
        back={{
          name: "Bottom Navigation Bar Routing",
          href: "/advanced/bottom_navigation_bar_routing",
        }}
      />
    </div>
  );
}
