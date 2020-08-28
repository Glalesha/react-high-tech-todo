import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Footer from "./index";
import rootReducer from "../../store/reducers/rootReducer";
import mockTodos from "../../mockData";

describe("Footer", () => {
  let store: any;

  const setup = (activeTodoCount: number) => {
    store = createStore(rootReducer, {
      todos: mockTodos,
      filters: {
        all: true,
        active: false,
        completed: false,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <Footer activeTodoCount={activeTodoCount} />
      </Provider>
    );

    return wrapper;
  };

  test("When active todo count = 0, item should be in plural form", () => {
    const wrapper = setup(0);
    const todoCount = wrapper.find(".todo-count");
    expect(todoCount.text()).toContain("items left");
  });

  test("When active todo count is more 1, item should be in plural form", () => {
    const wrapper = setup(2);
    const todoCount = wrapper.find(".todo-count");
    expect(todoCount.text()).toContain("items left");
  });

  test("When active todo count = 1, item should be in singular form", () => {
    const wrapper = setup(1);
    const todoCount = wrapper.find(".todo-count");
    expect(todoCount.text()).toContain("item left");
  });

  test("Clear completed on button click", () => {
    const wrapper = setup(1);
    const clearCompleted = wrapper.find(".clear-completed");
    clearCompleted.simulate("click");
    expect(
      store.getState().todos.filter((todo: any) => !todo.completed).length
    ).toBe(1);
  });
});
