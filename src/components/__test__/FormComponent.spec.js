import { describe, it, expect, beforeEach } from "vitest";
import FormComponent from "../../components/FormComponent.vue";
import { mount, shallowMount, render } from "@vue/test-utils";
import { createApp, ref } from "vue";
import { useTodoStore } from "../../stores/todo.js";
import { setActivePinia, createPinia } from "pinia";

describe("Form Component", () => {
  // Create a Vue app instance and mount the component
  const app = createApp(FormComponent);
  const wrapper = mount(app);

  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // useStore(pinia)
    setActivePinia(createPinia());
  });

  it("renders the form correctly", async () => {
    // Use wrapper to interact with and test the component
    const formTitle = wrapper.find("h2");
    const firstNameInput = wrapper.find('[name="firstname"]');
    const lastNameInput = wrapper.find('[name="lastname"]');
    const countrySelect = wrapper.find('[name="country"]');
    const addUserButton = wrapper.find(".add-btn");

    // Assertions for the form elements
    expect(formTitle).not.toBeNull();
    expect(firstNameInput).not.toBeNull();
    expect(lastNameInput).not.toBeNull();
    expect(countrySelect).not.toBeNull();
    expect(addUserButton).not.toBeNull();
  });

  it("renders the form correctly", async () => {
    const store = useTodoStore();

    const wrapper = mount(FormComponent);

    //const wrapper = mount(FormComponent);
    const firstNameInput = wrapper.find('[name="firstname"]');
    const lastNameInput = wrapper.find('[name="lastname"]');
    const countrySelect = wrapper.find('[name="country"]');

    // Assertions for the form elements
    firstNameInput.setValue("Joshi");
    lastNameInput.setValue("Sourabha");
    countrySelect.setValue("USA");

    // const columns = [{ key: "fname" }, { key: "lname" }, { key: "country" }];
    // const rows = [
    //     { id: 1, fname: "Joshi", lname: "Sourabha", country:"India" },
    //   ];

    await wrapper.find(".add-btn").trigger("click");

    expect(wrapper.find(".add-btn").exists()).toBe(true);
    // expect(wrapper.text()).toBeCalled();

    const ac = await wrapper.find("button").trigger("click");
    expect(wrapper.vm.search).toEqual(undefined);
  });

  it("renders the form correctly", async () => {

    const store = useTodoStore();
    const wrapper = mount(FormComponent);
    console.log("HelloSou", wrapper.html());
    const firstNameInput = wrapper.find('[name="firstname"]');
    const lastNameInput = wrapper.find('[name="lastname"]');
    const countrySelect = wrapper.find('[name="country"]');
    // Assertions for the form elements
    firstNameInput.setValue("Joshi");
    lastNameInput.setValue("Sourabha");
    countrySelect.setValue("USA");

    // Find the button element
    const button = wrapper.find(".add-btn");

    // Simulate a click event on the button
    await button.trigger("click");
    expect(button).toBeTruthy();
  });

  //   it("Button Clicked", async () => {
  //     const store = useTodoStore();

  //     const wrapper = mount(FormComponent);

  //     const ac = await wrapper.find(".add-btn").trigger("click");
  //     expect(wrapper.vm.search).toEqual(undefined);
  //   });
});
