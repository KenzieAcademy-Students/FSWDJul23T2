import { isCelebrateError } from "celebrate";

export function validationErrorHandler(err, req, res, next) {
  if (!isCelebrateError(err)) return next(err);
  console.log(err);

  const errorBody = err.details.get("body") || err.details.get("params");

  const errors = {};

  for (let error of errorBody.details) {
    errors[error.path[0]] = error.message;
  }

  return res.status(422).json(errors);
}
