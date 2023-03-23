import Pread from './index'
import { theme } from "../../../theme";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Login from '../../../../public/assets/images/Login screen.svg';
import ThemeProvider from "@mui/material/styles/ThemeProvider";
export default {
  title: "organisms/Preadverse",
  component: Pread,

} as ComponentMeta<typeof Pread>;

const template: ComponentStory<typeof Pread> = (args) =><Pread {...args} />;

export const small = template.bind({});
small.args = {
  src:Login,
  buttonColor:theme.palette.primary.primary500,
};