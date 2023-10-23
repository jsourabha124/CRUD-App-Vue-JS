import { describe, it, expect } from "vitest";
import DataTable from "../DataTable.vue";
import { shallowMount } from "@vue/test-utils";

describe("DataTable.vue Test", () => {
  // Positive test case for render message
  it("renders message when component is created", () => {
    // render the component
    const wrapper = shallowMount(DataTable);
    // check that the title is rendered
    expect(wrapper.text()).toMatch("User Details");
  });

  //Negative test case for render message
  it("render message when component is create", () => {
    const wrapper = shallowMount(DataTable);
    expect(wrapper.text()).not.toMatch("Some dummy text");
  });
});
