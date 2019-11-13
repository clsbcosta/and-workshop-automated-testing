Feature: Get Todos

Scenario: Successfully get the list of Todos
  Given I request the list of todos
  Then I expect to recieve the list of todos