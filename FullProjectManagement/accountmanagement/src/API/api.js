import axios from "axios";
import storage from "../Storage/Storage";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
    "content-type": "application/json",
  },


});

// Thêm thông tin xác thực cho mỗi request, bao gồm thông tin Username vào Password
export const api = (method, endpoint, payload, accountLogin) => {
  // TH login sẽ lấy thông tin login từ giao diện
  // console.log("method: ", method);
  // console.log("endpoint: ", endpoint);
  // console.log("payload: ", payload);
  // console.log("accountLogin: ", accountLogin);

  if (accountLogin) {
    return axiosClient(
      endpoint,
      {
        auth: {
          username: accountLogin.Username,
          password: accountLogin.Password,
        }, method: method, data: payload
      },
      // { method: method, data: payload }
    )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    // Trường hợp đã đăng nhập, lấy thông tin login từ LocalStorage
  } else {
    let accountloginStorage = storage.getUserInfo();
    return axiosClient(
      endpoint,
      {
        auth: {
          username: accountloginStorage.username,
          password: accountloginStorage.password,
        }, method: method, data: payload
      },
      // { method: method, data: payload }
    )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
