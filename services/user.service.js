const { UserModel } = require("../models");

module.exports = {
  getAll: async () => {
    const rows = await UserModel.find();

    return rows;
  },
  create: async (data) => {
    const { email, password, username, name } = data;
    const user = new UserModel({
      email,
      password,
      username,
      name,
    });

    await user.save();

    return {
      message: "CREATED",
      user_id: user._id,
    };
  },
  delete: async (data) => {
    const { _id } = data;
    const user = await UserModel.findById(_id);

    await UserModel.deleteOne({ _id });

    return {
      message: "REMOVED",
    };
  },
};
