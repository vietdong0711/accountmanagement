import { api } from "./api";
import queryString from "query-string";

const getAccountAPIList = (fillter) => {
  // console.log("fillter getAccountAPIList: ", fillter);
  // page = 1, size = 10
  const parameters = {};

  if (fillter && fillter.page) {
    parameters.page = fillter.page;
  }
  if (fillter && fillter.size) {
    parameters.size = fillter.size;
  }

  // sort: { sortField: "id", sortDirection: "asc" },
  if (fillter && fillter.sort) {
    parameters.sort = fillter.sort.sortField + "," + fillter.sort.sortDirection;
  }
  // search = ""
  if (fillter && fillter.search) {
    parameters.search = fillter.search;
  }

  console.log("parameters: ", parameters);
  // Sử dụng thư viện queryString để chuyển đổi đối tượng thành các param
  // https://www.npmjs.com/package/query-string
  let url = "account?" + queryString.stringify(parameters);
  // accounts?page=1&size=10
  console.log("Link url: ", url);

  return api("GET", url, null, null);
};

// Check exist by Email
const getEmailExists = (email) => {
  let url = "account/checkEmail/email=" + email;
  return api("GET", url, null, null);
};

// Check exist by Username
const getUsernameExists = (username) => {
  let url = "account/checkUsername/username=" + username;
  return api("GET", url, null, null);
};

// Add Account New
const addAccountNewAPI = (AccountNew) => {
  return api("POST", "account/", AccountNew, null);
};

// Xóa Account
const deleteAccountAPI = (id) => {
  let url = "account/" + id;
  return api("DELETE", url, null, null);
};
// Update Account
const updateAccountAPI = (accountUpdate, id) => {
  let url = "account/update/" + id;
  return api("PUT", url, accountUpdate, null);
};

// export

export { getAccountAPIList, getEmailExists, getUsernameExists, addAccountNewAPI, deleteAccountAPI, updateAccountAPI };
