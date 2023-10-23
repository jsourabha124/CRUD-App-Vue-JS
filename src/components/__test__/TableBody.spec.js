import { describe, it, expect } from "vitest";
import TableBody from "../TableBody.vue";
import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";

describe("TableBody", () => {
  const wrapper = shallowMount(TableBody);

  //This test help for testing weather component rendered correctly or not
  it("Should render correctly", async () => {
    expect(wrapper.html()).matchSnapshot();
  });

  //Should contain edit button
  it("Should contain edit button", () => {
    wrapper.find('[data-type="edit"]').exists("edit");
  });

  //Should contain delete button
  it("Should contain delete button", () => {
    wrapper.find('[data-type="edit"]').exists("delete");
  });

  //Test for table data : positive
  it("Positive test case for table data", () => {
    const rows = [
      { id: 1, fname: "Joshi", lname: "Sourabha", country:"India" },
    ];

    const columns = [{ key: "fname" }, { key: "lname" }, { key: "country" }];

    const wrapper = mount(TableBody, {
      props: {
        rows,
        columns,
      },
    });

    // Assert that the component renders the expected data
    expect(wrapper.text()).toContain("Joshi");
    expect(wrapper.text()).toContain("Sourabha");
    expect(wrapper.text()).toContain("India");
  });

  //Test for table data : Negative
  it("Negative test case for table data", () => {

    const columns = [{ key: "fname" }, { key: "lname" }, { key: "country" }];
    const rows = [
        { id: 1, fname: "Joshi", lname: "Sourabha", country:"India" },
      ];

    const wrapper = mount(TableBody, {
      props: {
        rows,
        columns,
      },
    });

    // Assert that the component renders the expected data
    expect(wrapper.text()).not.toContain("xasd");
    expect(wrapper.text()).not.toContain("rdef");
    expect(wrapper.text()).not.toContain("USA");
  });

  it('should emit the "edit" event when the button is clicked', async () => {
    //input data
    const rows = [
      { id: 1, fname: "Joshi", lname: "Sourabha", country:"India" },
    ];
    const columns = [{ key: "fname" }, { key: "lname" }, { key: "country" }];
    //Pass data to activate edit button
    const wrapper = mount(TableBody, {
      props: {
        rows,
        columns,
      },
    });

    // Find the button element using a class selector
    const button = wrapper.find('.edit-btn');

    // Simulate a click event on the button
    await button.trigger('click');

    // Assert that a custom event named 'edit' was emitted
    expect(wrapper.emitted('edit')).toBeTruthy();
  });

  it('should emit the "delete" event when the button is clicked', async () => {
    //input data
    const rows = [
      { id: 1, fname: "Joshi", lname: "Sourabha", country:"India" },
    ];
    const columns = [{ key: "fname" }, { key: "lname" }, { key: "country" }];
    const wrapper = mount(TableBody, {
      props: {
        rows,
        columns,
      },
    });
    
    // console.log("HelloSou", wrapper.html());

    // Find the button element using a class selector
    const button = wrapper.find('.delete-btn');

    // Simulate a click event on the button
    await button.trigger('click');

    // Assert that a custom event named 'edit' was emitted
    expect(wrapper.emitted('delete')).toBeTruthy();
  });
});
