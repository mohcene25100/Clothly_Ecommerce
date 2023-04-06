import mongoose from 'mongoose';
import { mongoose as AutoIncrement } from 'mongoose-sequence'; 
const orderSchema = new mongoose.Schema({
    id: { 
        type: mongoose.Schema.Types.ObjectId,
        auto: true
     },
    buyerName: {
        type: String,
        trim: true,
        required: true
    },
    buyerUsername: {
        type: String,
        trim: true,
        required: true
    },
    buyerEmail: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },
    orderItems:{
    
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            
        },
        quantity: {
            type: Number,
            required: true,
            default:1
        },
},
    status:{
        type:String,
        //order status case
        enum :['case1','case2','case3','case4']
    },
}, {
    timestamps: true
});
userSchema.plugin(AutoIncrement, { inc_field: "id" });
const Order = mongoose.model('Order', orderSchema);
export default Order; 