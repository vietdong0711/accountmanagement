import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Formik, Field, Form } from "formik";
import CustomInputComponent from "./CustomInputComponent";
import * as Yup from "yup";

function LoginComponent(props) {
  let { handleLogin } = props;
  return (
    <div>
      <Formik
        initialValues={{
          Username: "",
          Password: "",
        }}
        validationSchema={Yup.object({
          Username: Yup.string().min(6, "Must be between 6 and 50 characters").max(50, "Must be between 6 and 50 characters").required("Required"),
          Password: Yup.string().min(6, "Must be between 6 and 50 characters").max(50, "Must be between 6 and 50 characters").required("Required"),
        })}
        onSubmit={(values) => {
          let accountLogin = {
            Username: values.Username,
            Password: values.Password,
          };
          handleLogin(accountLogin);
        }}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ validateField, validateForm }) => (
          <Container>
            <Row>
              <Col
                sm={{
                  offset: 2,
                  size: 8,
                }}
              >
                <Form>
                  {/* Login */}
                  <br />
                  <br />
                  <h3>Login Form</h3>
                  {/* Username */}
                  <br />
                  <Field
                    name="Username"
                    type="text"
                    placeholder="Enter Username"
                    // validate={validateFirstName}
                    label="Username:"
                    component={CustomInputComponent}
                  />

                  {/* Password */}
                  <br />
                  <Field
                    name="Password"
                    type="password"
                    placeholder="Enter Password"
                    // validate={validateLastName}
                    label="Password:"
                    component={CustomInputComponent}
                  />

                  <br />
                  {/* submit */}
                  <Button color="primary" type="submit">
                    Login
                  </Button>
                  <Button color="primary" type="reset">
                    Reset
                  </Button>
                  <Button color="primary" type="button">
                    Register
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        )}
      </Formik>
    </div>
  );
}

export default LoginComponent;
