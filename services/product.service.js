const { ProductModel } = require("../models");

module.exports = {
  getAll: async () => {
    const rows = await ProductModel.find();

    return rows;
  },
  getBy: async (data) => {
    const { _id } = data;
    const rows = await ProductModel.findById(_id);

    return rows;
  },
  getByName: async (data) => {
    const { name } = data;
    const rows = await ProductModel.find({
      name: { $regex: name, $options: "i" },
      status: 1,
    });

    return rows;
  },
  getByStatus: async (data) => {
    const { status } = data;
    const rows = await ProductModel.find({
      status: status,
    });

    return rows;
  },
  create: async (data) => {
    const {
      user_id,
      name,
      description,
      price,
      discount,
      status,
      author,
      barcode,
      category,
      publisher,
      type,
    } = data;
    const score = 0;
    const createdAt = new Date();
    const updatedAt = new Date();
    const user_voted = [];

    // const product = new ProductModel({
    //   user_id,
    //   name,
    //   description,
    //   price,
    //   discount,
    //   status,
    //   score,
    //   author,
    //   barcode,
    //   category,
    //   publisher,
    //   type,
    //   createdAt,
    //   updatedAt,
    //   user_voted,
    // });

    // await product.save();

    // return {
    //   message: "CREATED",
    //   product: product,
    // };

    return message;
  },
  edit: async (data) => {
    const { _id, name, description, discount, user_id } = data;
    const updatedAt = new Date();
    const product = await ProductModel.findById(_id);

    if (product) {
      if (product.user_id == user_id) {
        product.name = name;
        product.description = description;
        product.discount = discount;
        product.updatedAt = updatedAt;

        await product.save();

        return {
          message: "UPDATED",
        };
      }
      return {
        message: "NOT OWNER",
      };
    }
    return {
      message: "NO RECORD",
    };
  },
  editScore: async (data) => {
    const { _id, score, user_id } = data;
    const updatedAt = new Date();

    if (score < 1 || score > 5) {
      return {
        message: "THE SCORE MUST BE BETWEEN 1-5",
      };
    }

    const product = await ProductModel.findById(_id);

    if (product) {
      if (product.user_id == user_id) {
        return {
          message: "CANNOT RATE YOUR OWN PRODUCT",
        };
      }
      for (let i = 0; i < product.user_voted.length; i++) {
        if (product.user_voted[i] == user_id) {
          return {
            message: "ONE USER CAN RATE EACH PRODUCT ONLY ONCE",
          };
        }
      }

      product.user_voted.push(user_id);
      product.score += score;
      product.updatedAt = updatedAt;

      await product.save();

      return {
        message: "UPDATED",
      };
    } else {
      return {
        message: "NO RECORD",
      };
    }
  },
  editStatus: async (data) => {
    const { _id, user_id, status } = data;
    const updatedAt = new Date();
    const product = await ProductModel.findById(_id);

    if (product) {
      if (product.user_id != user_id) {
        return {
          message: "YOU'RE NOT THE OWNER OF THIS PRODUCT",
        };
      }

      product.status = status;
      product.updatedAt = updatedAt;

      await product.save();

      return {
        message: "UPDATED",
      };
    } else {
      return {
        message: "NO RECORD",
      };
    }
  },
  delete: async (data) => {
    const { _id, user_id } = data;

    const product = await ProductModel.findById(_id);

    if (product) {
      if (product.user_id == user_id) {
        await ProductModel.deleteOne({ _id });

        return {
          message: "REMOVED",
        };
      } else {
        return {
          message: "NOT OWNER",
        };
      }
    } else {
      return {
        message: "NO RECORD",
      };
    }
  },
};
