import express from 'express';
import initializeDatabase from './database/Init';
import { routerHandler } from './handlers/routerHandler';

const app = express();
const PORT = 3000;
const connection = initializeDatabase().then((con) => {
     app.use(express.json());
     routerHandler(app);

     app.get('/', (req, res) => {
          res.send({
               data: "Chào em!"
          })
     })
     app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
     return con;
});



process.on('SIGINT', async () => {
     (await connection).close();
     console.log('Mongoose connection closed');
     process.exit(0);
});