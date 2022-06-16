const mongoose = require("mongoose");
const supertest = require("supertest");
const { config, app } = require("./config");

jest.setTimeout(30000);

beforeEach(async () => {
  await config();
});

afterEach((done) => {
  mongoose.connection.close(() => done());
});

describe("test Product functions", () => {
  test("get-all", async () => {
    const getAll = await supertest(app).post("/product/get-all");
    expect(getAll.status).toBe(200);
  });

  test("get-by", async () => {
    const createProduct = await supertest(app).post("/product/create").send({
      user_id: "62aa2203201a046daf6c8dfc",
      name: "Shippop",
      description: "Shippop Shippop Shippop Shippop Shippop",
      price: 1000,
      discount: 500,
      status: 1,
      author: "Shippop",
      barcode: "1212312121",
      category: "หนังสือ",
      publisher: "Shippop",
      type: "Book",
    });
    const getBy = await supertest(app).post("/product/get-by").send({
      _id: createProduct.body.product._id,
    });
    const deleteProduct = await supertest(app).post("/product/delete").send({
      _id: createProduct.body.product._id,
      user_id: createProduct.body.product.user_id,
    });
    expect(createProduct.status).toBe(200);
    expect(getBy.status).toBe(200);
    expect(deleteProduct.status).toBe(200);
  });

  test("get-by-name", async () => {
    const createProduct = await supertest(app).post("/product/create").send({
      user_id: "62aa2203201a046daf6c8dfc",
      name: "Shippop",
      description: "Shippop Shippop Shippop Shippop Shippop",
      price: 1000,
      discount: 500,
      status: 1,
      author: "Shippop",
      barcode: "1212312121",
      category: "หนังสือ",
      publisher: "Shippop",
      type: "Book",
    });
    const getByName = await supertest(app).post("/product/get-by-name").send({
      name: createProduct.body.product.name,
    });
    const deleteProduct = await supertest(app).post("/product/delete").send({
      _id: createProduct.body.product._id,
      user_id: createProduct.body.product.user_id,
    });
    expect(createProduct.status).toBe(200);
    expect(getByName.status).toBe(200);
    expect(deleteProduct.status).toBe(200);
  });

  test("get-by-status", async () => {
    const createProduct = await supertest(app).post("/product/create").send({
      user_id: "62aa2203201a046daf6c8dfc",
      name: "Shippop",
      description: "Shippop Shippop Shippop Shippop Shippop",
      price: 1000,
      discount: 500,
      status: 1,
      author: "Shippop",
      barcode: "1212312121",
      category: "หนังสือ",
      publisher: "Shippop",
      type: "Book",
    });
    const getByStatus = await supertest(app)
      .post("/product/get-by-status")
      .send({
        status: 1,
      });
    const deleteProduct = await supertest(app).post("/product/delete").send({
      _id: createProduct.body.product._id,
      user_id: createProduct.body.product.user_id,
    });
    expect(createProduct.status).toBe(200);
    expect(getByStatus.status).toBe(200);
    expect(deleteProduct.status).toBe(200);
  });

  test("create & delete", async () => {
    const createProduct = await supertest(app).post("/product/create").send({
      user_id: "62aa2203201a046daf6c8dfc",
      name: "Shippop",
      description: "Shippop Shippop Shippop Shippop Shippop",
      price: 1000,
      discount: 500,
      status: 1,
      author: "Shippop",
      barcode: "1212312121",
      category: "หนังสือ",
      publisher: "Shippop",
      type: "Book",
    });
    const deleteProduct = await supertest(app).post("/product/delete").send({
      _id: createProduct.body.product._id,
      user_id: createProduct.body.product.user_id,
    });
    expect(createProduct.status).toBe(200);
    expect(deleteProduct.status).toBe(200);
  });

  test("edit", async () => {
    const createProduct = await supertest(app).post("/product/create").send({
      user_id: "62aa2203201a046daf6c8dfc",
      name: "Shippop",
      description: "Shippop Shippop Shippop Shippop Shippop",
      price: 1000,
      discount: 500,
      status: 1,
      author: "Shippop",
      barcode: "1212312121",
      category: "หนังสือ",
      publisher: "Shippop",
      type: "Book",
    });
    const editProduct = await supertest(app).post("/product/edit").send({
      _id: createProduct.body.product._id,
      name: "ShippopShippop",
      description: "ShippopShippopShippop",
      price: 99,
      user_id: createProduct.body.product.user_id,
    });
    const deleteProduct = await supertest(app).post("/product/delete").send({
      _id: createProduct.body.product._id,
      user_id: createProduct.body.product.user_id,
    });
    expect(createProduct.status).toBe(200);
    expect(editProduct.status).toBe(200);
    expect(deleteProduct.status).toBe(200);
  });

  test("edit-score", async () => {
    const createProduct = await supertest(app).post("/product/create").send({
      user_id: "62aa2203201a046daf6c8dfc",
      name: "Shippop",
      description: "Shippop Shippop Shippop Shippop Shippop",
      price: 1000,
      discount: 500,
      status: 1,
      author: "Shippop",
      barcode: "1212312121",
      category: "หนังสือ",
      publisher: "Shippop",
      type: "Book",
    });
    const editProduct = await supertest(app).post("/product/edit-score").send({
      _id: createProduct.body.product._id,
      user_id: createProduct.body.product.user_id,
      score: 5,
    });
    const deleteProduct = await supertest(app).post("/product/delete").send({
      _id: createProduct.body.product._id,
      user_id: createProduct.body.product.user_id,
    });
    expect(createProduct.status).toBe(200);
    expect(editProduct.body.message).toBe("CANNOT RATE YOUR OWN PRODUCT");
    expect(deleteProduct.status).toBe(200);
  });

  test("edit-status", async () => {
    const createProduct = await supertest(app).post("/product/create").send({
      user_id: "62aa2203201a046daf6c8dfc",
      name: "Shippop",
      description: "Shippop Shippop Shippop Shippop Shippop",
      price: 1000,
      discount: 500,
      status: 1,
      author: "Shippop",
      barcode: "1212312121",
      category: "หนังสือ",
      publisher: "Shippop",
      type: "Book",
    });
    const editProduct = await supertest(app).post("/product/edit-status").send({
      _id: createProduct.body.product._id,
      user_id: createProduct.body.product.user_id,
      status: 0,
    });
    const deleteProduct = await supertest(app).post("/product/delete").send({
      _id: createProduct.body.product._id,
      user_id: createProduct.body.product.user_id,
    });
    expect(createProduct.status).toBe(200);
    expect(editProduct.status).toBe(200);
    expect(deleteProduct.status).toBe(200);
  });
});
