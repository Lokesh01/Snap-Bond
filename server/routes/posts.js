import express from "express";
import { login } from "../controllers/auth.js";
import { verifyToken } from "../middleware/auth.js";
import { getFeedPosts, getUserPosts, likePosts } from "../controllers/posts.js";

const router = express.Router();

/* Read */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* Update */
router.patch("/:id/like", verifyToken, likePosts);

export default router;
