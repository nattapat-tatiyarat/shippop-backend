const { ProductService } = require("../services");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await ProductService.getAll(req.body);

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
  getBy: async (req, res, next) => {
    try {
      const result = await ProductService.getBy(req.body);

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
  getByName: async (req, res, next) => {
    try {
      const result = await ProductService.getByName(req.body);

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
  getByStatus: async (req, res, next) => {
    try {
      const result = await ProductService.getByStatus(req.body);

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const result = await ProductService.create(req.body);

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
  edit: async (req, res, next) => {
    try {
      const result = await ProductService.edit(req.body);

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
  editScore: async (req, res, next) => {
    try {
      const result = await ProductService.editScore(req.body);

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
  editStatus: async (req, res, next) => {
    try {
      const result = await ProductService.editStatus(req.body);

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const result = await ProductService.delete(req.body);

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },
};
