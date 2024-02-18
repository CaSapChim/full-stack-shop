import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const initializeDatabase = async () => {
     try {
          const MONGO_URI = process.env.MONGO;

          if (!MONGO_URI) {
               throw new Error('Missing MONGO_URI environment variable. Set it correctly.');
          }

          await mongoose.connect(MONGO_URI)
               .then(() => console.log('Successfully connected to database!'))
               .catch((error) => {
                    console.error('Error connecting to database:', error);
                    process.exit(1);
               });
     } catch (error) {
          console.error('Error initializing database:', error);
          process.exit(1);
     }

     return mongoose.connection;
}

export default initializeDatabase;