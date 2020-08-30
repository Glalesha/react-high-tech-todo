import React from "react";
import { mount, ShallowWrapper } from "enzyme";
import Header from "./Header";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../store/reducers/rootReducer";
import mockTodos from "../../mockData";
import { AuthContext } from "../Auth/Auth";

describe("Header", () => {
  test("On press 'enter' add todo", () => {
    const user = {
      currentUser: {
        uid: "123",
      },
    };
    const store = createStore(rootReducer);
    const wrapper = mount(
      <Provider store={store}>
        <AuthContext.Provider value={user as any}>
          <Header todos={mockTodos} />
        </AuthContext.Provider>
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
