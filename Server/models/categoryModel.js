import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence';
const AutoIncrement = mongooseSequence(mongoose);

const categorySchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    categoryName: {
        type: String,
        required: true
    },
    subCategories: [{
        _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
        subCategoryName: {
            type: String,
            required: true
        }
    }]
});


categorySchema.plugin(AutoIncrement, { inc_field: "categoryID" });

const Category = mongoose.model('Category', userSchema);

export default Category;