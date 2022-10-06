import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
const ProfileModel = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: Date,
  },
  phone: {
    type: String,
  },
  mail: {
    type: String,
  },

  message: {
    type: String,
  },
  image: {
    type: String,
  },
  id: {
    type: String,
  
  },
});

const Profile = mongoose.model("Profile", ProfileModel);

export default Profile;
