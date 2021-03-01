import { Typography } from "@material-ui/core";
import React from "react";
import { CodeBlock, InlineCode } from "../../src/components/code_block";
import {
  PageFooter,
  PageHeader,
  PageSection,
} from "../../src/components/page_elements";

export default function InstallationAndUsage() {
  return (
    <div>
      <PageHeader title="Installation and Usage" />
      <PageSection title="Edit your pubspec.yaml">
        <CodeBlock
          language="yaml"
          codeString={`dependencies:
  auto_route: [latest-version]

dev_dependencies:
  auto_route_generator: [latest-version]
  build_runner: [latest-version]`}
        />
      </PageSection>

      <PageSection title="Update your packages">
        <InlineCode>flutter pub get</InlineCode>
      </PageSection>

      <PageSection title="Create your router">
        <CodeBlock
          language="yaml"
          codeString={`@MaterialAutoRouter(
    replaceInRouteName: 'Page,Route',
    routes: <AutoRoute>[
      AutoRoute(page: HomePage, initial: true),
      AutoRoute(page: BooksPage),
      AutoRoute(page: BookDetailsPage),
    ],
)
class $AppRouter {}`}
        />
      </PageSection>

      <PageSection title="Now run the generator">
        <InlineCode>flutter packages pub run build_runner watch</InlineCode>
        <Typography>
          We use the <b>watch</b> flag to watch for file changes which will
          rebuild the generated files when necessary. If you would like to only
          generate files once and exit after use:
        </Typography>
        <InlineCode>flutter packages pub run build_runner build</InlineCode>
      </PageSection>
      <p />
      <PageSection title="Finally, link the router to your app">
        <CodeBlock
          language="yaml"
          codeString={`final _appRouter = AppRouter()
...
Widget build(BuildContext context){
    return MaterialApp.router(
        routerDelegate: _appRouter.delegate(...initialConfig),
        routeInformationParser: _appRouter.defaultRouteParser(),
    ),
}`}
        />
      </PageSection>
      <PageFooter
        back={{ name: "What is AutoRoute?", href: "/introduction" }}
        next={{
          name: "Generated Routes",
          href: "/introduction/generated_routes",
        }}
      />
    </div>
  );
}
