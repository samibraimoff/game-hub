import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "58c77d2d03cb4526a457a4e3d4de3f7e",
  },
});
