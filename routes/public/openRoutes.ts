import { Express, Request, Response } from "express";
import {
  createUser,
  getAllUsers,
  createManyUsers,
  getUniqueUser,
} from './../../controllers/users';

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
  app.get('/user/:id',(req:Request, res: Response)=>{
    const id = Number(req.params.id);
    getUniqueUser(req,res,id);
  })
}
export default openRoutes;
