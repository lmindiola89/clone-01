import axios from "axios";

const endpoint = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default endpoint;
