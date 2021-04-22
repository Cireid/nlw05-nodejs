import { request, response, Router } from "express";
import { SettingsController } from "./controllers/SettingsController"
import { UsersController } from "./controllers/UsersController";
import { MessageController } from "./controllers/MessagesController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messageController = new MessageController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUserName);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/message", messageController.create);

routes.get("/message/:id", messageController.showUser);


export{routes}