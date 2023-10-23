import { describe, it, expect } from "vitest";
import TableHeader from "../TableHeader.vue";
import { shallowMount, mount } from "@vue/test-utils";

describe("TableBody", () => {
  const wrapper = shallowMount(TableHeader);

  //Test for table header : Positive
  it("Positive test case for table header data", () => {
    const columns = [
      {
        key: "fname",
        label: "First name",
      },
      {
        key: "lname",
        label: "Last Name",
      },
      {
        key: "country",
        label: "Country",
      },
    ];

    const wrapper = mount(TableHeader, {
      props: {
        columns,
      },
    });

    // Assert that the component renders the expected data
    expect(wrapper.text()).toContain("First name");
    expect(wrapper.text()).toContain("Last Name");
    expect(wrapper.text()).toContain("Country");
  });

  //Test for table header : Negative
  it("Negative test case for table header data", () => {
    const columns = [
      {
        key: "fname",
        label: "First name",
      },
      {
        key: "lname",
        label: "Last Name",
      },
      {
        key: "country",
        label: "Country",
      },
    ];

    const wrapper = mount(TableHeader, {
      props: {
        columns,
      },
    });

    // Assert that the component renders the expected data
    expect(wrapper.text()).not.toContain("xyz");
    expect(wrapper.text()).not.toContain("deded");
    expect(wrapper.text()).not.toContain("German");
  });
});
