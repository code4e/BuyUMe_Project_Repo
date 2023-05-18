const Payload = require("../models/payload");

module.exports.add = async (item) => {
  // {productId:123,quantity:10,operation:”add”}

  try {
    const dbItem = await Payload.findOne({
      productId: item.productId,
    });

    //if item exists, increase the qty
    if (dbItem) {
      dbItem.quantity += item.quantity;
      dbItem.save();
    }

    //else create new item
    else {
      const newItem = Payload.create({
        ...item,
      });
    }

    return {
        productId: item["productId"],
        message: 'Item sucessfully added to the inventory'
    };
  } catch (error) {
    return 
    {
        productId: null
        message: 'Error occured while adding item to the inventory'
    }
  }
};
