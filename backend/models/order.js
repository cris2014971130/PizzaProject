import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {type: mongoose.Schema.ObjectId, ref: "user"},
  pizzaId: {type: mongoose.Schema.ObjectId, ref: "pizza"},
  amount: Number,
  status: String,
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean
});

const role = mongoose.model("orders", orderSchema);

export default role;