import React from "react";
import { mount } from "enzyme";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "../Auth/Auth";
import { BrowserRouter } from "react-router-dom";

describe("PrivateRoute", () => {
  test("Should render test component", () => {
    const user = {
      currentUser: {
        uid: "123",
      },
    };
    const testComponent = () => <div id="test-component"></div>;
    let wrapper: any;
    wrapper = mount(
      <BrowserRouter>
        <AuthContext.Provider value={user as any}>
          <PrivateRoute component={testComponent} />
        </AuthContext.Provider>
      </BrowserRouter>
    )!;

    expect(wrapper.find(testComponent)).toHaveLength(1);
  });

  test("Should redirect", () => {
    const user = {
      currentUser: null,
    };
    const testComponent = () => <div id="test-component"></div>;
    const wrapper = mount(
      <BrowserRouter>
        <AuthContext.Provider value={user as any}>
          <PrivateRoute component={testComponent} />
        </AuthContext.Provider>
      </BrowserRouter>
    ) as any;

    expect(wrapper.find("Router").prop("history").location.pathname).toEqual(
      "/login"
    );
  });
});
