import * as http from "http";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
    
    
export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

        //querystring
        const baseUrl = request.url?.split("?")[0];

        // listar podcasts
            if(request.method === HttpMethods.GET && baseUrl === Routes.LIST){
            await getListEpisodes(request, response);
        }

        if(request.method === HttpMethods.GET && baseUrl === Routes.PODCAST){
        await getFilterEpisodes(request, response);
        }
    }