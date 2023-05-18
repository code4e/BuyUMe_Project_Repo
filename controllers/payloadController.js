const Add = require("../service/add");
const Subtract = require("../service/subtract");

module.exports.handleInventory = (req, res) => {
  const { payloadData } = req.body;

  try {
    let operations = [];

    //iterate over each item in payload and handle each operation

    // [{productId:123,quantity:10,operation:”add”},
    //     {productId:143,quantity:14,operation:”add”},
    //     {productId:193,quantity:17,operation:”subtract”}]
    payloadData.forEach((item) => {
      if (item.operation === "add") {
        let operation = Add(item);
        operations.push({ operation });
      } else if (item.operation === "subtract") {
        let operation = Subtract(item);
        operations.push({ operation });
      }
    });

    return res.status(200).json({
      message: "Operation completed",
      data: operations,
    });
  } catch (error) {
    res.status(400).json({
        message: "Oops! something went wrong",
        error: error
    });
  }
};
