import React from "react";
import { Button, Container } from "reactstrap";

function LogoutButton(props) {
  let onLogOut = () => {
    props.handleLogout();
  };
  return (
    <Container>
      <br />
      <Button color="warning" onClick={onLogOut}>
        LogOut
      </Button>
    </Container>
  );
}

export default LogoutButton;
