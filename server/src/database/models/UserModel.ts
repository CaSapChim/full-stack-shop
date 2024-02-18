import mongoose from "mongoose";

interface UserInterface extends mongoose.Document {
     userId: string
}

const userSchema = new mongoose.Schema<UserInterface>({
     userId: {
          type: String,
          required: true
     }
})

const userModel = mongoose.model('user', userSchema);

export default userModel;