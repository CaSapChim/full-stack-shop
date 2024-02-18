import express from "express";
import productModel, { ProductInterface } from "../../database/models/ProductModel";
import bodyParser from "body-parser";

const productRouter = express.Router({});

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
          return res.status(220).json(response);
     } else {
        productData = new productModel({})  
     }
});

export = productRouter;