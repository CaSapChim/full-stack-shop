import express from "express";
import userModel from "../../database/models/UserModel";

const loginRouter = express.Router({});

const response = {
     data: "" || {}
}


loginRouter.get('/listuser', async (req, res) => {
     response.data = await userModel.find();
     res.status(200).json(response);
});

loginRouter.get('/finduser/:id', async (req, res) => {
     const userId = req.params.id;
     const userData = await userModel.findOne({ userId: userId });
     if (!userData) {
          response.data = {
               message: `The ${userId} was not in storage.`,
               tips: `use /createuser instead to create the data!`,
          }
          res.status(404).json(response);
     }

})

export = loginRouter;
