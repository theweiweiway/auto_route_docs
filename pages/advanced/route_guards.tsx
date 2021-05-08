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
        Route guards are powerful tools that can protect pages, or perform
        certain actions before entering a page. In this example, we'll use a
        guard to check if a book exists before pushing the{" "}
        <InlineCode>BookDetailsPage</InlineCode>. If the bookId is found, we
        push the page. If not, we'll push a <InlineCode>Not Found</InlineCode>{" "}
        page. Get started by first creating the guard:
        <CodeBlock
          codeString={`class CheckIfBookExists extends AutoRouteGuard {
  @override
  void onNavigation(NavigationResolver resolver, StackRouter router) async {
    final bookId = resolver.route.pathParams.get("bookId");
    final book = checkIfBookExists(bookId);
    if (book != null)
      resolver.next(true); // book was found. proceed to the page
    else
    router.push(NotFoundRoute());
  }
}`}
        />
        <p />
        Now, protect the
        <InlineCode>BookDetailsPage</InlineCode> with the guard. Here's what our
        final app router looks like.
        <CodeBlock
          codeString={`@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(
      path: "/login",
      name: "LoginRouter",
      page: LoginWrapperPage,
      children: [
        AutoRoute(page: EmailPage),
        AutoRoute(page: PasswordPage),
      ]
    ),
    AutoRoute(
      path: "/",    
      name: "AppRouter",
      page: HomePage,
      usesTabsRouter: true,
      children: [    
        AutoRoute(
          path: "books",
          name: "BooksRouter",
          page: BooksWrapperPage,
          children: [
            AutoRoute(path: "", page: BooksPage),
            // add the guard here to check if the bookId exists first before pushing the page
            AutoRoute(path: ":bookId", guards: [CheckIfBookExists], page: BookDetailsPage),
            RedirectRoute(path: "*", redirectTo: ""),
          ], 
        ),
        AutoRoute(
          path: "account",
          name: "AccountRouter",
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
        Finally, add the guard into your main router declaration and you are
        done!
        <CodeBlock
          codeString={`class App extends StatelessWidget {
  final _appRouter = AppRouter(checkIfBookExists: CheckIfBookExists());

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routeInformationParser: _appRouter.defaultRouteParser(),
      routerDelegate: _appRouter.delegate(),
    );
  }
}`}
        />
        <p />
      </PageSection>
      <PageFooter
        back={{
          name: "Bottom Navigation Bar Routing",
          href: "/advanced/bottom_navigation_bar_routing",
        }}
        next={{
          name: "Authentication",
          href: "/advanced/authentication",
        }}
      />
    </div>
  );
}
