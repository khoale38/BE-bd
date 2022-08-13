import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid'
const ProfileModel = new mongoose.Schema({
  name: {
    type: String
  },
  date: {
    type: Date
  },
  age: {
    type: Number,
    default: 0
  },

  message: {
    type: String
  },
  image: {
    data: Buffer,
    contentType: String
  },
  id: {
    type: String,
    default: () => uuidv4()
  }
})

const Profile = mongoose.model('Profile', ProfileModel)

export default Profile
