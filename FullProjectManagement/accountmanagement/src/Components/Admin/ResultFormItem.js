import React from "react";
import { Button } from "reactstrap";

function ResultFormItem(props) {
  let { account, onHandleDelete, onHandleUpdateEdit } = props;

  let handleDelete = (id) => {
    onHandleDelete(id);
  };

  let handleUpdate_Edit = (accountUpdate) => {
    onHandleUpdateEdit(accountUpdate);
  };
  return (
    <tr>
      <td>{account.id}</td>
      <td>{account.email}</td>
      <td>{account.userName}</td>
      <td>{account.fullName}</td>
      <td>{account.departmentName}</td>
      <td>{account.positionName}</td>
      <td>{account.createDate}</td>
      <td>
        <Button
          color="warning"
          onClick={() => {
            handleUpdate_Edit(account);
          }}
        >
          Edit
        </Button>
      </td>
      <td>
        <Button
          color="warning"
          onClick={() => {
            handleDelete(account.id);
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default ResultFormItem;
