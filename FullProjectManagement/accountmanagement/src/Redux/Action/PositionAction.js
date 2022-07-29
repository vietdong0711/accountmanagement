import { getPositionAPIList } from "../../API/PositionAPI";
import * as Types from "../Contant/PositionActionType";

// Viết các Action liên quan đến Call API
export const actionFetchPositionAPI = () => {
  return (dispatch) => {
    return getPositionAPIList().then((response) => {
      // console.log("reponseDepartmentAPI:", response);
      dispatch(actionFetchPositionRedux(response));
    });
  };
};

// Dispath action này tới redux để lưu list Account vào redux
export const actionFetchPositionRedux = (positions) => {
  return {
    type: Types.FETCH_POSITION_LIST,
    payload: positions,
  };
};
