import React, { useState } from "react";
import { Button, Container, Row, Col, Toast, ToastHeader, ToastBody } from "reactstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import "./style.css";
import { useSelector } from "react-redux";
import { getEmailExists, getUsernameExists } from "../../../API/AccountAPI";

function CreateInputFormComponent(props) {
  let { onHandleCreateNewAccount } = props;

  // State quản lý đóng mở thông báo.
  let [showNotificationCreate, setShowNotificationCreate] = useState(false);
  // Khai báo List Department chứa danh sách phòng ban Fake

  let listDepartment = useSelector((state) => state.ListDepartment);
  // Khai báo List Department chứa danh sách positon Fake

  let listPostion = useSelector((state) => state.ListPosition);
  return (
    <div>
      {/* Thông báo thêm mới thành công */}
      <Toast isOpen={showNotificationCreate}>
        <ToastHeader
          style={{ backgroundColor: "blue", color: "black", fontSize: 20 }}
          toggle={() => {
            setShowNotificationCreate(false);
          }}
        >
          Notification
        </ToastHeader>
        <ToastBody style={{ color: "black", fontSize: 25 }}>Create Account Success!!</ToastBody>
      </Toast>
      {/* Formik */}
      <Formik
        initialValues={{
          Email: "",
          Username: "",
          Fullname: "",
          Department: "",
          Position: "",
        }}
        validationSchema={Yup.object({
          Email: Yup.string()
            .min(6, "Must be between 6 and 50 characters")
            .max(50, "Must be between 6 and 50 characters")
            .email("Do not like Email")
            .required("Required"),
          // Check email exist
          // .test("checkUniqueEmail", "This email is already registered.", async (email) => {
          //   // call api
          //   let a = false;
          //   await getEmailExists(email).then((response) => {
          //     a = response;
          //   });
          //   console.log("cEmail: ", a);
          //   return a;
          // }),
          Username: Yup.string().min(6, "Must be between 6 and 50 characters").max(50, "Must be between 6 and 50 characters").required("Required"), // Check email exist
          // .test("checkUniqueUsername", "This username is already registered.", async (username) => {
          //   // call api
          //   let b = false;
          //   await getUsernameExists(username).then((response) => {
          //     b = response;
          //   });
          //   console.log("cU : ", b);
          //   return b;
          // }),
          Fullname: Yup.string().min(6, "Must be between 6 and 50 characters").max(50, "Must be between 6 and 50 characters").required("Required"),
          Department: Yup.number().required("Pls, Select a Department"),
          Position: Yup.number().required("Pls, Select a Position"),
        })}
        onSubmit={(values, actions) => {
          // console.log("values: ", values);
          let accountCreateNew = {
            email: values.Email,
            userName: values.Username,
            fullName: values.Fullname,
            positionId: values.Position,
            departmentId: values.Department,
          };
          // console.log("Thông tin Account tạo mới: ", accountCreateNew);
          onHandleCreateNewAccount(accountCreateNew);
          // Hiển thị thông báo
          setShowNotificationCreate(true);
          // Reset dữ liệu sau khi thêm, dùng hàm của formik để reset.
          actions.resetForm();
        }}
        validateOnChange={false}
        validateOnBlur={false}
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
                {/* Form thêm mới */}
                <Form>
                  {/* Email */}
                  <Field
                    name="Email"
                    type="text"
                    placeholder="Enter Email"
                    // validate={validateFirstName}
                    label="Email:"
                    component={InputComponent}
                  />

                  {/* Username */}
                  <Field
                    name="Username"
                    type="text"
                    placeholder="Enter Username"
                    // validate={validateFirstName}
                    label="Username:"
                    component={InputComponent}
                  />

                  {/* Fullname */}
                  <Field
                    name="Fullname"
                    type="text"
                    placeholder="Enter Fullname"
                    // validate={validateFirstName}
                    label="Fullname:"
                    component={InputComponent}
                  />

                  {/* Department */}
                  <Field name="Department" placeholder="Select a Department" label="Department:" listItem={listDepartment} component={SelectComponent} />
                  {/* Position */}
                  <Field name="Position" placeholder="Select a Position" label="Position:" listItem={listPostion} component={SelectComponent} />
                  <br />
                  <br />
                  {/* submit */}
                  <Button color="primary" type="submit">
                    Save
                  </Button>
                  <Button color="primary" type="reset">
                    Reset
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

export default CreateInputFormComponent;
