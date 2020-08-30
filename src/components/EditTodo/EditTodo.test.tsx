import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import EditTodo from "./EditTodo";
import { mount } from "enzyme";
import rootReducer from "../../store/reducers/rootReducer";

describe("EditTodo", () => {
  test("On press 'enter' change todo title", async () => {
    const todo = {
      title: "todo #1",
      completed: false,
      id: 1000,
      userId: "123",
    };
    const store = createStore(rootReducer, { todos: [todo] } as any);
    const wrapper = mount(
      <Provider store={store}>
        <EditTodo todo={todo} resetLiClassName={() => {}} />
      </Provider>
    );

    const newValue = "new todo";

    const input = wrapper.find(".edit");

    input.simulate("change", { target: { value: newValue } });
    input.simulate("keypress", { key: "Enter" });

    expect(store.getState().todos[0].title).toBe(newValue);
  });
});
