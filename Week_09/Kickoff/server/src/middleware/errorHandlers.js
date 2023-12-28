export function validationErrorHandler(error, req, res, next) {
  if (error.name !== "ValidationError") return next(error);

  const keys = Object.keys(error.errors);
  const errors = keys.reduce((errors, key) => {
    errors[key] = error.errors[key].properties.message;

    return errors;
  }, {});

  return res.status(422).json({ message: "Validation Error", errors });
}

export function unhandledErrorHandler(error, req, res, next) {
  return res.status(500).json({ message: "Unhandled Server Error" });
}

export function notFoundErrorHandler(error, req, res, next) {
  if (error.name !== "NotFoundError") return next(error);

  return res.status(404).json({ message: "Resource not found." });
}
