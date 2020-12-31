import { Typography } from "@material-ui/core";
import React from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
import { PageHeader, PageSection } from "../../src/components/page_elements";

export default function BasicUsage() {
  return (
    <div>
      <PageHeader title="Declarative Routing" />
      <PageSection>
        Since the new Auto Route 1.x uses Navigator 2.0, we can now implement
        Declarative Routing! This allows us to change the current route based on{" "}
        state or other variables instead of manually pushes routes!
      </PageSection>
      <PageSection title="Setup">
        Begin by setting up a wrapper class similar to what we did in{" "}
        <b>Wrapped Routers</b>, but make sure to extend{" "}
        <InlineCode>StatefulWidget</InlineCode> instead of{" "}
        <InlineCode>AutoRouter</InlineCode>. Also, implementing{" "}
        <InlineCode>AutoRouteWrapper</InlineCode> is optional if we don't need
        to wrap anything like the example below.
        <CodeBlock
          codeString={`class ProfileDataWrapperPage extends StatefulWidget {
    final Function(ProfileData data) onResult;

    const ProfileDataWrapperPage({Key key, this.onResult}) : super(key: key);
}

class _ProfileDataWrapperPageState extends State<UserDataCollectorPage> {
    String firstName = ""; 
    String lastName = "";
    String age = ""; 

    @override
    Widget build(context) => AutoRouter.declarative(onGenerateRoutes: (_, __) { 
          return [
            // Declaratively define your routes here
            if (firstName.isEmpty) ProfileDataAgeRoute(onNext: (str) {
                setState(() {
                    age = str;
                });
                widget.onResult(ProfileData(
                    firstName: firstName,
                    lastName: lastName,
                    age: age
                ));
            }),
            if (lastName.isEmpty) ProfileDataLastNameRoute(onNext: (str) {
                setState(() {
                    lastName = str;
                });
            }),
            if (firstName.isEmpty) ProfileDataFirstNameRoute(onNext: (str) {
                setState(() {
                    firstName = str;
                });
            }),
          ];
    }); 
}

class ProfileData {
    String firstName; 
    String lastName;
    String age; 

    const ProfileData({this.firstName, this.lastName, this.age});
}
`}
        />
        And now, attach the <InlineCode>ProfileDataWrapperPage</InlineCode> to
        the <InlineCode>profileDataRouter</InlineCode> like so:
        <CodeBlock
          codeString={`const profileDataRouter = AutoRoute(
  path: '/profile_data',
  name: 'ProfileDataStack',
  page: ProfileDataWrapperPage, 
  children: [
    AutoRoute(page: ProfileDataFirstNameRoute),
    AutoRoute(page: ProfileDataLastNameRoute),
    AutoRoute(page: ProfileDataAgeRoute),
  ],
);`}
        />
      </PageSection>
      <PageSection title="Usage">
        Now, simply push the <InlineCode>ProfileDataStack</InlineCode> wherever
        you need it:
        <CodeBlock
          codeString={`context.router.root.push(ProfileDataStack(onResult: (data) {
// do something with data here
}));`}
        />
        This will push the user to the{" "}
        <InlineCode>ProfileDataFirstNameRoute</InlineCode> initially, and then
        the other routes as the user fills out the fields.
        <p />
        <b>**Note**:</b> We pushed this router/stack with
        <InlineCode>ProfileDataStack</InlineCode> in this example. However,
        please note that{" "}
        <b>
          if you implement <InlineCode>AutoRouteWrapper</InlineCode> in the{" "}
          <InlineCode>ProfileDataWrapperPage</InlineCode>
        </b>
        , you <b>MUST</b> push the router/stack with{" "}
        <InlineCode>ProfileDataWrapperPage</InlineCode> instead!
      </PageSection>
    </div>
  );
}
