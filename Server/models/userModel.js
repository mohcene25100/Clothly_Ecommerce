import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'; // for hashing password.
import mongooseSequence from 'mongoose-sequence';
const AutoIncrement = mongooseSequence(mongoose);

const userSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    userName: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return (v==null || v.trim().length<1) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: 'Please fill a valid E-mail address!'
        }
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    avatar: {
        data: Buffer,
        contentType: String
    },
    contactNumber: {
        type: String,
        trim: true,
        validate: {
            validator: function(v) {
                return (v==null || v.trim().length<1) || /\d{2}-\d{2}-\d{2}-\d{2}-\d{2}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digits contact number!'
        }
    },
    shippingAddress: {
        street: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        postalCode: {
            type: String
        },
        country: {
            type: String
        }
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isBanned: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});


// Hashing password before storing it on database.
userSchema.pre('save', async function save(next) {
    try {
        if(this.password && this.isModified("password")) {
            const salt = await bcrypt.genSalt(12);
            this.password = await bcrypt.hash(this.password, salt);
        }
        next();
    } catch(e) {
        next(e);
    }
});

// Add userID field to UserSchema and making it auto-increment by 1 for every insertion of a new user.
userSchema.plugin(AutoIncrement, { inc_field: "userID" });

const User = mongoose.model('User', userSchema);

// Export userModel
export default User; 