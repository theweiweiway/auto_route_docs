import { Typography } from "@material-ui/core";
import React from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
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
        <CodeBlock
          codeString={`// mock auth state
bool isAuthenticated = false;
          
class AuthGuard extends AutoRouteGuard {

  @override
  Future<bool> canNavigate(List<PageRouteInfo> pendingRoutes, StackRouter router) async {
    if (!isAuthenticated) {
      router.root.push(LoginRouter(
          onLoginResult: (success) {
            if (success) {
              isAuthenticated = true;
              router.replaceAll(pendingRoutes);
            }  
          }));
      return false;
    }
    return true;
  }
}`}
        />

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
      </PageSection>
    </div>
  );
}
