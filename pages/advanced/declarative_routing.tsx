import { Typography } from "@material-ui/core";
import React from "react";
import { InlineCode, CodeBlock } from "../../src/components/code_block";
import { PageHeader, PageSection } from "../../src/components/page_elements";

export default function BasicUsage() {
  return (
    <div>
      <PageHeader title="Declarative Routing" />
      <PageSection>
        With the new Navigator 2.0, we can now route to different pages based on
        state instead of manually calling <InlineCode>router.push</InlineCode>.
        This is extremely powerful for certain applications like navigation
        flows where the user needs to fill out a series of questions, like a{" "}
        <b>Sign Up</b> or <b>Profile Data Collection</b> flow.
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
            ProfileDataAgeRoute(onNext: (str) {
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
        Here, the user is first presented with the{" "}
        <InlineCode>ProfileDataFirstNameRoute</InlineCode>. After entering their
        name, they would click the next button which would trigger the{" "}
        <InlineCode>onNext</InlineCode>
        callback to fire in this wrapper page. This action in turn changes the
        state of the <InlineCode>firstName</InlineCode> variable. Since it is no
        longer empty, the <InlineCode>ProfileDataFirstNameRoute</InlineCode>{" "}
        will no longer exist in the stack and instead, the{" "}
        <InlineCode>ProfileDataLastNameRoute</InlineCode> will be showing.
        <p />
        Finally, attach the <InlineCode>ProfileDataWrapperPage</InlineCode> to
        the <InlineCode>profileDataRouter</InlineCode> to complete the
        declarative setup.
        <CodeBlock
          codeString={`const profileDataRouter = AutoRoute(
  path: '/profile_data',
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
        Now, simply push the <InlineCode>ProfileDataWrapperRoute</InlineCode>{" "}
        wherever you need it.
        <CodeBlock
          codeString={`context.router.root.push(ProfileDataWrapperRoute(onResult: (data) {
  // do something with data here such as send the data to our database
}));`}
        />
        This will push the user to the{" "}
        <InlineCode>ProfileDataFirstNameRoute</InlineCode> initially, and then
        the other routes as the user fills out the fields.
        <p />
        Note that there is a <InlineCode>onResult</InlineCode> callback which
        was defined in the <InlineCode>ProfileDataFirstNameRoute</InlineCode>{" "}
        above. This callback is triggered when the user completes the flow. In
        this example, when the user fills in their first name, last name, and
        then finally their age in the{" "}
        <InlineCode>ProfileDataAgeRoute</InlineCode>,
        <InlineCode>onResult</InlineCode> will be fired. Now, we can do stuff
        with this user's data such as sending it to our database
        {/* <p />
        <b>**Note**:</b> We pushed this router/stack with
        <InlineCode>ProfileDataStack</InlineCode> in this example. However,
        please note that{" "}
        <b>
          if you implement <InlineCode>AutoRouteWrapper</InlineCode> in the{" "}
          <InlineCode>ProfileDataWrapperPage</InlineCode>
        </b>
        , you <b>MUST</b> push the router/stack with{" "}
        <InlineCode>ProfileDataWrapperPage</InlineCode> instead! */}
      </PageSection>
    </div>
  );
}
