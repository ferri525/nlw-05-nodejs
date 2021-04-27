import {http} from "./http";
import "./websocket/client";
import "./websocket/admin"

http.listen(3300, () => console.log("Rodando na porta 3300"));