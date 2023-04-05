import { PRODUCTION_API_URL, DEVELOPMENT_API_URL, NODE_ENV } from "env";
import io from "socket.io-client";

const API_URL =
  NODE_ENV === "production" ? PRODUCTION_API_URL : DEVELOPMENT_API_URL;

const socket = io(API_URL);

export default socket;
