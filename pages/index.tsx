import React from "react";
import { CodeBlock } from "../src/components/code_block";
import {
  PageHeader,
  PageImage,
  PageSection,
} from "../src/components/page_elements";

export default function Home() {
  const logo = require("../src/assets/logo_complete.png");
  return (
    <div>
      <PageImage flat={true} maxWidth={500} image={logo} />
      <PageSection>
        A Flutter navigation package that allows for strongly-typed arguments
        passing, effortless deep-linking and code generation to simplify routes
        setup with minimal code.
      </PageSection>
      <PageSection title="Why AutoRoute?">
        If your App requires deep-linking or guarded routes or just a clean
        routing setup you'll need to use named/generated routes and you’ll end
        up writing a lot of boilerplate code for mediator argument classes,
        checking for required arguments, extracting arguments and a bunch of
        other stuff. AutoRoute does all that for you and much more.
      </PageSection>

      <PageSection title="Installation">
        <CodeBlock
          language="yaml"
          codeString={`dependencies:
  auto_route: [latest-version]

dev_dependencies:
  auto_route_generator: [latest-version]
  build_runner: [latest-version]]`}
        />
      </PageSection>
    </div>
  );
}
