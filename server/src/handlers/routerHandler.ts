import path from "path"
import { getAllFiles } from "../utils/getAllFiles"
import { Router, Express } from "express";

export const routerHandler = async (app: Express) => {
     try {
          const routerFolders = getAllFiles(path.join(__dirname, "..", "routers"), true);

          if (!routerFolders) {
               throw new Error("No router folder was found!");
          }

          for (const routerFolder of routerFolders) {
               const routerName = routerFolder.replace(/\\/g, "/").split("/").pop();
               if (!routerName) throw new Error("Invalid router name");
               const routerRootFile = getAllFiles(routerFolder).find((element) =>
                    element.replace(/\\/g, "/").split("/").pop()?.split('.').shift() === routerName
               );

               if (!routerRootFile) continue;
               // eslint-disable-next-line @typescript-eslint/no-var-requires
               const router = require(routerRootFile) as Router;
               app.use(`/${routerName}`, router);
               console.log(`Apply ${routerName} to server!`);
          }
     } catch (error) {
          console.error("Error loading routers:", error);
     }
};