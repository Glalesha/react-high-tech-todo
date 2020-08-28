import React from "react";
import { mount, ShallowWrapper } from "enzyme";
import Header from "./index";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../store/reducers/rootReducer";
import mockTodos from "../../mockData";

describe("Header", () => {
  test("On press 'enter' add todo", () => {
    const store = createStore(rootReducer);
    const wrapper = mount(
      <Provider store={store}>
        <Header todos={mockTodos} />
      </Provider>
    );

    const todoValue = "new todo";

    const input = wrapper.find(".new-todo");
    input.simulate("change", { target: { value: todoValue } });
    input.simulate("keypress", { key: "Enter" });

    const todos = store.getState().todos;

    expect(todos[todos.length - 1].title).toBe(todoValue);
  });
});
