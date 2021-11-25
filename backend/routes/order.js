import express from "express";
import order from "../controllers/order.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";
const router = express.Router();

router.get("/listOrder", auth, order.listOrder);
router.get("/findOrder/:_id", auth, order.findOrder);
router.post("/saveOrder", auth, order.saveOrder);
router.delete("/deleteOrder/:_id", auth, order.deleteOrder);
router.put("/updateStatusOrder", auth, order.updateStatusOrder);

export default router;