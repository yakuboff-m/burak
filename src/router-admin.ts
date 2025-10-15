import express from "express";
const routerAdmin = express.Router();
import restaurantContraoller from "./controllers/restaurant.controller";


routerAdmin.get("/", restaurantContraoller.goHome);

routerAdmin.get("/login", restaurantContraoller.getLogin);

routerAdmin.get("/signup", restaurantContraoller.getSignup);

export default routerAdmin;