const { UserService } = require("../services");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      console.log("getAll Controllers");
      const result = await UserService.getAll(req.body);

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const result = await UserService.create(req.body);

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const result = await UserService.delete(req.body);

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
};
