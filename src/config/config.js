import axios from "axios";

const token = JSON.parse(localStorage.getItem("persist:root") ?? "{}")?.token ?? "{}";

export default axios.create({
  baseURL:"https://books19-api.onrender.com/api/v1",
  headers:{
      Authorization:`Bearer ${JSON.parse(token)}`
  }
  });