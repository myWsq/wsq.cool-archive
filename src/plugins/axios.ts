import Axios from "axios";

export const AxiosDefault = Axios.create({
  baseURL: process.env.NODE_ENV === "production" && process.env.VUE_APP_BASE_URL
});
