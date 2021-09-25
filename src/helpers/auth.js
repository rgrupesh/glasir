import Axios from "../axios-url";

export const signOut = async (next) => {
  await Axios.get("/api/v1/user/logout");
  next();
};
