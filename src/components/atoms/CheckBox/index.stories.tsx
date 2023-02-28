import MuiCheckBox from ".";
import {ComponentStory,ComponentMeta} from "@storybook/react";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import theme from "../../../theme";

export default {
    title: "Atoms/CheckBox",
    component: FormControlLabel,
    argTypes: {
        size: {
            options: ["small", "medium"],
            control: { type: "radio" }
        },
        color: {
            options: [
                "primary",
                "secondary",
                "warning",
                "error",
                "info",
                "success",
            ],
            control: { type: "radio" }
        },
        
    }
} as ComponentMeta<typeof MuiCheckBox>

const Template: ComponentStory<typeof MuiCheckBox> = (args) => <MuiCheckBox {...args} />;

export const RememberMe = Template.bind({});
RememberMe.args = {
  checked: true,
  label:"Remember Me",
  size: "medium",
  color: "primary",
  style: { 
    display: "flex",
    alignItems: 'center',
    fontSize: '14px', 
    fontFamily: theme.typography.body2.fontFamily, 
    fontWeight: theme.typography.body2.fontWeight, 
    color: theme.palette.textColor.mediumEmphasis, 
    marginLeft: '20px',
    height: '20px',
    width: '100px'
    }
};