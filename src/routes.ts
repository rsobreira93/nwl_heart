import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateMessageController } from "./controller/CreateMessageController";
import { GetLast3MessagesController } from "./controller/GetLast3MessagesController";
import { ProfileUserController } from "./controller/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const routes = Router();

routes.post("/authenticate", new AuthenticateUserController().handle);

routes.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

routes.get("/messages/last3", ensureAuthenticated, new GetLast3MessagesController().handle);

routes.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export {routes};