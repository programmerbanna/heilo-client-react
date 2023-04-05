import { PRODUCTION_SOCKET_URL, DEVELOPMENT_SOCKET_URL, NODE_ENV } from "env";
import io from "socket.io-client";

const API_URL =
  NODE_ENV === "production" ? PRODUCTION_SOCKET_URL : DEVELOPMENT_SOCKET_URL;

const socket = io(API_URL);

export default socket;
