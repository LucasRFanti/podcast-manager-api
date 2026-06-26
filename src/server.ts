import * as http from "http";
import { getEnvironmentData } from "worker_threads";
import { getListEpisodes } from "./controllers/podcasts-controller"

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {

        if(req.method === "GET"){
            await getListEpisodes(req, res);
        }

    }
);

const port = process.env.PORT;

server.listen(port, () =>{
console.log(`SERVIDOR INICIADO NA PORTA ${port}`);
})
