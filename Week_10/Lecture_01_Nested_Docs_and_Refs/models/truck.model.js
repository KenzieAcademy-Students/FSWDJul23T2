import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const TruckSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      index: true,
    },
    yearEstablished: {
      type: Number,
      min: 1936,
    },
    /**
     * Nested Object Reference to a document in
     * the CuisineStyles collection
     */
    cuisineStyle: {
      required: true,
      type: ObjectId,
      ref: "CuisineStyle",
    },
    /**
     * The menuItems property is an array of nested
     * documents
     */
    menuItems: [
      {
        itemName: {
          type: String,
          required: true,
          minLength: 3,
          index: true,
        },
        price: {
          type: Number,
          required: true,
          min: 0,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    /**
     * Reviews is an array of nested documents
     */
    reviews: [
      {
        rating: {
          type: Number,
          min: 1,
          max: 5,
        },
        reviewText: {
          type: String,
          required: false,
        },
        reviewedBy: {
          type: ObjectId,
          ref: "User",
          validate: {
            validator: function (value) {
              const truckModel = model("Truck");
              const docId = this._id;

              truckModel
                .findOne({ "reviews.reviewedBy": value })
                .then(function (truck) {
                  if (!truck) throw "no";
                  if (truck.reviews.some((review) => review._id === docId))
                    throw "no";

                  console.log(truck);
                });
            },
            message: "User has already left a review.",
          },
        },
      },
    ],
    favoritedBy: [{ type: ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Truck = model("Truck", TruckSchema);

export default Truck;
