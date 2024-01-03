export default async function (error, req, res, next) {
  if (error.name !== "ValidationError") next(error);

  console.log("maybe?");
}
