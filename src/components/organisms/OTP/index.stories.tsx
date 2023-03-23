import Mainpage from './index'
import { theme } from "../../../theme";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Login from '../../../../public/assets/images/Login screen.svg';
import ThemeProvider from "@mui/material/styles/ThemeProvider";
export default {
  title: "organisms/OTP",
  component: Mainpage,

} as ComponentMeta<typeof Mainpage>;

const template: ComponentStory<typeof Mainpage> = (args) =><ThemeProvider theme={theme}><Mainpage {...args} /></ThemeProvider>;

export const small = template.bind({});
small.args = {
  src:Login,
  buttonColor:theme.palette.primary.primary500,
  maintext:"Please enter OTP"
};