import { Typography } from "@material-ui/core";
import React from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
import { PageHeader, PageSection } from "../../src/components/page_elements";

export default function BasicUsage() {
  return (
    <div>
      <PageHeader title="Basic Usage" />
      <PageSection title="Setup and Usage">
        Create a placeholder class and annotate it with{" "}
        <InlineCode>@MaterialAutoRouter</InlineCode>,{" "}
        <InlineCode>@CupertinoAutoRouter</InlineCode>,{" "}
        <InlineCode>@AdaptiveAutoRouter</InlineCode> or
        <InlineCode>@CustomAutoRouter</InlineCode> which takes a list of routes
        as a required argument. <b>Note:</b> The name of the router must be
        prefixed with <b>$</b> so we will have a generated class with the same
        name minus the <b>$</b>.
        <CodeBlock
          codeString={`@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(page: BookListPage, initial: true),
    AutoRoute(page: BookDetailsPage),
  ],
)
class $AppRouter {}`}
        />
        <p />
        Tip: You can Shorten auto-generated route names from e.g.
        BookListPageRoute to BookListRoute using the replaceInRouteName
        argument.
        <p />
        <Typography variant="h4">Now simply run the generator</Typography>
        <p />
        Use the [watch] flag to watch the files' system for edits and rebuild as
        necessary.
        <CodeBlock
          codeString={`flutter packages pub run build_runner watch --delete-conflicting-outputs`}
        />
        if you want the generator to run one time and exits use
        <CodeBlock
          codeString={`flutter packages pub run build_runner build --delete-conflicting-outputs`}
        />
        <Typography variant="h4">Finalize the setup</Typography>
        <p />
        after you run the generator your router class will be generated, hook it
        up with MaterialApp.
        <CodeBlock
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
    </div>
  );
}
