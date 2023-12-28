import CuisineStyle from "../models/cuisineStyle.model";

export async function findAllCuisineStyles(req, res, next) {
  try {
    const allStyles = await CuisineStyle.find().select("style");

    res.json(allStyles);
  } catch (error) {
    next(error);
  }
}

export async function createCuisineStyle(req, res, next) {
  try {
    const { style } = req.body;
    await CuisineStyle.create({ style });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}
