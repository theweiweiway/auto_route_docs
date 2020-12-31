import Head from "next/head";
import { CodeBlock, InlineCode } from "../../src/components/code_block";
import { PageHeader, PageSection } from "../../src/components/page_elements";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <PageHeader title="Cross-Router Navigation" />
      <PageSection>
        Navigating across routers/stacks is simple! All you have to do is use
        <InlineCode>context.tabsRouter</InlineCode> like so:
        <CodeBlock
          codeString={`// Navigate to Products/69

context.tabsRouter
  ..setActiveIndex(0) // change the current router/stack
  ..innerRouterOf<StackRouter>(ProductsStack.name) // select the router/stack you want
  .push(ProductDetailsRoute(id: 69)); // push the route you want`}
        />
      </PageSection>
    </div>
  );
}
