import { Router } from "express";
import holidays from "../holidays";

const holidaysRouter = Router();

// All Requests' URL's start with: /api/holidays

// /api/holidays
holidaysRouter
  .route("/")
  .get((req, res) => {
    try {
      if (holidays.length === 0) {
        return res.status(404).json({ message: "No holidays found" });
      }

      res.json(holidays);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Unhandled server error" });
    }
  })
  .post((req, res) => {
    try {
      const { holidayName, date, description } = req.body;

      if (!holidayName || !date || !description) {
        return res.status(422).json({ message: "All fields required." });
      }

      const newHoliday = { holidayName, date, description };
      newHoliday.id =
        holidays.length === 0 ? 1 : holidays[holidays.length - 1].id + 1;

      holidays.push(newHoliday);

      res.status(201).json(newHoliday);
    } catch (error) {
      res.status(500).json({ message: "Unhandled server error" });
    }
  });

// /api/holidays/:holidayId
holidaysRouter
  .route("/:holidayId")
  .get((req, res) => {
    try {
      const { holidayId } = req.params;

      if (isNaN(holidayId)) {
        return res.status(400).json({ message: "Invalid holiday ID" });
      }

      const holiday = holidays.find((hol) => hol.id === Number(holidayId));

      if (!holiday) {
        return res.status(404).json({ message: "Holiday not found" });
      } else {
        return res.json(holiday);
      }
    } catch (error) {
      res.status(500).json({ message: "Unhandled server error" });
    }
  })
  .put((req, res) => {
    try {
      const { holidayId } = req.params;
      const { holidayName, date, description } = req.body;

      if (isNaN(holidayId)) {
        return res.status(400).json({ message: "Invalid holiday ID" });
      }

      const holidayToUpdate = holidays.find(
        (holiday) => holiday.id === Number(holidayId)
      );

      if (!holidayToUpdate) {
        return res.status(404).json({ message: "Holiday not found" });
      }

      if (!holidayName || !date || !description) {
        return res.status(422).json({ message: "All fields required." });
      }

      holidayToUpdate.holidayName = holidayName;
      holidayToUpdate.date = date;
      holidayToUpdate.description = description;

      res.json(holidayToUpdate);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Unhandled server error" });
    }
  })
  .delete((req, res) => {
    try {
      const { holidayId } = req.params;

      if (isNaN(holidayId)) {
        return res.status(400).json({ message: "Invalid holiday ID" });
      }

      const deleteIndex = holidays.indexOf(
        holidays.find((holiday) => holiday.id === Number(holidayId))
      );

      if (deleteIndex < 0) {
        return res.status(404).json({ message: "Holiday not found" });
      }

      const deletedHoliday = holidays.splice(deleteIndex, 1)[0];

      res.json(deletedHoliday);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Unhandled server error" });
    }
  });

// // /api/holidays/:holidayId/cuisine
// holidaysRouter.route("/:holidayId/cuisine").get().post();

// // /api/holidays/:holidayId/music
// holidaysRouter.route("/:holidayId/music").get().post();

export default holidaysRouter;
