import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});

/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));
// app.use((req, res, next) => {
//     console.log(`${req.method}, ${req.url} \n`);
//     next();
// });

/** 2-SESSIONS **/
app.use(
  session({
    secret: String(process.env.MONGO_URL),
    cookie: {
      maxAge: 1000 * 60 * 60 * 3, // 3 hrs
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);

/** 2-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 2-ROUTERS **/
app.use("/admin", routerAdmin); // BSSR: ejs (admin)
app.use("/", router); //SPA: REACT(as REST api) -> for users

export default app; // module.exports = app;
