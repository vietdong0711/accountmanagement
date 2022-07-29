import React, { useEffect } from "react";
import { getAccountAPIList } from "../API/AccountAPI";
import { Container } from "reactstrap";
import AdminContainer from "../Container/AdminContainer";

function AdminPage(props) {
  // useEffect(() => {
  //   // Call API
  //   let fillter = {
  //     page: 1,
  //     size: 6,
  //   };
  //   getAccountAPIList(fillter).then((response) => {
  //     console.log("Kết quả Call API:P ", response);
  //   });
  // });

  return (
    <Container>
      <AdminContainer />
    </Container>
  );
}

export default AdminPage;
