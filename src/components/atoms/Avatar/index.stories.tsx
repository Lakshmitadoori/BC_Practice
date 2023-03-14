import { ComponentStory, ComponentMeta } from "@storybook/react";
import MuiAvatar from "./index";
import theme from "../../../theme";
import { ThemeProvider } from "@mui/material/styles";

export default {
  title: "Atoms/MuiAvatar",
  component: MuiAvatar,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["circular", "rounded", "square"],
    },
  },
} as ComponentMeta<typeof MuiAvatar>;


const template: ComponentStory<typeof MuiAvatar> = (args) => (
  <ThemeProvider theme={theme}>
    <MuiAvatar {...args} />
  </ThemeProvider>
);
export const Primary = template.bind({});
export const Secondary = template.bind({});
Secondary.args = {
  variant: "circular",
  children: "A",
  sx: {
    background: theme.palette.accent.yellow,
    width: "50px",
    height: "50px",
  },
};
Primary.args = {
  variant: "circular",
  src: "assests/images/AvatarImage.svg",
  sx: {
    width: "100px",
    height: "100px",
  },
};