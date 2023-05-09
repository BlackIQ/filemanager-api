import express from "express";

import Tree from "$app/routes/tree/tree.routes.js";

const router = express.Router();

router.use("/tree", Tree);

export default router;
