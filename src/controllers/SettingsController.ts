import { Request, Response } from "express"
import { SettingsService } from "../services/SettingsService";


class SettingsController {
    async create(request: Request, response: Response) {
        const {chat, username} = request.body;
        const settingsService = new SettingsService();
        try{ 
            const settings = await settingsService.create({chat, username});
            return response.json(settings)
        }catch(e:any){
            return response.status(400).json({
                data: "Deu errado",
                error: e.message
            });
        }
    }
}

export {SettingsController}