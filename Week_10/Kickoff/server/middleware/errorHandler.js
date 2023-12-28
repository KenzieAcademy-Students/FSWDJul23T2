export default function errorHandler(error, req, res, next) {
  res.status(500).json({ message: "Unhandled Server Error" });
}
