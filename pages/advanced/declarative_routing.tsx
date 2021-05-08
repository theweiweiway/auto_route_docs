import { Typography } from "@material-ui/core";
import React from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
import { MyLink } from "../../src/components/link";
import {
  PageFooter,
  PageHeader,
  PageSection,
} from "../../src/components/page_elements";

export default function BasicUsage() {
  return (
    <div>
      <PageHeader title="Declarative Routing" />
      <PageSection>
        One of the most powerful things we can do with{" "}
        <MyLink href="/basics/wrapping_routes">route wrappers</MyLink> is to
        declaratively render our routes. For example, we could link a set of
        routes to <b>state</b> so that pages are automatically pushed and popped
        in response to the state - elminating the need to call{" "}
        <InlineCode>router.push</InlineCode> or{" "}
        <InlineCode>router.pop</InlineCode> altogether! This kind of routing is
        especially useful for <b>flows</b> (such as a Profile Information flow,
        or Sign Up flow), and hence may also be called <b>Flow Routing</b>.
        <p />
        In this section, we'll build upon our app with a simple{" "}
        <b>Login Flow</b> that uses declarative routing. In this flow, we have 2
        pages: an <b>email</b> page and a <b>password</b> page. First, begin by
        adding our <b>login</b> routes to our app router.
        <CodeBlock
          codeString={`@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    // our new login routes are defined here!
    AutoRoute(
      path: "/login",
      page: LoginWrapperPage, // we'll get to this LoginWrapperPage next
      children: [
        AutoRoute(page: EmailPage),
        AutoRoute(page: PasswordPage),
      ]
    ),
    ... // our other routes
  ],
)
class $AppRouter {}`}
        />
        <p />
        And here is our <InlineCode>LoginWrapperPage</InlineCode>
        <CodeBlock
          codeString={`class LoginWrapperPage extends StatefulWidget {
    final Function(bool isLoggedIn) onLogin;                        

    const LoginWrapperPage({Key key, this.onLogin}) : super(key: key);
}

class _LoginWrapperPageState extends State<LoginWrapperPagePage> { 
    String email = "";

    @override
    Widget build(context) => AutoRouter.declarative( // use AutoRouter.declarative  
      routes: (_, __) { 
        // Declaratively define your routes here
        return [
          EmailRoute(onNext: (result) {
            setState(() {
                email: result;
            });
          }),
          if (email.isNotEmpty) PasswordRoute(onNext: (result) async {
            try {
              // validate the email and password
              await validateEmailAndPassword(email, result)
              widget.onLogin(true);
            } catch (e) {
              // do something with the error
            }
          }),
        ];
      },
    ); 
}`}
        />
        There are several interesting things to point out here! First of all, we
        are returning 2 routes: our <InlineCode>EmailRoute</InlineCode> and
        <InlineCode>PasswordRoute</InlineCode>. And our{" "}
        <InlineCode>PasswordRoute</InlineCode> only gets pushed when our{" "}
        <InlineCode>email</InlineCode> variable is <b>not</b> empty.
        <p />
        Next, there is an <InlineCode>onNext</InlineCode> callback in the
        <InlineCode>EmailRoute</InlineCode> which is fired when the user enters
        their email and taps "next". This causes the{" "}
        <InlineCode>email</InlineCode> variable to be assigned to the input
        email that was just entered by the user.
        <p />
        When that happens, the email variable is no longer empty, which causes
        the <InlineCode>PasswordRoute</InlineCode> to get pushed. Note how we
        didn't need to use <InlineCode>router.push</InlineCode> at all!
        <p />
        Finally, when the user enters their password and taps "next", this fires
        the <InlineCode>onNext</InlineCode> callback of the{" "}
        <InlineCode>PasswordRoute</InlineCode>. Here, we validate the email and
        password input. If successful, we trigger the{" "}
        <InlineCode>onLogin</InlineCode> callback defined in the{" "}
        <InlineCode>
          <b>LoginWrapperPage</b>
        </InlineCode>
        . This is important, because the <InlineCode>onLogin</InlineCode>{" "}
        callback allows us to use the{" "}
        <InlineCode>
          <b>LoginWrapperPage</b>
        </InlineCode>{" "}
        result in other areas of our code!
        <p />
        Now, this is just a simple example of declarative routing, but you can
        get creative and use it however you want. Link your routes to a state
        management solution, or use a step count instead of checking if strings
        are empty - the possibilities are endless!
      </PageSection>
      <PageSection title="Usage">
        To use our new <b>login flow</b>, just simply push the{" "}
        <InlineCode>
          <b>LoginWrapperPage</b>
        </InlineCode>{" "}
        wherever you need it. This will open up the login flow, and once the
        flow is completed it will trigger <InlineCode>onLogin</InlineCode> which
        we can then use to log the user in
        <CodeBlock
          codeString={`context.router.root.push(LoginWrapperPage(onLogin: (result) {
  // do something with the login result here, such as logging the user in
}));`}
        />
        <b>Note</b> that we are using{" "}
        <InlineCode>
          context.router.<b>root</b>
        </InlineCode>
        . This is because our login flow was defined at the top level of the
        router, and not nested. It is generally good practice to put declarative
        flows at the root level.
      </PageSection>
      <PageFooter
        back={{
          name: "Wrapping Routes",
          href: "/basics/wrapping_routes",
        }}
        next={{
          name: "Bottom Navigation Bar Routing",
          href: "/advanced/bottom_navigation_bar_routing",
        }}
      />
    </div>
  );
}
