import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d7ff7f9fd55749878ee48c8f0860173d",
  },
});
