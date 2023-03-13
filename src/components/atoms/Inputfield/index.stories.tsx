import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./index";
import theme from "../../../theme";

export default {
    title: 'atoms/InputField',
    component: Input,
    parameters: {
        actions: {
          handles: ['mousedown', 'click .btn'],
        },
      },
} as ComponentMeta<typeof Input>;

const Template : ComponentStory <typeof Input> = (args) => <Input {...args} />;

export const input = Template.bind({});
input.args = {
   placeholder: "Please provide the input",
   maxLength: 10,
   style: {
       width: "384px",
       height: "36px",
       color:theme.palette.secondary.main,
       fontSize:"20px",
       borderRadius:"5px",
       borderColor:"#E5E7ED",
   },
};