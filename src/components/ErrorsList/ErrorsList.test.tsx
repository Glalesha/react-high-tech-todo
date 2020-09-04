import React from "react";
import { mount } from "enzyme";
import ErrorsList from "./ErrorsList";
import rootReducer from "../../store/reducers/rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

describe("ErrorsList", () => {
  let wrapper: any;
  let store: any;
  beforeEach(() => {
    const testErrorsMessages = ["first error", "second error"];
    store = createStore(rootReducer, {} as any);
    wrapper = mount(
      <Provider store={store}>
        <ErrorsList errorsMessages={testErrorsMessages} />
      </Provider>
    );
  });

  test("Should render all errors", () => {
    const errorsMessageList = wrapper
      .find("[data-test='error-message']")
      .hostNodes();
    expect(errorsMessageList.length).toBe(2);
  });

  test("Should render errors with their text", () => {
    const errorMessage = wrapper
      .find("[data-test='error-message']")
      .hostNodes()
      .at(1);

    expect(errorMessage.text()).toBe("second error");
  });

  test("Clear Errors on click", () => {
    const clearErrorsButton = wrapper.find("[data-test='clear-errors']");
    clearErrorsButton.simulate("click");

    expect(store.getState().errors.length).toBe(0);
  });
});
