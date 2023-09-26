import express from "express";
import * as searchController from "../controller/searchController.js";

const searchRouter = express.Router();

searchRouter.get("/", searchController.index);

export default searchRouter;
