export default function validationErrorHandler(error, req, res, next) {
  if (!error.name === "ValidationError") return next(error);

  const errorFields = Object.keys(error.errors);
  const validationErrors = {};
  for (const key of errorFields) {
    validationErrors[key] =
      error.errors[key].properties?.message || error.errors[key];
  }
  res
    .status(422)
    .json({ message: "Invalid submission", errors: validationErrors });
}
