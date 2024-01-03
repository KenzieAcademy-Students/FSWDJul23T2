import Truck from "../models/truck.model";
import User from "../models/user.model";

export async function createFoodTruck(req, res, next) {
  const { name, yearEstablished, cuisineStyle } = req.body;
  try {
    const newTruck = await Truck.create({
      name,
      yearEstablished,
      cuisineStyle,
    });

    res.json(newTruck);
  } catch (error) {
    next(error);
  }
}

export async function addReviewToTruck(req, res, next) {
  const { id } = req.params;
  const { rating, reviewText, reviewedBy } = req.body;
  try {
    const userLeavingReview = await User.findById(reviewedBy);

    if (!userLeavingReview) return res.sendStatus(404);

    const reviewedTruck = await Truck.findByIdAndUpdate(
      id,
      {
        $push: {
          reviews: {
            rating,
            reviewText,
            reviewedBy,
          },
        },
      },
      { new: true, runValidators: true }
    );

    if (!reviewedTruck) return res.sendStatus(404);

    res.json(reviewedTruck);
  } catch (error) {
    next(error);
  }
}

export async function findAllFoodTrucks(req, res, next) {
  try {
    /**
     * We can use an object as the argument for `.populate()`.
     */
    const populateQuery = {
      path: "cuisineStyle",
      select: "style",
    };
    const allTrucks = await Truck.find().populate(populateQuery);

    res.json(allTrucks);
  } catch (error) {
    next(error);
  }
}

export async function deleteFoodTruckLike(req, res, next) {
  const { id } = req.params;
  const { userId } = req.query;
  try {
    await User.findByIdAndUpdate(userId, { $pull: { favoriteFoodTrucks: id } });
    await Truck.findByIdAndUpdate(id, { $pull: { favoritedBy: userId } });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}

export async function addFoodTruckLike(req, res, next) {
  const { id } = req.params;
  const { userId } = req.query;
  try {
    const userLikingTruck = await User.findById(userId);

    if (!userLikingTruck)
      return res.status(404).json({ error: "NotFoundError" });

    const truckLiked = await Truck.findByIdAndUpdate(
      id,
      {
        $addToSet: { favoritedBy: userId },
      },
      { new: true }
    );

    if (!truckLiked) return res.status(404).json({ error: "NotFoundError" });

    if (!userLikingTruck.favoriteFoodTrucks.includes(id)) {
      userLikingTruck.favoriteFoodTrucks.push(id);
      await userLikingTruck.save();
    }

    res.json(truckLiked);
  } catch (error) {
    next(error);
  }
}
