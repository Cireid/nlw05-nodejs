
import { getCustomRepository, Repository } from "typeorm";
import { Connections } from "../entities/Connections";
import {ConnectionsRepository} from "../repositories/ConnectionsRepository"

interface IConnectionCreate{
    socket_id: string;
    user_id: string;
    admin_id?: string;
    id?: string;
}



class ConnectionsService {
    private connectionRepository: Repository<Connections>

    constructor(){
        this.connectionRepository = getCustomRepository(ConnectionsRepository);
    }

    async create({ socket_id, user_id, id, admin_id } : IConnectionCreate){
        const connection = this.connectionRepository.create({
            socket_id,
            user_id,
            id,
            admin_id
        });

        await this.connectionRepository.save(connection);

        return connection;
    }

    async findByUserId(user_id: string){
        const connection = await this.connectionRepository.findOne({
            user_id
        })
        return connection;
    }
}

export {ConnectionsService}