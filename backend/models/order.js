import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {type: mongoose.Schema.ObjectId, ref: "users"},
  pizzaId: {type: mongoose.Schema.ObjectId, ref: "pizzas"},
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const role = mongoose.model("orders", orderSchema);

export default role;
