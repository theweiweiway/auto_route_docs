import React from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
import { MyLink } from "../../src/components/link";
import {
  PageFooter,
  PageHeader,
  PageSection,
} from "../../src/components/page_elements";

export default function Authentication() {
  return (
    <div>
      <PageHeader title="Authentication" />
      <PageSection>
        Authentication is a staple of many apps, requiring users create an
        account and sign in before accessing specific pages. It may be first
        instinct to use a <InlineCode>Guard</InlineCode> to handle
        authentication and protected routes, but <b>AutoRoute</b> makes this
        even easier to accomplish - all without route guards and minimal code.
        <p />
        In this example, we'll combine the <b>Login flow</b> that we created in{" "}
        <MyLink href="/advanced/declarative_routing">
          Declarative Routing
        </MyLink>{" "}
        with the router setup we have in{" "}
        <MyLink href="/route_guards">Route Guards</MyLink> to create an app with
        basic authentication.
        <CodeBlock
          codeString={`class App extends StatelessWidget {
    final _appRouter = AppRouter();

    @override
    Widget build(BuildContext context) {
        return MaterialApp.router(
            routerDelegate: AutoRouterDelegate.declarative(   
                _appRouter,
                routes: (_) => [
                  // if the user is logged in, they may proceed to the main App
                  if (authService().isLoggedIn)
                    AppRouter()
                  // if they are not logged in, bring them to the Login page 
                  else
                    LoginRouter(onLogin: () => authService().logIn),
                ],
            ),
            routeInformationParser:
                _appRouter.defaultRouteParser(includePrefixMatches: true));
    }
}`}
        />
        <p />
        Now, users will not be allowed to access the main app until they are
        logged in. And if they are not logged in, they are automatically brought
        to the login flow. No need for any route guards, no need to duplicate
        any login code - just a very simple state-based routing system!
        <p />
        And there you go - we now have a full-fledged app with:
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
          name: "Route Guards",
          href: "/advanced/route_guards",
        }}
      />
    </div>
  );
}
