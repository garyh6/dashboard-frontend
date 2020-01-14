import { Button, TextField } from "@material-ui/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import rp from "request-promise";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email()
});

interface Props extends RouteComponentProps {}

const Login: React.FC<Props> = ({ history }) => {
  return (
    <div className="App">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async ({ email, password }, { setSubmitting }) => {
          setSubmitting(true);
          const options = {
            method: "POST",
            uri: `http://localhost:4000`,
            body: {
              query: `
              mutation {
                  login(email: "${email}", password:"${password}") {
                    path
                    message
                  }
              }`
            },
            json: true
          };
          await rp(options)
            .then(function(res) {
              history.push("/dashboard");
            })
            .catch(function(err) {
              console.log("************ err", err);
            });
        }}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting }) => {
          return (
            <Form>
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="email"
                  as={TextField}
                ></Field>
              </div>
              <div>
                <ErrorMessage name="email" />
              </div>
              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  as={TextField}
                ></Field>
              </div>
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
