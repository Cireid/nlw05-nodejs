import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository"



class UsersSerivce{

    private usersRepository: UsersRepository;

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create(email: string){
        const userExist = await this.usersRepository.findOne({
            email
        })

        if(userExist){
            return userExist
        }

        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);
        return user;
    }

    async findByEmail(email: string){
        const user = await this.usersRepository.findOne(email);

        return user;
    }
}


export {UsersSerivce}