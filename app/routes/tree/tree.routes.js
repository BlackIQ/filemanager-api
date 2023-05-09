/*
    Routes name: User Data Routes
    Routes start: /api/user/user
*/

import express from "express";

import { Tree } from "$app/controllers/index.js";

const router = express.Router();

router.post("/", Tree.TREE);

export default router;
