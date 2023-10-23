import { describe, it, expect } from "vitest";
import HeaderComponent from "../HeaderComponent.vue";
import { shallowMount } from "@vue/test-utils";

describe("HeaderComponent.vue Test", () => {
  //Postive test case for render message when component created
  it("renders message when component is created", () => {
    // render the component
    const wrapper = shallowMount(HeaderComponent);
    // check that the title is rendered
    expect(wrapper.text()).toMatch("Welcome User");
  });

  //Negative test case for render message when component created
  it("renders message when component is created", () => {
    // render the component
    const wrapper = shallowMount(HeaderComponent);
    // check that the title is rendered
    expect(wrapper.text()).not.toMatch("Welcome Admin");
  });
});
