import React from "react";
import MuiIcon from "./index";
import Icon from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import theme from "../../../theme";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const home = require("../../../../public/images/home.svg") as string;

export default {
  title: "atoms/Icon",
  component: Icon,
  argTypes: { 
    color: {
        options:["disabled", "action","inherit","primary","secondary","error","info","success","warning",undefined],
        control: {type: "select"},
    },
    size:{
      options:["inherit","small","large","medium",undefined],
      control:{type:"select"},
    },
    src:{control:{type: "text"}},
    alt:{control:{type:"text"}},
  }
} as ComponentMeta<typeof MuiIcon>;

const Template: ComponentStory<typeof MuiIcon> = (args) => (
  <MuiIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
src:home,
alt:"home icon",
  style: {
    color: theme.palette.primary.primary500,
  },
};
export const Structural = Template.bind({});
Structural.args = {
  src:home,
  alt:"home icon",
  style: {
    color: theme.palette.structural.iconDark,
  },
};