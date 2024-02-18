import mongoose from "mongoose";

export interface ProductInterface {
     name: string;
     price: number;
     imageUrl: string;
     sale?: number
}

const userSchema = new mongoose.Schema<ProductInterface & mongoose.Document>({
     name: {
          type: String,
          required: true
     },
     price: {
          type: Number,
          required: true,
     },
     imageUrl: {
          type: String,
          required: true
     },
     sale: {
          type: Number,
          required: false
     }

})

const productModel = mongoose.model('product', userSchema);

export default productModel;