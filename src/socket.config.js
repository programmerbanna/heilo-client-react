import { API_URL } from "env";
import io from "socket.io-client";

const socket = io(API_URL);

export default socket;
