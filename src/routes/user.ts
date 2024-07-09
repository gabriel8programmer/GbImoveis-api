
import express, {Request, Response} from "express";

//get routes
const router = express.Router();

//routes here
router.get("/", (req: Request, res: Response)=> {
    res.send("Hello World!");
})

export default router;