import { Request, Response } from "express";
import { MessageService } from "../services/MessageService";


class MessageController{

    async create(request: Request, response: Response){
        const {admin_id, text, user_id} = request.body
        const messagesService = new MessageService

        const message = await messagesService.create({
            admin_id,
            text,
            user_id,
        })

        return response.json(message);
    }

    async showUser(request: Request, response: Response){
        const { id } = request.params;
        const messagesService = new MessageService();

        try{ 
            const list = await messagesService.listByUser(id);
            return response.json(list)
        }catch(e:any){
            return response.status(400).json({
                data: "Deu errado",
                error: e.message
            });
        }
    }
}

export { MessageController }