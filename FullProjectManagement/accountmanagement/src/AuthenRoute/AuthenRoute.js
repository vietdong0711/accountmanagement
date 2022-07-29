import React from "react";
import { Redirect, Route } from "react-router-dom";
import storage from "./../Storage/Storage";

function AuthenRoute(props) {
  let { ComponentAuthen } = props;
  // ComponentAuthen: Là Props được tryền xuống, chưa component cần hiển thị sau khi đã login

  // Khai báo cờ này để biết xem Account đã login hay chưa
  // true: đã login
  let authenFlag = false;

  // Lấy dữ liệu xem Account đã đăng nhập chưa ở Storage
  let accountLogin = storage.getUserInfo();
  // console.log("accountLoginRoute: ", accountLogin);
  if (accountLogin.username) {
    authenFlag = true;
  }
  // console.log("sessionStorage.getItem: ", authenFlag);
  // console.log(" ComponentAuthen: ", ComponentAuthen);
  //  Sử dụng hàm render để tạo ra các thành phần bên trong 1 Component
  return (
    <Route
      render={() => {
        if (!authenFlag) return <Redirect to={"/"} />;

        return <ComponentAuthen {...props} />;
      }}
    />
  );
}

export default AuthenRoute;
