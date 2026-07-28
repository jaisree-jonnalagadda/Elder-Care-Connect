import axios from "axios";

const API = axios.create({
  baseURL: "https://elder-care-connect-backend.onrender.com/api",
});

export default API;