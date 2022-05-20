import { Express, Request, Response } from "express";
import {
  createUser,
  getAllUsers,
  createManyUsers,
} from "./../../controllers/users";

function openRoutes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send({
      message: "Server is running successfully 🌞",
    });
  });
  app.get("/users", (req: Request, res: Response) => {
    getAllUsers(req, res);
  });
  app.post("/user/create", (req: Request, res: Response) => {
    //fonction déclarer dans le controlleur
    createUser(req, res);
  });
  app.post("/user/create/:numberOfUsers", (req: Request, res: Response) => {
    const numberOfUsers = Number(req.params.numberOfUsers);
    createManyUsers(req, res, numberOfUsers);
  });
}
export default openRoutes;
