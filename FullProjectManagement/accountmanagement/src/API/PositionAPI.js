import { api } from "./api";

const getPositionAPIList = () => {
  return api("GET", "position", null, null);
};

// export

export { getPositionAPIList };
