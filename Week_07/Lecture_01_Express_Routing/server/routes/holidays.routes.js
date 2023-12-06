import { Router } from "express";
import holidays from "../holidays";

const holidaysRouter = Router();

// All Requests' URL's start with: /api/holidays

// /api/holidays
holidaysRouter
  .route("/")
  .get((req, res) => {
    /**
     * In order to respond to the request, you must use one
     * of several methods from the response object:
     * - .send()
     * - .sendStatus() - accepts the numerical HTTP Response Status Code you wish to respond with
     * - .json() - this will be our bread and butter; it accepts any JSON values (i.e. objects and arrays)
     */
    if (holidays.length === 0) {
      return res.status(404).json({ message: "No holidays found" });
    }

    res.json(holidays);
  })
  .post((req, res) => {
    // POST (and often PUT) requests will general require us to
    // extract data from the request body in order to create
    // what needs to be created.
    const { holidayName, date, description } = req.body;

    if (!holidayName || !date || !description) {
      return res.status(422).json({ message: "All fields required." });
    }

    const newHoliday = { holidayName, date, description };
    newHoliday.id =
      holidays.length === 0 ? 1 : holidays[holidays.length - 1].id + 1;

    holidays.push(newHoliday);

    res.status(201).json(newHoliday);
  });

// /api/holidays/:holidayId
holidaysRouter
  .route("/:holidayId")
  .get((req, res) => {
    /**
     * Much like with the POST request and req.body, many
     * request handlers will need to access route parameters.
     * These are the portions of the URL preceded by a :
     *
     * They are variable portions of the URL, and we can access
     * them through the request object's .params property.
     *
     * Route parameters always take on a string value, so if you need it
     * to be a number, you'll need to either cast it as a number, or if
     * making comparisons, use less strict comparisons.
     */
    const { holidayId } = req.params;

    if (isNaN(holidayId)) {
      return res.sendStatus(404);
    }

    const holiday = holidays.find((hol) => hol.id === Number(holidayId));

    if (!holiday) {
      return res.status(404).json({ message: "Holiday not found" });
    } else {
      return res.json(holiday);
    }
  })
  .put((req, res) => {})
  .delete((req, res) => {});

// // /api/holidays/:holidayId/cuisine
// holidaysRouter.route("/:holidayId/cuisine").get().post();

// // /api/holidays/:holidayId/music
// holidaysRouter.route("/:holidayId/music").get().post();

export default holidaysRouter;
