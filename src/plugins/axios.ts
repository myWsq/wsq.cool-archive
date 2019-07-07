import Axios from "axios";

export const AxiosDefault = Axios.create({
  // config

  baseURL: process.env.VUE_APP_BASE_URL
});
