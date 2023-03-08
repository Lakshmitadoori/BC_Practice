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
  options: [{value:"10",label:"10 per page"},{value:"20",label:"20 per page"},{value:"5",label:"5 per page"},],
  height: 26,
  width: 130,
};