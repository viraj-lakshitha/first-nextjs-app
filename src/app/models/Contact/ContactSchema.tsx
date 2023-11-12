import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [2, "Name must be larger than 2 charcters"],
        maxLength: [50, "Name must be less than 50 charcters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"]
    },
    message: {
        type: String,
        required: [true, "Message is required"],
        minLength: [5, "Message must be larger than 5 charcters"],
        maxLength: [100, "Message must be less than 250 charcters"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema)

export default Contact