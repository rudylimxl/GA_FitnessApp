const NotFoundError = () => {
  const err = new Error("Not found");
  err.statusCode = 404;
  return err;
};

export default NotFoundError;
