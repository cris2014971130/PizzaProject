import express from "express";
import pizza from "../controllers/pizza.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";
const router = express.Router();

router.post("/registerPizza", auth, pizza.registerPizza);
router.get("/listPizza", auth, pizza.listPizza);
router.get("/findPizza/:_id", auth, pizza.findPizza);
router.put("/updatePizza", auth, admin, pizza.updatePizza);
router.delete("/deletePizza/:_id", auth, admin, pizza.deletePizza);

export default router;