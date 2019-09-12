import { Schema, model } from 'mongoose';
import Post from './Post';

const UserSchema = new Schema({
    name: { type: String, required: true },
    posts: { type: Array, Post },
    createdAt: { type: Date, default: Date.now }
});

export default model('User', UserSchema);

