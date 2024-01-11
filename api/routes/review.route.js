import express  from "express";
import {
    createReview,
    getReviews,
    deleteReview,
} from "../controller/review.controller.js"

const router = express.Router();


router.post("/", createReview)
router.get("/:gigId", getReviews)
router.delete("/test", deleteReview)

export default router;