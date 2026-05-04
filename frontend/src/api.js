import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const createTicket = (data) => API.post("/tickets", data);
export const getTickets = () => API.get("/tickets");
