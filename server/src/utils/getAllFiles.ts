import * as fs from 'fs';
import * as path from 'path';

export const getAllFiles = (directory: string, foldersOnly: boolean = false): string[] => {
     const fileNames: string[] = [];
     try {
          const files = fs.readdirSync(directory, { withFileTypes: true });
          for (const file of files) {
               const filePath = path.join(directory, file.name);

               if (foldersOnly) {
                    if (file.isDirectory()) {
                         fileNames.push(filePath);
                    }
               } else {
                    if (file.isFile()) {
                         fileNames.push(filePath);
                    }
               }
          }

     } catch (error) {
          console.log("Skip read folders!");
     }

     return fileNames;
}