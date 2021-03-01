import React from "react";
import { CodeBlock, InlineCode } from "../../src/components/code_block";
import {
  PageFooter,
  PageHeader,
  PageSection,
} from "../../src/components/page_elements";

export default function RootRouter() {
  return (
    <div>
      <PageHeader title="Root Router" />
      <PageSection>
        The root router is the top-level router of your app that serves as the
        navigation entry point of your app. Use an{" "}
        <InlineCode>@AdaptiveAutoRouter</InlineCode>,{" "}
        <InlineCode>@MaterialAutoRouter</InlineCode> or{" "}
        <InlineCode>@CupertinoAutoRouter</InlineCode> to define your router.
        Then, declare your routes with the <InlineCode>AutoRoute</InlineCode>{" "}
        widget like so!
        <CodeBlock
          codeString={`@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(page: HomePage, initial: true),
    AutoRoute(page: BooksPage),
    AutoRoute(page: BookDetailsPage),
    AutoRoute(page: AccountPage), 
    AutoRoute(page: AccountDetailsPage), 
  ],
)
class $AppRouter {}`}
        />
      </PageSection>
      <PageSection title="Where are the paths?">
        You might have noticed that no paths were defined in the example above.
        This is because paths are completely optional in AutoRoute because{" "}
        <InlineCode>PageRouteInfo</InlineCode> objects are matched by{" "}
        <b>name</b> unless pushed as a string.
        <p />
        We can navigate to the desired page by simply calling:
        <CodeBlock codeString={`router.push(BooksRoute())`} />
        to get the the <InlineCode>BooksPage</InlineCode> or
        <CodeBlock codeString={`router.push(BookDetailsRoute())`} />
        to get the the <InlineCode>BookDetailsPage</InlineCode>
        <p />
        This is only possible because of the
        <InlineCode>replaceInRouteName: 'Page,Route'</InlineCode> field in our
        router example above. This field basically tells Auto Route to replace{" "}
        <InlineCode>Page</InlineCode> with <InlineCode>Route</InlineCode> for
        each Auto Route page. Thus, our <InlineCode>BooksPage</InlineCode> turns
        into a<InlineCode>BooksRoute</InlineCode> route that we can navigate to.
        <p />
        When no paths are specified like this example, paths will be generated
        from the page name. For example, <InlineCode>BooksPage</InlineCode> will
        have the path
        <b>"book-list-page"</b>. However, if the initial field is set to true,
        eg. initial: true then it's path will be <b>"/"</b> unless it's
        relative. In the case that it's a relative path, then it would be an
        empty string.
        <p />
        There are, however, cases where you would want to use paths. Continue to
        the next section to learn how!
      </PageSection>
      <PageFooter
        back={{
          name: "Generated Routes",
          href: "/introduction/generated_routes",
        }}
        next={{
          name: "Working with Paths",
          href: "/basics/working_with_paths",
        }}
      />
    </div>
  );
}
