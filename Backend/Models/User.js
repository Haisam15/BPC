import { Schema } from "mongoose";

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    cnic: String,
    email: String,
    password: String,
    phone: String,
    address: String,
    city: String,
    country: String,
    postalCode: String,
    role: String,
    businessPlan: String,
    businessDescription: String,
});

export default UserSchema;
