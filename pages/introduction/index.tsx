import React from "react";
import { CodeBlock } from "../../src/components/code_block";
import { PageImage, PageSection } from "../../src/components/page_elements";

export default function Introduction() {
  const logo = require("../../src/assets/logo_complete.png");
  return (
    <div>
      <PageImage flat={true} maxWidth={500} image={logo} />

      <PageSection title="What is AutoRoute?">
        Auto Route is Flutter navigation package that allows for strongly-typed
        arguments passing, effortless deep-linking and code generation to
        simplify routes setup. It allows you to generate everything needed for
        navigation inside of your app with minimal code.
      </PageSection>

      <PageSection title="Why AutoRoute? ">
        If your App requires deep-linking or guarded routes or just a clean
        routing setup you'll need to use named/generated routes and you’ll end
        up writing a lot of boilerplate code for mediator argument classes,
        checking for required arguments, extracting arguments and a bunch of
        other stuff. See some of the many supported features in this package:
        <ul>
          <li>Named Routes</li>
          <li>Path Parameters and Wildcard Matching</li>
          <li>Nested Routes and Routers</li>
          <li>Customizable Route Transitions</li>
          <li>Deep Linking</li>
          <li>Route Guards</li>
          <li>Easy Bottom Navigation Bar Routing</li>
          <li>Declarative Routing</li>
          <li>Flow Routing</li>
        </ul>
        And much, much more...
      </PageSection>
    </div>
  );
}
