import * as Types from "../Contant/FormUpdateActionType"
// Chuyển đổi trạng thái đóng mở của Account
export const actionTogleFormRedux = () => {
    return {
        type: Types.TOGLE_FORM_UPATE,
    };
};

// Lưu thông tin của Account Update lên redux
export const actionFetchAccountUpdateInfoRedux = (accountUpdate) => {
    return {
        type: Types.FETCH_ACCOUNT_UPDATE_INFO,
        payload: accountUpdate,
    };
};
