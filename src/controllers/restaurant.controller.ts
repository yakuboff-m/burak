import { Request, Response } from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantContraoller: T = {};
restaurantContraoller.goHome = (req: Request, res: Response) => {
    try{
        console.log('goHome');
        // Logic
        // Service Model
        // ...
        res.send("(GET)Admin-Home Page");
        // send | json | end | redirect | render
    } catch (err){
        console.log("Error, goHome:", err);
    }
}

restaurantContraoller.getLogin = (req: Request, res: Response) => {
    try{
        console.log('getLogin');
        res.send("(GET)Admin-Login Page");
    } catch (err){
        console.log("Error, getLogin:", err);
    }
}

restaurantContraoller.processLogin = (req: Request, res: Response) => {
    try{
        console.log('processLogin');
        res.send("(POST)Admin-Process-Login Page");
    } catch (err){
        console.log("Error, processLogin:", err);
    }
}

restaurantContraoller.getSignup = (req: Request, res: Response) => {
    try{
        console.log('getSignup');
        res.send("(GET)Admin-SignUp Page");
    } catch (err){
        console.log("Error, getSignup:", err);
    }
}

restaurantContraoller.processSignup = async (req: Request, res: Response) => {
    try{
        console.log('processSignup');
        console.log("body:",req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);

        res.send(result);
    } catch (err){
        console.log("Error, processSignup:", err);
        res.send(err);
    }
}

export default restaurantContraoller;