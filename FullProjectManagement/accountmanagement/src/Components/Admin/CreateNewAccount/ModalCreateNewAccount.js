import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Input, Row, Col } from "reactstrap";
import CreateInputFormComponent from "./CreateInputFormComponent";

function ModalCreateNewAccount(props) {
  let { onHandleCreateNewAccount } = props;
  // Quản lý trạng thái ẩn hiện Moadal
  let [showModal, SetShowModal] = useState(false);

  // Xử lý ẩn hiện modal
  let onHandleShowModal = () => {
    SetShowModal(!showModal);
  };

  return (
    <Container>
      <br />
      <Button color="primary" onClick={onHandleShowModal}>
        Create New Account
      </Button>
      <Modal isOpen={showModal}>
        <ModalHeader>
          <h3>Create New Account</h3>
        </ModalHeader>
        <ModalBody>
          <CreateInputFormComponent onHandleCreateNewAccount={onHandleCreateNewAccount} />
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

export default ModalCreateNewAccount;
