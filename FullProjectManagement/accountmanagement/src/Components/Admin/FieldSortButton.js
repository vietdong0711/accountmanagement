import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";

function FieldSortButton(props) {
  let { onHandleChangeFieldSort } = props;
  // Mảng chứa các item người dùng lựa chọn
  let sizeOption = ["id", "email", "username", "fullname", "department", "position", "createDate"];

  // State quản lý đóng mở Drowndown
  let [dropdownShow, setDropdownShow] = useState(false);

  // State quản lý giá trị của item
  let [value, setValue] = useState("id");

  // Hàm thực hiện Togger trạng thái dropdown
  let handletToggle = () => {
    setDropdownShow(!dropdownShow);
  };
  // Xử lý khi lựa chọn từng item
  let handleSelectItemDropdown = (item) => {
    setValue(item);
    onHandleChangeFieldSort(item);
  };
  // Hiển thị item
  let itemDropdown = sizeOption.map((item, index) => {
    return (
      <DropdownItem
        onClick={() => {
          handleSelectItemDropdown(item);
        }}
      >
        {item}
      </DropdownItem>
    );
  });
  return (
    <div>
      <Dropdown isOpen={dropdownShow} toggle={handletToggle}>
        <DropdownToggle caret style={{ backgroundColor: "blue" }}>
          {value}
        </DropdownToggle>
        <DropdownMenu>
          {/* <DropdownItem>1</DropdownItem>
                    <DropdownItem>2</DropdownItem>
                    <DropdownItem>3</DropdownItem>
                    <DropdownItem>4</DropdownItem> */}
          {itemDropdown}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default FieldSortButton;
