import { PRODUCTION_SOCKET_URL, DEVELOPMENT_SOCKET_URL, NODE_ENV } from "env";
import io from "socket.io-client";

const API_URL =
  NODE_ENV === "production" ? PRODUCTION_SOCKET_URL : DEVELOPMENT_SOCKET_URL;

console.log("APi url..............", API_URL);
console.log("scocket url..............", PRODUCTION_SOCKET_URL);
console.log("NOde env..............", NODE_ENV);

const socket = io(API_URL);

export default socket;
