import express from "express";
import order from "../controllers/order.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";
const router = express.Router();

router.get("/listOrder", auth, order.listOrder);
router.post("/saveOrder", auth, order.saveOrder);
router.put("/updateStatusOrder", auth, admin, order.updateStatusOrder);

export default router;