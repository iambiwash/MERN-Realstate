import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F180867%2Fprofile-circle&psig=AOvVaw1wVENpDs4it4WmGdrhxsfz&ust=1716516967748000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjDqqjaooYDFQAAAAAdAAAAABAE",
    },
  },
  { timestamps: true }
);

const User = Mongoose.model("User", userSchema);

export default User;
