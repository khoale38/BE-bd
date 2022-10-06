import Profile from "../models/profile.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage }).single("image");

export const postProfile = async (req, res, next) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        res.status(400).send(err);
      } else {
        const newProfile = new Profile({
          name: req.body.name,
          date: req.body.date,
          message: req.body.message,
          age: req.body.age,
          image: req.body.image,
          phone: req.body.phone,
          mail: req.body.mail,
          id:req.body.id,
        });
        try {
          await newProfile.save();
          res.send({ status: "200", message: "Create Profile Successful" });
        } catch (error) {
          res.status(400).send(error);
        }
      }
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getProfileWithID = async (req, res, next) => {
  const { id } = req.params;
  try {
    const foundUser = await Profile.find({ id: id });
    console.log(foundUser);
    if (foundUser.length == 0) {
      res.send({ status: "400", message: "User not found" });
      return;
    } else res.send(foundUser);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
