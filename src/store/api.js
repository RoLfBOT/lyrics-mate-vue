import axios from "axios";

export const api = axios.create({
  baseURL: "http://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1"
});
