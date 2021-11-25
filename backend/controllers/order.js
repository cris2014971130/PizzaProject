const registerOrder = async (req, res) => {
    if (!req.body.name || !req.body.description)
      return res.status(400).send({ message: "Incomplete data" });
  
    const existingRole = await role.findOne({ name: req.body.name });
    if (existingRole)
      return res.status(400).send({ message: "The role already exist" });
  
    const roleSchema = new role({
      name: req.body.name,
      description: req.body.description,
      dbStatus: true,
    });