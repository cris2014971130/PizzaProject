import order from "../models/order.js";

const saveOrder = async (req, res) => {
  if (!req.body.amount || !req.body.pizzaId)
    return res.status(400).send({ message: "Incomplete data" });

  const orderSchema = new order({
    userId: req.user._id,
    pizzaId: req.body.pizzaId,
    amount: req.body.amount,
    status: "Received",
    dbStatus: true,
  });
  const result = await orderSchema.save();
  return !result
    ? res.status(400).send({ message: "Failed to save order" })
    : res.status(200).send({ result });
};

const listOrder = async (req, res) => {
  const orderlist = await order.find();
  return orderlist.length == 0
    ? res.status(400).send({ message: "Empty order list" })
    : res.status(200).send({ orderlist });
};

const updateStatusOrder = async (req, res) => {
  if (!req.body.status || !req.body._id)
    return res.status(400).send({ message: "Incomplete data" });

  const orderUpdate = await order.findByIdAndUpdate(req.body._id, {
    status: req.body.status,
  });

  return !orderUpdate
    ? res.status(400).send({ message: "Error updating status" })
    : res.status(200).send({ message: "Status updated" });
};

export default { saveOrder, listOrder, updateStatusOrder};
