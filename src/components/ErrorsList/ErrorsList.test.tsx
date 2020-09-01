import React from "react";
import { mount } from "enzyme";
import ErrorsList from "./ErrorsList";

describe("ErrorsList", () => {
  test("Should render all errors", () => {
    const testErrorsMessages = ["first error", "second error"];
    const wrapper = mount(<ErrorsList errorsMessages={testErrorsMessages} />);

    const errorsMessageList = wrapper
      .find("[data-test='error-message']")
      .hostNodes();
    expect(errorsMessageList.length).toBe(2);
  });

  test("Should render errors with their text", () => {
    const testErrorsMessages = ["first error", "second error"];
    const wrapper = mount(<ErrorsList errorsMessages={testErrorsMessages} />);

    const errorMessage = wrapper
      .find("[data-test='error-message']")
      .hostNodes()
      .at(1);

    expect(errorMessage.text()).toBe("second error");
  });
});
