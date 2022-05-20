import { Request, Response } from "express";
import {
  createUserPrisma,
  getUsersPrisma,
  createManyUsersPrisma,getUniqueUserPrisma
} from "../services/users";

export async function createUser(req: Request, res: Response) {
  try {
    const user = await createUserPrisma();
    res.status(200).send({
      message: "User created",
      user: user,
    });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
}

export async function createManyUsers(
  req: Request,
  res: Response,
  numberOfUsers: number
) {
  try {
    const users = await createManyUsersPrisma(numberOfUsers);
    res.status(200).send({
      message: numberOfUsers + " Users created",
      users: users,
    });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
}

export async function getAllUsers(req: Request, res: Response) {
  let users;
  try {
    //appel de la fonction du fichier service
    users = await getUsersPrisma(); //mets le resulat de la fonction dans la constance
    if (users.length > 0) {
      //si USERS n'est pas vide alors affiche la liste des utilisateurs
      res.status(200).send({
        message: "Liste des utilisateurs",
        users: users,
      });
    } else {
      //si vide indique le message
      res.status(200).send({
        message: "Ici, bientôt la liste des utilisateurs...",
      });
    }
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  } finally {
    return users;
  }
}
export async function getUniqueUser(req: Request, res:Response, id: number){
  try{
  const user = await getUniqueUserPrisma(id);
  res.status(200).send({
    message: "Utilisateur n°" +id,
    user:user,
  });

  }catch (error:any) {
    res.status(400).send({
      message: error.message,
    })
  }
}
