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
export const Simple = Template.bind({});
Simple.storyName = "Page Selector";
Simple.args = {
  options: ["10 per page", "20 per page", "30 per page"],
  height: 26,
  width: 130,
  variant: "caption",
};