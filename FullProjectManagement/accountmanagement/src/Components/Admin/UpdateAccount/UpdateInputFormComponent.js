import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import "./style.css";
import { useSelector } from "react-redux";

function UpdateInputFormComponent(props) {
  let { onHandleUpdateAccount } = props;

  let listDepartment = useSelector((state) => state.ListDepartment);

  let listPostion = useSelector((state) => state.ListPosition);

  // Lấy thông tin AccountUpdateInfo từ Redux để fill dữ liệu
  let accountUpdateInfo = useSelector((state) => state.formUpdateStatus.accountUpdateInfo);

  // Tìm depid và posid để fill vào thẻ select
  let depidUpdate = listDepartment.find((dep) => dep.name === accountUpdateInfo.departmentName).id;
  let posiddUpdate = listPostion.find((pos) => pos.name === accountUpdateInfo.positionName).id;

  // console.log("depidUpdate: ", depidUpdate);
  // console.log("posiddUpdate: ", posiddUpdate);
  return (
    <div>
      {/* Formik */}
      <Formik
        initialValues={{
          Fullname: accountUpdateInfo.fullName,
          Department: depidUpdate,
          Position: posiddUpdate,
        }}
        validationSchema={Yup.object({
          Fullname: Yup.string().min(6, "Must be between 6 and 50 characters").max(50, "Must be between 6 and 50 characters").required("Required"),
          Department: Yup.number().required("Pls, Select a Department"),
          Position: Yup.number().required("Pls, Select a Position"),
        })}
        onSubmit={(values) => {
          // console.log("values: ", values);
          let accountUpdateNew = {
            fullName: values.Fullname,
            positionId: values.Position,
            departmentId: values.Department,
          };
          // console.log("Thông tin Account Sau khi chỉnh sửa: ", accountUpdateNew);
          onHandleUpdateAccount(accountUpdateNew);
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
                    Update
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

export default UpdateInputFormComponent;
