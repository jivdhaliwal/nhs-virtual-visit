import React, { useCallback, useState } from "react";
import Button from "../src/components/Button";
import FormGroup from "../src/components/FormGroup";
import { GridRow, GridColumn } from "../src/components/Grid";
import Heading from "../src/components/Heading";
import Hint from "../src/components/Hint";
import Input from "../src/components/Input";
import Label from "../src/components/Label";
import Layout from "../src/components/Layout";
import fetch from "isomorphic-unfetch";

const Home = () => {
  const [contactNumber, setContactNumber] = useState("");

  const onSubmit = useCallback(async (event) => {
    event.preventDefault();

    const response = await fetch("/api/calls", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        contactNumber,
      }),
    });

    const { callUrl, err } = await response.json();

    if (callUrl) {
      window.location.href = callUrl;
    } else {
      console.error(err);
    }
  });

  return (
    <Layout>
      <GridRow>
        <GridColumn width="two-thirds">
          <form onSubmit={onSubmit}>
            <Heading>Call a key contact</Heading>
            <FormGroup>
              <Label htmlFor="contact">Key contact's mobile number</Label>
              <Hint className="nhsuk-u-margin-bottom-2">
                This must be a UK mobile number, like 07700 900 982.
              </Hint>
              <Hint>
                It will be used to send your key contact a text message with a
                unique link for them to join a video call with you.
              </Hint>

              <Input
                type="number"
                maxLength={11}
                className="nhsuk-u-font-size-32 nhsuk-input--width-10"
                style={{ padding: "32px 16px!important" }}
                onChange={(event) => setContactNumber(event.target.value)}
                name="contact"
              />
              <br/>
              <Button className="nhsuk-u-margin-top-5">Send invite</Button>
            </FormGroup>
          </form>
        </GridColumn>
        <span style={{ clear: "both", display: "block" }}></span>
      </GridRow>
    </Layout>
  );
};

export default Home;
