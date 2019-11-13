const MockModel = require("jest-mongoose-mock"); //a mock implementation for the database
jest.mock("./../models/todo", () => new MockModel()); //implement the mock
//the next two are loaded in order to run the tests and measure the results
const Todo = require("../models/todo");
const get_todos = require("./get_todos");

describe(" test suite that gets todos", () => {
  let req, res, next;
  beforeEach(() => {
    jest.clearAllMocks(); //always reset mocks if being used
    req = { body: {} };
    res = { json: jest.fn() }; //this function is not accessible as it is a part of the response object
    next = {};
  });
  test("and makes sure that mongoose has been called", async () => {
    await get_todos(req, res, next);
    expect(Todo.find.mock.calls.length).toBe(1);
    expect(res.json.mock.calls.length).toBe(1);
  });
});
