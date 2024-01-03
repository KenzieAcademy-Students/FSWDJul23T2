const errorHandler = (error, req, res, next) => {
  switch (error.name) {
    case "ValidationError":
      return res.status(422).json(error.errors);
    case "NotFoundError":
      return res.sendStatus(404);
    default:
      return res.sendStatus(500);
  }
};

export default errorHandler;
