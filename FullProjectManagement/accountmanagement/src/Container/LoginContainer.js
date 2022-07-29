import React from "react";
import LoginComponent from "./../Components/Login/LoginComponent";
import { checkLoginAPI } from "../API/LoginAPI";
import storage from "../Storage/Storage";
import { useHistory } from "react-router-dom";

function LoginContainer(props) {
  let history = useHistory();

  let handleLogin = (accountLogin) => {
    // console.log("Value: ", accountLogin);
    // Call API
    checkLoginAPI(accountLogin)
      .then((response) => {
        if (response !== null && response !== undefined) {
          alert("Login thành công!");
          console.log("response: ", response);
          let accountLoginSaveToStorage = {
            id: response.id,
            username: accountLogin.Username,
            password: accountLogin.Password,
            fullname: response.fullName,
          };
          // Lưu thông tin Account vào LocalStorage để sử dụng về sau
          storage.setUserInfo(accountLoginSaveToStorage);
          // Chuyển đến trang admin page
          history.push("/admin");
        } else {
          alert("Hãy kiểm tra lại thông tin!");
        }
      })
      .catch((err) => {
        alert("Đã có lỗi xảy ra!!");
      });
  };
  return (
    <div>
      <LoginComponent handleLogin={handleLogin} />
    </div>
  );
}

export default LoginContainer;
