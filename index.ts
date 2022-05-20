import express from 'express';
import { PRISMA } from './config/database/prisma';
import openRoutes from './routes/public/openRoutes';

const APP = express();

function main() {
  try {
    //traitement
    APP.listen(3000, () => {
      console.log("✅ : Server listening on port 3000");
      openRoutes(APP);
    });
  } catch (e: any) {
    //traitement de l'erreur
    throw new Error(e);
    console.log(e);
  } finally {
    async () => {
      await PRISMA.$disconnect();
    };
    //fin du traitement
  }
}
main();
