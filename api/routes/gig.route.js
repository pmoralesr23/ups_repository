import express  from "express";
import {
    createGig,
    deleteGig,
    getGig,
    getGigs,
    updateGigPrivacy
} from "../controller/gig.controller.js"
import {verifyToken} from "../middleware/jwt.js"

const router = express.Router();

router.post("/", createGig);
router.delete("/:id", deleteGig);
router.get("/single/:id", getGig);
router.get("/",  getGigs);
router.patch("/:id", updateGigPrivacy)

export default router;