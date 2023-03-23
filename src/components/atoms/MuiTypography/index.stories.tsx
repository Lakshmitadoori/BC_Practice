import { ComponentStory, ComponentMeta } from "@storybook/react";
import MuiTypography from ".";
import {ThemeProvider} from '@mui/material';
import theme from '../../../theme'
export default {
  title: "atoms/MuiTypography",
  component: MuiTypography,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "body1",
        "body2",
        "button",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "inherit",
        "overline",
        "subtitle1",
        "subtitle2",
      ],
    },
    align: {
      control: { type: "select" },
      options: ["center", "inherit", "justify", "left", "right"],
    },
  },
} as ComponentMeta<typeof MuiTypography>;

const template: ComponentStory<typeof MuiTypography> = (args) => (
  <ThemeProvider theme={theme}><MuiTypography {...args} /></ThemeProvider>
);
export const Primary = template.bind({});
export const Secondary = template.bind({});
Secondary.args = {
  variant: "h3",
  children: "vinay",
  color: "primary",
};
Primary.args = {
  variant: "h2",
  children: "typography component",
  sx: {
    width: "500px",
    height: "100px",
    color: theme.palette.accent.green,
  },
};