const mongoose = require("mongoose");
const supertest = require("supertest");
const { config, app } = require("./config");

beforeEach(async () => {
  await config();
});

afterEach((done) => {
  mongoose.connection.close(() => done());
});

describe("test User functions", () => {
  test("get-all", async () => {
    const getAll = await supertest(app).post("/user/get-all");
    expect(getAll.status).toBe(200);
  });

  test("create & delete", async () => {
    const createUser = await supertest(app).post("/user/create").send({
      email: "shippop@hotmail.com",
      password: "p@assw0rd",
      username: "shippop2022",
      name: "Shippop Company",
    });
    const deleteUser = await supertest(app).post("/user/delete").send({
      _id: createUser.body.user_id,
    });
    expect(createUser.status).toBe(200);
    expect(deleteUser.status).toBe(200);
  });
});
