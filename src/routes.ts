import { Router } from "express";
import { SettingsController } from "./controller/SettingsController";
import { UsersController } from "./controller/UsersController";
import { MessagesController } from "./controller/MessagesController";

const routes = Router();

/**
 * Tipos de parametros:
 * Routes Params => Parametros de rotas
 * http://localhost:3300/1
 * 
 * Query Params => Parametros de buscas
 * http://localhost:3300/1?search=algumacoisa
 * 
 * Body Params => dados que vem {
 * 
 * }
 * */
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create)
routes.get("/settings/:username", settingsController.findByUsername)
routes.put("/settings/:username", settingsController.update)

routes.post("/users", usersController.create)

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export {routes};