import ButtonWithTypography from "./";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import theme from "../../../theme";
import {ThemeProvider} from '@mui/material';
export default {
    title: 'Molecules/ButtonWithTypography',
    component: ButtonWithTypography,
    color: {
        control: { type: "select" },
        options: ["info", "primary", "success", "error", "warning"],
      },
  } as ComponentMeta<typeof ButtonWithTypography>;
  
  const Template: ComponentStory<typeof ButtonWithTypography> = (args) => (
    <ThemeProvider theme={theme}><ButtonWithTypography {...args} /></ThemeProvider>
  );
  
  export const Primary = Template.bind({});
  Primary.args = {
    variant:"contained",
    onClick: () => console.log('Button clicked!'),
    buttonLabel: 'Click me',
    typographyText: 'Hello, world!',
    direction:"row",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    spacing:2,
    typovariant:"h6",
    color:theme.palette.structural.iconLight,
    buttoncolor:theme.palette.primary.primary500,
    fontFamily:theme.typography.fontFamily,
  };