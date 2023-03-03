import React from "react";
import Chip from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import theme from "../../../theme";
import MuiChip from "./index";

export default {
  title: "atoms/Chip",
  component: Chip,
  argTypes: {},
} as ComponentMeta<typeof MuiChip>;

const Template: ComponentStory<typeof MuiChip> = (args) => (
  <MuiChip {...args} />
);

export const Clear = Template.bind({});
Clear.args = {
  label: "CLEAR",
  background: theme.palette.accent.lightGreen,
  color: theme.palette.accent.green,
 
};

export const Consider = Template.bind({});
Consider.args = {
  label: "CONSIDER",
  background: theme.palette.accent.lightYellow,
  color: theme.palette.accent.yellow,
  
};
export const Scheduled = Template.bind({});
Scheduled.args = {
  label: "SCHEDULED",
  background: theme.palette.accent.lightBlue,
  color: theme.palette.accent.blue,
  
};
export const AdverseAction = Template.bind({});
AdverseAction.args = {
  label: "ADVERSE ACTION",
  background: theme.palette.accent.lightYellow,
  color: theme.palette.accent.yellow,
  
};
export const Engage = Template.bind({});
Engage.args = {
  label: "ENGAGE",
  background: theme.palette.accent.lightGreen,
  color: theme.palette.accent.green,
  
};
