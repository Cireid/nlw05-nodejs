import { getCustomRepository } from "typeorm"
import { MessagesRepository } from "../repositories/MessagesRepository"

interface IMessageCreate{
    admin_id?: string;
    text: string;
    user_id: string;
}


class MessageService{

    private messagesRepository: MessagesRepository;

    constructor(){
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }

    async create({admin_id, text, user_id} : IMessageCreate){
        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id
        });

        await this.messagesRepository.save(message);
        return message;
    }

    async listByUser(user_id: string){
        const messagesRepository = getCustomRepository(MessagesRepository);
        const list = await messagesRepository.find({
            user_id
        });

        return list
    }
}

export {MessageService};