import React from "react";
import Selection from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "atoms/Selection",
  component: Selection,
  argTypes: {
    handleChange: { action: "handleChange" },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Selection>;
const Template: ComponentStory<typeof Selection> = (args) => (
  <Selection {...args} />
);
export const PageSelection = Template.bind({});
PageSelection.storyName = "Page Selector";
PageSelection.args = {
  options: ["10 per page", "20 per page", "30 per page"],
};
