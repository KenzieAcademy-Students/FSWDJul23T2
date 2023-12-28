import { Schema, model } from "mongoose";

const HeroSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  alias: {
    type: String,
    default: "Unknown",
  },
  isRetired: {
    type: Boolean,
    required: true,
  },
  age: {
    type: Number,
    require: true,
    min: 18,
  },
});

const Hero = model("Hero", HeroSchema);
export default Hero;
