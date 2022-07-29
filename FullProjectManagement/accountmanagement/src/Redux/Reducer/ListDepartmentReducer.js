import * as Types from "../Contant/DepartmentActionType";

var initialState = [];

const ListDepartment = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_DEPARTMENT_LIST:
      // console.log("payload: ", action.payload);
      state = action.payload;
      return [...state];

    default:
      return [...state];
  }
};

export default ListDepartment;
