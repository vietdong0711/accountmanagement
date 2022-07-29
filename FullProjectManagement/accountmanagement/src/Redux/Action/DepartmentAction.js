import { getDepartmentAPIList } from "../../API/DepartmentAPI";
import * as Types from "../Contant/DepartmentActionType";

// Viết các Action liên quan đến Call API
export const actionFetchDepartmentAPI = () => {
  return (dispatch) => {
    return getDepartmentAPIList().then((response) => {
      console.log("reponseDepartmentAPI:", response);
      dispatch(actionFetchDepartmentRedux(response));
    });
  };
};

// Dispath action này tới redux để lưu list Account vào redux
export const actionFetchDepartmentRedux = (departments) => {
  return {
    type: Types.FETCH_DEPARTMENT_LIST,
    payload: departments,
  };
};
