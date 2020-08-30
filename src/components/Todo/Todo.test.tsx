import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../store/reducers/rootReducer";
import Todo from "./Todo";
import mockTodos from "../../mockData";
import { Todo as TodoType, Todos } from "../../types/index";

describe("Todo", () => {
  let wrapper: any;
  let store: any;
  const todoId = 1;
  const findTodoById = (Todos: Todos): TodoType => {
    return Todos.find((todo: TodoType) => todo.id === todoId)!;
  };

  describe("test state changes", () => {
    beforeEach(() => {
      store = createStore(rootReducer, {
        todos: mockTodos,
      } as any);
      wrapper = mount(
        <Provider store={store}>
          <Todo todo={findTodoById(mockTodos)} />
        </Provider>
      );
    });

    test("On toggle change completed", () => {
      const toggle = wrapper.find(".toggle");
      toggle.simulate("change");

      expect(findTodoById(store.getState().todos).completed).toBe(
        !findTodoById(mockTodos).completed
      );
    });

    test("On click destroy delete todo", () => {
      const destroy = wrapper.find(".destroy");
      destroy.simulate("click");

      expect(findTodoById(store.getState().todos)).toBeUndefined();
    });

    test("On click destroy delete only one todo", () => {
      const destroy = wrapper.find(".destroy");
      destroy.simulate("click");

      expect(store.getState().todos.length).toBe(mockTodos.length - 1);
    });
  });

  describe("Test render", () => {
    const setup = (completed: boolean) => {
      const store = createStore(rootReducer, {
        todos: mockTodos,
      } as any);
      const wrapper = mount(
        <Provider store={store}>
          <Todo todo={{ ...mockTodos[0], completed }} />
        </Provider>
      );

      return wrapper;
    };

    test("On completed todo has class completed", () => {
      const wrapper = setup(true);
      const todoLi = wrapper.find("li");
      expect(todoLi.hasClass("completed")).toBeTruthy();
    });

    test("On active todo doesn't have class completed", () => {
      const wrapper = setup(false);
      const todoLi = wrapper.find("li");
      expect(todoLi.hasClass("completed")).toBeFalsy();
    });
  });
});
