export const errorMiddleware = (err, req, res, next) => {
  res.send({
    status: err.name,
    message: err.message,
    cause: err.cause,
  });
};
