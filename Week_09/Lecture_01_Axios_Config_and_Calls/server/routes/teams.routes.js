import { Router } from "express";
import Team from "../models/team.model";

const teamsRoutes = Router();

/**
 * This router handles requests with a URL starting with:
 * /api/teams
 */

teamsRoutes
  .route("/")
  // GET /api/teams - get and return a list of all teams
  .get(async (req, res) => {
    try {
      const allTeams = await Team.find();

      res.json(allTeams);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  // POST /api/teams - create a new team and return it
  .post(async (req, res) => {
    const {
      teamName,
      location,
      abbreviation,
      superBowlAppearances,
      isActive,
      yearEstablished,
    } = req.body;

    try {
      const newTeam = await Team.create({
        teamName,
        location,
        abbreviation,
        superBowlAppearances,
        isActive,
        yearEstablished,
      });

      res.status(201).json(newTeam);
    } catch (err) {
      if (err.name === "ValidationError") {
        const errors = {};

        for (let key of Object.keys(err.errors)) {
          errors[key] = err.errors[key].message;
        }

        res.status(422).json(errors);
      } else {
        res.status(400).json(err);
      }
    }
  });

teamsRoutes
  .route("/:abbrev")
  // GET /api/teams/:abbrev - get and return a single team by its id
  .get(async (req, res) => {
    const { abbrev } = req.params;
    try {
      const singleTeam = await Team.findOne({
        abbreviation: abbrev.toUpperCase(),
      });

      if (singleTeam === null) {
        return res.sendStatus(404);
      }

      res.json(singleTeam);
    } catch (error) {
      res.sendStatus(500);
    }
  })
  // PUT /api/teams/:abbrev - update and return a single team
  .put(async (req, res) => {
    const { abbrev } = req.params;
    const {
      teamName,
      location,
      abbreviation,
      superBowlAppearances,
      isActive,
      yearEstablished,
    } = req.body;

    try {
      const updatedTeam = await Team.findOneAndUpdate(
        { abbreviation: abbrev.toUpperCase() },
        {
          teamName,
          location,
          abbreviation,
          superBowlAppearances,
          isActive,
          yearEstablished,
        },
        { new: true, runValidators: true }
      );

      if (updatedTeam === null) {
        return res.sendStatus(404);
      }

      res.json(updatedTeam);
    } catch (error) {
      if (error.name === "ValidationError") {
        const errors = {};

        for (let key of Object.keys(error.errors)) {
          errors[key] = error.errors[key].message;
        }

        res.status(422).json(errors);
      } else {
        res.status(400).json(error);
      }
    }
  })
  // DELETE /api/teams/:abbrev - delete a single team by its id
  .delete(async (req, res) => {
    const { abbrev } = req.params;

    try {
      const deletedTeam = await Team.findOneAndDelete({
        abbreviation: abbrev.toUpperCase(),
      });

      if (deletedTeam === null) {
        return res.sendStatus(404);
      }

      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  });

export default teamsRoutes;
