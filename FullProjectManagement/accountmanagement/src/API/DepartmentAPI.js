import { api } from "./api";

const getDepartmentAPIList = () => {
  return api("GET", "department", null, null);
};

// export

export { getDepartmentAPIList };
