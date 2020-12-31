import Head from "next/head";
import { CodeBlock, InlineCode } from "../../src/components/code_block";
import { PageHeader, PageSection } from "../../src/components/page_elements";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <PageHeader title="Parallel Routers" />
      <PageSection>
        Parallel navigation with a bottom navigation bar consisting of multiple
        routers is a common navigation pattern used in many mobile apps. Auto
        Route allows you to easily acheive this with minimal boilerplate and
        code, and also provides the following benefits:
        <ul>
          <li>Easy navigation between routers/stacks</li>
          <li>Preserved navigation and app state between each router/stack</li>
          <li>Lazily loaded routers/stacks by default</li>
          <li>
            Seamless integration with Flutter's{" "}
            <InlineCode>BottomNavigationBar</InlineCode>
            or your own custom <InlineCode>NavigationBar</InlineCode>
          </li>
          <li>Built-in and customizable animations between routers/stacks</li>
        </ul>
      </PageSection>
      <PageSection title="Setup">
        In order to acheive this, first set up your <b>main router</b> like so:
        <CodeBlock
          codeString={`@AdaptiveAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(
      path: '/',
      page: HomePage,
      usesTabsRouter: true, // Be sure to include this!
      children: [
        // Your separate navigation routers go here
        productsRouter,
        accountRouter,
      ],
    ),
  ],
)
class $AppRouter {}
`}
        />
        For reference, <InlineCode>products_router.dart</InlineCode> and{" "}
        <InlineCode>account_router.dart</InlineCode> look like this:
        <CodeBlock
          codeString={`const productsRouter = AutoRoute(
  path: 'products',
  name: 'ProductsStack',
  page: EmptyRouterPage,
  children: [
    AutoRoute(path: '', page: ProductsPage),
    AutoRoute(path: ':id', page: ProductDetailsPage)
  ],
);`}
        />
        <CodeBlock
          codeString={`const accountRouter = AutoRoute(
  path: 'account',
  name: 'AccountStack',
  page: EmptyRouterPage,
  children: [
    AutoRoute(path: '', page: AccountPage),
    AutoRoute(path: 'details', page: AccountDetailsPage)
  ],
);
`}
        />
        In <InlineCode>home_page.dart</InlineCode>, use{" "}
        <InlineCode>AutoTabsRouter</InlineCode> like so:
        <CodeBlock
          codeString={`
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: AutoTabsRouter(
      // Declare your separate routers here
      routes: [ProductsStack(), AccountStack()], 
      duration: Duration(milliseconds: 400),
      builder: (context, child, animation) {
        final tabsRouter = context.tabsRouter;
        return Scaffold(
          appBar: AppBar(
            title: Text(tabsRouter.currentRoute.path),
          ),
          body: FadeTransition(child: child, opacity: animation),
          bottomNavigationBar: BottomNavigationBar(
            // easily get the active index
            currentIndex: tabsRouter.activeIndex,
            onTap: (index) {
              // easily change the active index  
              tabsRouter.setActiveIndex(index); 
            },
            items: [
              BottomNavigationBarItem(
                icon: Icon(Icons.source),
                label: 'Products',
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.person),
                label: 'Account',
              ),
            ],
          );
        );
      },
    ));
  }`}
        />
      </PageSection>
    </div>
  );
}
