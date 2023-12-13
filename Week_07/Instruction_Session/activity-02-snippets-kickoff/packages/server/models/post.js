import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      maxlength: 120,
    },
    author: {
      type: ObjectId,
      ref: "User",
    },
    created: {
      type: Date,
      default: Date.now,
    },
    likes: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        text: {
          type: String,
          required: true,
          maxlength: 120,
        },
        author: { type: ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
