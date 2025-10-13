import express from "express";
const router = express.Router();
import memberContraoller from "./controllers/member.controller";


router.get("/", memberContraoller.goHome);

router.get("/login", memberContraoller.getLogin);

router.get("/signup", memberContraoller.getSignup);

export default router;