import { combineReducers } from "redux";
import formUpdateStatus from "./FormUpdateReducer";
import ListAccount from "./ListAccountReducer";
import ListDepartment from "./ListDepartmentReducer";
import ListPosition from "./ListPositionReducer";
import pageFilter from "./PaginationReducer";

const RootReducers = combineReducers({
  ListAccount: ListAccount,
  pageFilter: pageFilter,
  ListDepartment: ListDepartment,
  ListPosition: ListPosition,
  formUpdateStatus: formUpdateStatus
});

export default RootReducers;
