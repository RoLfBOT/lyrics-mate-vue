import axios from "axios";

export const api = axios.create({
  baseURL: "http://api.musixmatch.com/ws/1.1"
});
