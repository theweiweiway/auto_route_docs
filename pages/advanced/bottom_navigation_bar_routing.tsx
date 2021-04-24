import React, { useEffect } from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
import { MyLink } from "../../src/components/link";
import {
  PageFooter,
  PageHeader,
  PageSection,
} from "../../src/components/page_elements";

export default function BottomNavigationBarRouting() {
  return (
    <div>
      <PageHeader title="Bottom Navigation Bar Routing" />
      <PageSection>
        Bottom Navigation Bars are widely used to handle seamless routing within
        a significant number of mobile apps. Luckily, AutoRoute comes with an{" "}
        <InlineCode>AutoTabsRouter</InlineCode> widget that makes this super
        easy, while implementing several features including:
        <ul>
          <li>Easy navigation between routers</li>
          <li>Preserved state for each router</li>
          <li>Lazily loaded routers by default</li>
          <li>
            Seamless integration with Flutter's{" "}
            <InlineCode>BottomNavigationBar</InlineCode>
            or your own custom <InlineCode>NavigationBar</InlineCode>
          </li>
          <li>Built-in and customizable animations between routers</li>
        </ul>
        To begin using <InlineCode>AutoTabsRouter</InlineCode>, we'll need to
        alter our router setup from the{" "}
        <MyLink href="/basics/nested_routes">Nested Routes</MyLink> example
        <CodeBlock
          codeString={`@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(
      path: "/",
      page: HomePage,
      usesTabsRouter: true, // this must be true!
      children: [    
        // our BooksRouter has been moved into the children field
        AutoRoute(
          path: "books",
          name: "BooksRouter",
          page: EmptyRouterPage,
          children: [
            AutoRoute(path: '', page: BooksPage),
            AutoRoute(path: 'details', page: BookDetailsPage),
            RedirectRoute(path: '*', redirectTo: ''),
          ], 
        ),
        // our AccountRouter has been moved into the children field
        AutoRoute(
          path: "account",
          name: "AccountRouter",
          page: EmptyRouterPage,
          children: [
            AutoRoute(path: '', page: AccountPage),
            AutoRoute(path: 'details', page: AccountDetailsPage),
            RedirectRoute(path: '*', redirectTo: ''),
          ],
        ),
      ],
    ),
  ],
)
class $AppRouter {}`}
        />
        <p />
        Now, we can use <InlineCode>AutoTabsRouter</InlineCode> in our app.
        Check out how much boilerplate code has been eliminated!
        <CodeBlock
          codeString={`@override
Widget build(BuildContext context) {
  return Scaffold(
    body: AutoTabsRouter(  
      routes: [BooksRouter(), AccountRouter()],
      duration: Duration(milliseconds: 400),
      builder: (context, child, animation) {
        final tabsRouter = context.tabsRouter;
        return Scaffold(
          appBar: AppBar(
            title: Text(tabsRouter.currentRoute.path),
          ),
          body: FadeTransition(child: child, opacity: animation),
          bottomNavigationBar: buildBottomNavigationBar(tabsRouter),
        );
      },
    ),
  );
}`}
        />
        <p />
        Finally, easily switch between tabs by calling
        <CodeBlock codeString={`tabsRouter.setActiveIndex(desiredIndex);`} />
      </PageSection>
      <PageSection title="Cross-tab Navigation">
        {" "}
        To navigate to a specific page in a different navigation tab, we need
        to:
        <ol>
          <li>set the correct tab index</li>
          <li>select the correct Router</li>
          <li>push the desired route</li>
        </ol>
        For example, if we are on in the <InlineCode>AccountRouter</InlineCode>{" "}
        and we want to navigate to <InlineCode>BookDetailsPage</InlineCode>{" "}
        inside of <InlineCode>BooksRouter</InlineCode>
        <CodeBlock
          codeString={`context.tabsRouter
  ..setActiveIndex(0) // update the active index to be the BooksRouter index
  ..innerRouterOf<StackRouter>(BooksRouter.name) // select the BooksRouter 
  .push(BookDetailsRoute()); // now we can push the BooksRouter route we want`}
        />
      </PageSection>
      <PageFooter
        back={{
          name: "Declarative Routing",
          href: "/advanced/declarative_routing",
        }}
        next={{
          name: "Route Guards",
          href: "/advanced/route_guards",
        }}
      />
    </div>
  );
}
