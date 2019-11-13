const jestCucumber = require("jest-cucumber");
const MockModel = require("jest-mongoose-mock"); //a mock implementation for the database
jest.mock(`${__dirname}/../../../src/models/todo`, () => new MockModel()); //implement the mock
//the next two are loaded in order to run the tests and measure the results
const Todo = require(`${__dirname}/../../../src/models/todo`);
const get_todos = require(`${__dirname}/../../../src/routes/get_todos`);

const getTodoFeature = jestCucumber.loadFeature(
  `${__dirname}/../feature/get_todos.feature`
);

jestCucumber.defineFeature(getTodoFeature, test => {
  let req, res, next;
  jest.clearAllMocks(); //always reset mocks if being used
  req = { body: {} };
  res = { json: jest.fn() }; //this function is not accessible as it is a part of the response object
  next = {};
  test("Successfully get the list of Todos", ({ given, then }) => {
    given("I request the list of todos", async () => {
      await get_todos(req, res, next);
    });
    then("I expect to recieve the list of todos", () => {
      expect(Todo.find.mock.calls.length).toBe(1);
      expect(res.json.mock.calls.length).toBe(1);
    });
  });
});
