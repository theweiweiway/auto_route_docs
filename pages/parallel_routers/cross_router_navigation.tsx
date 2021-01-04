import Head from "next/head";
import { CodeBlock, InlineCode } from "../../src/components/code_block";
import { PageHeader, PageSection } from "../../src/components/page_elements";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <PageHeader title="Cross-Router Navigation" />
      <PageSection>
        Navigating within a router is the same as before:
        <CodeBlock
          codeString={`// get the scoped router by calling
AutoRouter.of(context).push(ProductsRoute())
// or using the extension
context.router.push(ProductsRoute())`}
        /> 

        However, if you want to navigate across routers/stacks you need to:
        <ol>
          <li>set the active index to match the new router/stack's index</li>
          <li>select the router/stack</li>
          <li>push the desired route</li>
        </ol>
        <CodeBlock
          codeString={`// Navigate to products/69

context.tabsRouter
  ..setActiveIndex(0) // change the current router/stack
  ..innerRouterOf<StackRouter>(ProductsStack.name) // select the router/stack you want
  .push(ProductDetailsRoute(id: 69)); // push the route you want`}
        />
      </PageSection>
    </div>
  );
}
