import { Request, Response } from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/member.service";

const restaurantContraoller: T = {};
restaurantContraoller.goHome = (req: Request, res: Response) => {
    try{
        res.send("Home Page");
    } catch (err){
        console.log("Error, goHome:", err);
    }
}

restaurantContraoller.getLogin = (req: Request, res: Response) => {
    try{
        res.send("Login Page");
    } catch (err){
        console.log("Error, getLogin:", err);
    }
}

restaurantContraoller.getSignup = (req: Request, res: Response) => {
    try{
        res.send("SignUp Page");
    } catch (err){
        console.log("Error, getSignup:", err);
    }
}

export default restaurantContraoller;