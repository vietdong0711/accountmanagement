import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Input, Row, Col } from "reactstrap";
import { actionTogleFormRedux } from "../../../Redux/Action/FormUpdateAction";
import UpdateInputFormComponent from "./UpdateInputFormComponent";

function ModalUpdateAccount(props) {
  let { onHandleUpdateAccount } = props;

  let dispatchRedux = useDispatch();

  // Quản lý trạng thái ẩn hiện Moadal
  let showModal = useSelector(state => state.formUpdateStatus.isShowFormUpdate)

  // Xử lý ẩn hiện modal
  let onHandleShowModal = () => {
    // Đóng form update
    dispatchRedux(actionTogleFormRedux());
  };

  return (
    <Container>
      <Modal isOpen={showModal}>
        <ModalHeader>
          <h3>Update Account</h3>
        </ModalHeader>
        <ModalBody>
          <UpdateInputFormComponent onHandleUpdateAccount={onHandleUpdateAccount} />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={onHandleShowModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalUpdateAccount;
