import { addAccountNewAPI, deleteAccountAPI, getAccountAPIList, updateAccountAPI } from "../../API/AccountAPI";
import * as Types from "../Contant/AccountActionType";
import * as Types_Page from "../Contant/PageActionType";
import { actionTogleFormRedux } from "./FormUpdateAction";
import { actionChangePage, actionChangeSortDirection, actionChangeSortField } from "./PageAction";
// Viết các Action liên quan đến Call API
export const actionFetchAccountAPI = (filter) => {
  return (dispatch) => {
    return getAccountAPIList(filter).then((response) => {
      console.log("reponseAPI:", response);
      dispatch(actionFetchAccountRedux(response.content));
      dispatch(actionSestTotalPageAccountRedux(response.totalPages));
    });
  };
};

// Dispath action này tới redux để lưu list Account vào redux
export const actionFetchAccountRedux = (accounts) => {
  return {
    type: Types.FETCH_ACCOUNT_LIST,
    payload: accounts,
  };
};

// Dispath action này tới redux để lấy tổng số trang Account
export const actionSestTotalPageAccountRedux = (totalPage) => {
  return {
    type: Types_Page.SET_TOTAL_PAGE,
    payload: totalPage,
  };
};


// Acction thêm mới Account
export const actionAddAccountAPI = (AccountNew) => {
  return (dispatch) => {
    return addAccountNewAPI(AccountNew).then((response) => {
      // console.log("reponseAPI After add New Account:", response);
      dispatch(actionFetchAccountAPI());
      dispatch(actionChangePage(1));  // Chuyển về trang 1 sau khi thêm mới thành công
      dispatch(actionChangeSortField("id"));  // Thay đổi trường sort về id
      dispatch(actionChangeSortDirection("desc")) // Sort theo chiều giảm dần
    });
  };
};


// Acction xóa Account
export const actionDeleteAccountAPI = (id) => {
  // console.log("deleteProductById: ", id);
  return (dispatch) => {
    return deleteAccountAPI(id).then((response) => {
      console.log("response sau khi xóa Account: ", response);
      dispatch(actionFetchAccountAPI());
      dispatch(actionChangePage(1));  // Chuyển về trang 1 sau khi thêm mới thành công
      dispatch(actionChangeSortField("id"));  // Thay đổi trường sort về id
      dispatch(actionChangeSortDirection("asc")) // Sort theo chiều giảm dần
    });
  };
};


// Acction Update Account
export const actionUpdateAccountAPI = (accountUpdate, id) => {
  console.log("accountUpdate: ", accountUpdate);
  console.log("id: ", id);
  return (dispatch) => {
    return updateAccountAPI(accountUpdate, id).then((response) => {
      console.log("response sau khi Update Account: ", response);
      dispatch(actionFetchAccountAPI());  // Load lại dữ liệu API
      dispatch(actionTogleFormRedux()); // Đóng FormUpdate
    });
  };
};
