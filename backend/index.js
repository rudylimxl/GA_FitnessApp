import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import connectToDatabase from "./src/config/mongoDB.js";
import postRouter from "./src/routes/postRouter.js";
import userRouter from "./src/routes/userRouter.js";
import searchRouter from "./src/routes/searchRouter.js";
import passport from "passport";
import session from "express-session";
import initializePassport from "./src/config/passport-config.js";
import authRouter from "./src/routes/authRouter.js";

const app = express();
connectToDatabase();
initializePassport(passport);

const checkAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(401).send("Please login first");
  }
  next();
};

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SECRET_KEY,
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 10000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/", authRouter);
// app.use("/users", checkAuthenticated);
// app.use("/posts", checkAuthenticated);
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/search", searchRouter);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    status: err.statusCode,
    message: err.message,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
