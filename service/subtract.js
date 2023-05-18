const Payload = require("../models/payload");

module.exports.subtract = async (item) => {
  // {productId:123,quantity:10,operation:”add”}
  try {
    const dbItem = await Payload.findOne({
      productId: item.productId,
    });

    //if item exists, decrease the qty. Also check if the quantity to be decreased is in the inventory or not
    if (dbItem && dbItem.quantity >= item.quantity) {
      dbItem.quantity -= item.quantity;
      dbItem.save();
      return {
        productId: item["productId"],
        message: "Item sucessfully removed from the inventory",
      };
    } else {
      return "Item quantity is invalid to be removed";
    }
  } catch (error) {
    return {
      productId: null,
      message: "Error occured while removing item from the inventory",
    };
  }
};
