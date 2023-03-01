import { ComponentStory, ComponentMeta } from "@storybook/react";
import {ThemeProvider} from '@mui/material';
import theme from "../../../theme";
import MuiButton from "./index";
export default {
  title: "Form/MuiButton",
  component: MuiButton,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["text", "contained", "outlined"],
    },
    color: {
      control: { type: "select" },
      options: ["info", "primary", "success", "error", "warning"],
    },
    size: { control: { type: "radio" }, options: ["small", "medium", "large"] },
  },
} as ComponentMeta<typeof MuiButton>;

const template: ComponentStory<typeof MuiButton> = (args) => (
  <ThemeProvider theme={theme}><MuiButton {...args} /></ThemeProvider>
);
export const Primary = template.bind({});
export const Secondary = template.bind({});
Secondary.args = {
  variant: "outlined",
  children: "buy",
  size: "medium",
  disabled: true,
  sx: {
    width: "100px",
    height: "40px",
    color: theme.palette.accent.lightGreen,
    background:theme.palette.accent.lightYellow,
  },
};
Primary.args = {
  variant: "contained",
  children: "sell",
  size: "small",
  color: "warning",
  disabled: true,
  sx: {
    width: "100px",
    height: "40px",
    color: "black",
  },
};