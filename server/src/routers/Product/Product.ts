import express from "express";
import productModel, { ProductInterface } from "../../database/models/ProductModel";
import bodyParser from "body-parser";
import { authMiddleWare } from "../../dependencies";

const productRouter = express.Router({});

productRouter.use(authMiddleWare);

const response = {
     data: "" || {}
}

productRouter.get('/listproduct', async (req, res) => {
     response.data = await productModel.find();
     res.send(response);
});

productRouter.post<ProductInterface>('/newproduct', bodyParser.json(), async (req, res) => {
     const product: ProductInterface = req.body;
     let productData = await productModel.findOne({ name: product.name });

     if (productData) {
          response.data = {
               message: `The ${product.name} has already existed in storage.`,
               tips: `use /fixproduct instead to modify the data!`,
               data: productData
          }
          return res.status(202).json(response);
     } else {
          productData = new productModel({})
     }
     response.data = {
          message: `Sucessfully create new ${product.name}!`,
          data: productData
     }
     res.status(201).json(response);

});

export = productRouter;