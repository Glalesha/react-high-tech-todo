import React from "react";
import { mount } from "enzyme";
import Filters from "./index";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../store/reducers/rootReducer";

describe("Filters", () => {
  let wrapper: any;
  let store: any;

  beforeEach(() => {
    store = createStore(rootReducer);
    wrapper = mount(
      <Provider store={store}>
        <Filters />
      </Provider>
    );
  });

  test("Click change filter on all", () => {
    const filterLink = wrapper.find("[data-test='all']");
    filterLink.simulate("click");
    expect(store.getState().filters.all).toBeTruthy();
  });

  test("Click change filter on active", () => {
    const filterLink = wrapper.find("[data-test='active']");
    filterLink.simulate("click");
    expect(store.getState().filters.active).toBeTruthy();
  });

  test("Click change filter on completed", () => {
    const filterLink = wrapper.find("[data-test='completed']");
    filterLink.simulate("click");
    expect(store.getState().filters.completed).toBeTruthy();
  });
});
