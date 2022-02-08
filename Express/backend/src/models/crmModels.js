import mongoose from "mongoose";

const Schema = mongoose.Schema;
export const ContactSchema = new Schema(
    {
        firstName: {
            type: String,
            required: 'Type your first name'
        },
        lastName: {
            type: String,
            required: 'Type your last name'
        },
        email: {
            type: String,
            required: 'Type your email adress'
        },
        company: {
            type: String
        },
        phone: {
            type: Number
        },
        date_created: {
            type: Date,
            default: Date.now
        }

    }
)