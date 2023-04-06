import mongoose from 'mongoose';
import { mongoose as AutoIncrement } from 'mongoose-sequence';


const productSchema = new mongoose.Schema({
	_id: { 
		type: mongoose.Schema.Types.ObjectId, 
		auto: true
	},
	name: {
		type: String,
		required: true
 	},
	slug: { 
		type: String, 
     	required: true, 
      	unique: true 
    },
    productPictures: [
		{
      		img: { 
				data: Buffer,
        		contentType: String
			} 
    	}
	],
    description: {
      	type: String,
      	required: true
    },
    reviews: [
		{
      		rating: { 
        		type: Number, 
				required: true 
      		},
      		comment: { 
        		type: String, 
				required: true 
     		},
     		user: {
      			type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
      			required: true
      		}
		}
	],
    price: {
      	type: Number,
      	required: true,
      	default: 0
    },
    category: { 
      	type: mongoose.Schema.Types.ObjectId,
      	ref: 'Category', 
      	required: true 
    },
	quantity: {
        type: Number,
        required: true
    },
	created_at : { 
		type: Date, 
		required: true, 
		default: Date.now
	}
},{
	timestamps: true,
})

productSchema.plugin(AutoIncrement, { inc_field: "productId" });

const Product = mongoose.model('Product', productSchema)

export default Product
