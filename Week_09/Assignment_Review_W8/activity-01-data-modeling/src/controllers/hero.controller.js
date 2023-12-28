import Hero from "../models/hero.model";

const getAllHeroesHandler = async (req, res) => {
  try {
    // your code here
  } catch (error) {
    res.sendStatus(500);
  }
};

const createHeroHandler = async (req, res) => {
  try {
    // your code here
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(422).json(error.errors);
    }

    res.sendStatus(500);
  }
};

const getHeroByIdHandler = async (req, res) => {
  try {
    // your code here
  } catch (error) {
    res.sendStatus(500);
  }
};

const updateHeroByIdHandler = async (req, res) => {
  try {
    // your code here
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(422).json(error.errors);
    }

    res.sendStatus(500);
  }
};

const deleteHeroHandler = async (req, res) => {
  try {
    // your code here
  } catch (error) {
    res.sendStatus(500);
  }
};

export default {
  getAllHeroesHandler,
  createHeroHandler,
  getHeroByIdHandler,
  updateHeroByIdHandler,
  deleteHeroHandler,
};
