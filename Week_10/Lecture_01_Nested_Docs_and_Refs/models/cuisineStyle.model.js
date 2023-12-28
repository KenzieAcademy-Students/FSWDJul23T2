import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const CuisineStyleSchema = new Schema({
  style: {
    type: String,
    required: true,
    minLength: 3,
    unique: true,
  },
  trucksWithStyle: [{ type: ObjectId, ref: "Truck" }],
});

const CuisineStyle = model("CuisineStyle", CuisineStyleSchema);

export default CuisineStyle;
