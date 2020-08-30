import React from "react";
import { mount } from "enzyme";
import Button from "./Button";

describe("Button", () => {
  test("Should render button", () => {
    const wrapper = mount(<Button />);
  });
});
