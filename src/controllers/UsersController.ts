import { Request, Response } from "express";
import { UsersSerivce } from "../services/UsersService";




class UsersController{
    async create(request: Request, response: Response): Promise<Response>{
        const { email } = request.body;


        const usersSerivce = new UsersSerivce;

        const user = await usersSerivce.create(email)

        return response.json(user);
    }
}

export{ UsersController }