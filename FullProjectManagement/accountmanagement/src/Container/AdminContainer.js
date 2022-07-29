import React, { useEffect, useState } from "react";
import { Container, Row, Col, Toast, ToastHeader, ToastBody } from "reactstrap";
import ResultForm from "../Components/Admin/ResultForm";
// import CreateButton from "./../Components/Admin/CreateButton";
import { useDispatch, useSelector } from "react-redux";
import { actionAddAccountAPI, actionDeleteAccountAPI, actionFetchAccountAPI, actionUpdateAccountAPI } from "../Redux/Action/AccountAction";
import ResultFormItem from "../Components/Admin/ResultFormItem";
import PaginationButton from "../Components/Admin/PaginationButton";
import { actionChangePage, actionChangeSize, actionChangeSortDirection, actionChangeSortField, actionSearch } from "../Redux/Action/PageAction";
import SizeButton from "../Components/Admin/SizeButton";
import FieldSortButton from "../Components/Admin/FieldSortButton";
import DirectionSortButton from "../Components/Admin/DirectionSortButton";
import SearchComponent from "../Components/Admin/SearchComponent/SearchComponent";
import ModalCreateNewAccount from "../Components/Admin/CreateNewAccount/ModalCreateNewAccount";
import { actionFetchDepartmentAPI } from "./../Redux/Action/DepartmentAction";
import { actionFetchPositionAPI } from "../Redux/Action/PositionAction";
import { actionFetchAccountUpdateInfoRedux, actionTogleFormRedux } from "./../Redux/Action/FormUpdateAction";
import ModalUpdateAccount from "../Components/Admin/UpdateAccount/ModalUpdateAccount";
import storage from "../Storage/Storage";
import LogoutButton from "../Components/Admin/LogoutButton";
import { useHistory } from "react-router-dom";

function AdminContainer(props) {
  let stateRedux = useSelector((state) => state);
  let dispatchRedux = useDispatch();
  let history = useHistory();
  // State quản lý đóng mở thông báo.
  let [showNotificationDelete, setShowNotificationDelete] = useState(false);
  // Lấy dữ liệu page, size được quản lý từ Redux
  let fillter = {
    page: stateRedux.pageFilter.page,
    size: stateRedux.pageFilter.size,
    sort: stateRedux.pageFilter.sort,
    search: stateRedux.pageFilter.search,
  };

  //gọi useEffect để load dữ liệu, chỉ gọi khi các state page hoặc size, ... từ redux thay đổi
  useEffect(() => {
    dispatchRedux(actionFetchAccountAPI(fillter));
    // Gọi useEffect để load dữ liệu list Department và Positon
    dispatchRedux(actionFetchDepartmentAPI());
    dispatchRedux(actionFetchPositionAPI());
  }, [stateRedux.pageFilter.page, stateRedux.pageFilter.size, stateRedux.pageFilter.sort, stateRedux.pageFilter.search]);

  // console.log("stateRedux: ", stateRedux);
  // Xử lý xóa Account
  let onHandleDelete = (id) => {
    console.log("Id của Account cần xóa:", id);
    dispatchRedux(actionDeleteAccountAPI(id));
    setShowNotificationDelete(true);
  };
  // Xử lý khi nhấn nút Edit
  let onHandleUpdateEdit = (AccountUpdate) => {
    console.log("Thông tin của Account cần update:", AccountUpdate);
    // Lưu thông tin Account Update lên Redux
    dispatchRedux(actionFetchAccountUpdateInfoRedux(AccountUpdate));
    // Hiển thị formUpdate
    dispatchRedux(actionTogleFormRedux());
  };

  // Xử lý Update Account
  let onHandleUpdateAccount = (AccountUpdate_New) => {
    console.log("AccountUpdate_New:", AccountUpdate_New);
    let id = stateRedux.formUpdateStatus.accountUpdateInfo.id;
    dispatchRedux(actionUpdateAccountAPI(AccountUpdate_New, id));
  };

  // Lặp qua từng phần tử để tạo ra ResultProductItem component
  let resultFormItem = stateRedux.ListAccount.map((account, index) => {
    return <ResultFormItem key={index} account={account} onHandleDelete={onHandleDelete} onHandleUpdateEdit={onHandleUpdateEdit} />;
  });

  // Xử lý khi click vào các icon phân trang
  let onhandleChangePage = (page) => {
    // console.log("Trang hiện tại: ", page);
    // Thực hiện dispatch action để set lại giá trị page trên redux
    dispatchRedux(actionChangePage(page));
  };
  // Hàm xử lý khi người dùng ChangeSize
  let onHandleChangeSize = (item) => {
    console.log("Size: ", item);
    dispatchRedux(actionChangeSize(item));
  };
  // Hàm xử lý khi người dùng thay đổi SortField
  let onHandleChangeFieldSort = (item) => {
    dispatchRedux(actionChangeSortField(item));
  };

  // Hàm xử lý khi người dùng thay đổi SortDirection
  let onHandleChangeDirectionSort = (item) => {
    dispatchRedux(actionChangeSortDirection(item));
  };
  // Hàm xử lý khi nhấn nút Search
  let onHandleSearch = (valueSearch) => {
    console.log("valueSearch: ", valueSearch);
    dispatchRedux(actionSearch(valueSearch));
  };
  // Xử lý thêm mới Account
  let onHandleCreateNewAccount = (accountNew) => {
    console.log("Thông tin Account cần thêm mới: ", accountNew);
    dispatchRedux(actionAddAccountAPI(accountNew));
  };
  // Thông tin trang hiện tại từ redux để truyền xuống PaginationButton hiển thị
  let pageFillterCurrent = stateRedux.pageFilter;
  let ten = storage.getUserInfo().fullname;

  let handleLogout = () => {
    storage.clear();
    history.push("/");
  };

  return (
    <Container>
      <Row>
        <Col>
          <br />
          Xin chào, {ten}
        </Col>
        <Col></Col>
        <Col>
          <LogoutButton handleLogout={handleLogout} />
        </Col>
      </Row>

      {/* Hiển thị modal form update */}
      <ModalUpdateAccount onHandleUpdateAccount={onHandleUpdateAccount} />
      {/* Thông báo thêm mới thành công */}
      <Toast isOpen={showNotificationDelete}>
        <ToastHeader
          style={{ backgroundColor: "red", color: "black", fontSize: 20 }}
          toggle={() => {
            setShowNotificationDelete(false);
          }}
        >
          Notification
        </ToastHeader>
        <ToastBody style={{ color: "black", fontSize: 25 }}>Delete Account Success!!</ToastBody>
      </Toast>
      {/* Nút thêm mới */}
      {/* <CreateButton /> */}
      {/* Modal thêm mới Account */}
      <ModalCreateNewAccount onHandleCreateNewAccount={onHandleCreateNewAccount} />
      {/* Search dữ liệu */}
      <br />
      <SearchComponent onHandleSearch={onHandleSearch} />
      {/* Form kết quả */}
      <ResultForm>{resultFormItem}</ResultForm>

      {/* Phân trang */}
      <br />
      <Row>
        <Col>
          <PaginationButton onhandleChangePage={onhandleChangePage} pageFillterCurrent={pageFillterCurrent} />
        </Col>
        <Col>
          <Row>
            <Col></Col>
            <Col>
              <FieldSortButton onHandleChangeFieldSort={onHandleChangeFieldSort} />
            </Col>
            <Col>
              <DirectionSortButton onHandleChangeDirectionSort={onHandleChangeDirectionSort} />
            </Col>
            <Col>
              <SizeButton onHandleChangeSize={onHandleChangeSize} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminContainer;
