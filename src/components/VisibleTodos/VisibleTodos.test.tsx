import React from "react";
import { mount } from "enzyme";
import VisibleTodos from "./index";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../store/reducers/rootReducer";
import mockTodos from "../../mockData";
import Todo from "../Todo/Todo";

describe("VisibleTodos", () => {
  const setup = (filters: any) => {
    const initState = {
      todos: mockTodos,
      filters,
    };
    const store = createStore(rootReducer, initState as any);
    const wrapper = mount(
      <Provider store={store}>
        <VisibleTodos todos={initState.todos} />
      </Provider>
    );

    return wrapper;
  };

  test("renders all todos", () => {
    const wrapper = setup({ all: true, active: false, completed: false });
    const todosList = wrapper.find(Todo);
    expect(todosList.length).toBe(4);
  });

  test("renders active todos", () => {
    const wrapper = setup({ all: false, active: true, completed: false });
    const todosList = wrapper.find(Todo);
    expect(todosList.length).toBe(1);
  });

  test("renders completed todos", () => {
    const wrapper = setup({ all: false, active: false, completed: true });
    const todosList = wrapper.find(Todo);
    expect(todosList.length).toBe(3);
  });
});
