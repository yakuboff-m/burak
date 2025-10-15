import express from "express";
const routerAdmin = express.Router();
import restaurantContraoller from "./controllers/restaurant.controller";

/** RESTAURANT **/ 
routerAdmin.get("/", restaurantContraoller.goHome);
routerAdmin
  .get("/login", restaurantContraoller.getLogin)
  .post("/login", restaurantContraoller.processLogin);
routerAdmin
  .get("/signup", restaurantContraoller.getSignup)
  .post("/signup", restaurantContraoller.processSignup);

/** PRODUCT **/ 

/** USER **/ 
export default routerAdmin;