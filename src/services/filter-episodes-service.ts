import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<PodcastTransferModel> => {


    //define a interface/contrato 
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    //busca os dados
    const queryString = podcastName?.split("?p=")[1] ?? "";
    const data = await repositoryPodcast(queryString);


     
    //verifico o tipo de resposta   
    responseFormat ={
    statusCode: data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data,
    }

    return responseFormat;
}