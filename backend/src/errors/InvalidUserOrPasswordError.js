const InvalidUserOrPasswordError = () => {
  const err = new Error("Invalid Username or Password");
  err.statusCode = 404;
  return err;
};

export default InvalidUserOrPasswordError;
