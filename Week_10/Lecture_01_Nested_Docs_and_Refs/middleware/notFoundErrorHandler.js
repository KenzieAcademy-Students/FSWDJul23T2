export default function notFoundErrorHandler(req, res, next) {
  res
    .status(404)
    .json({ name: "NotFoundError", error: `Cannot ${req.method} ${req.url}` });
}
