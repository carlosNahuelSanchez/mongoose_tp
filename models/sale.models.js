import mongoose from "mongoose"

export const saleSchema = new mongoose.Schema({
    //Credenciales
    employee:{
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    //Ventas
    productSale: {
        idProduct:{ 
            type:Number,
            required:true,
        },
        idSale: { 
            type:Number,
            required:true,
        },
        nameProduct:{ 
            type:String,
            required:true,
        },
        amountSold: { 
            type:Number,
            required:true,
        }
    }
})

