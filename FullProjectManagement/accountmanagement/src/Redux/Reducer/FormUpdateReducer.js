import * as Types from "../Contant/FormUpdateActionType";

var initialState = {
    isShowFormUpdate: false,
    accountUpdateInfo: {}
};

const formUpdateStatus = (state = initialState, action) => {
    switch (action.type) {
        case Types.TOGLE_FORM_UPATE:
            return {
                ...state,
                isShowFormUpdate: !state.isShowFormUpdate,
            };
        case Types.FETCH_ACCOUNT_UPDATE_INFO:
            return {
                ...state,
                accountUpdateInfo: action.payload
            };
        default:
            return { ...state };
    }
};

export default formUpdateStatus;
