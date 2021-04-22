import { http } from "./http"
import "./websocket/client"


http.listen(3000, () => console.log("Servidor tá rodando na porta 3000"));


