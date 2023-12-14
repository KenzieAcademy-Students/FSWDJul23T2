module.exports = (error, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = error.message
  res.locals.error = req.app.get('env') === 'development' ? error : {}
  if (error.name === 'NotFoundError') {
    return res.status(404).send({
      error: 'not found',
    })
  } else if (error.name === 'CastError') {
    return res.status(400).send({
      error: 'malformatted id',
    })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({
      error: error.message,
    })
  } else if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({
      error: 'invalid token',
    })
  }

  next(error)
}
