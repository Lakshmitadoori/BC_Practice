import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./index";
import theme from "../../../theme";

export default {
    title: 'molecules/SearchBar',
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
   placeholder: "Search any Candidate",
   maxLength: 10,
   style: {
       width: "344px",
       height:"36px",
       padding:"8px 16px 8px 16px",
       color:"#696A6E",
       fontSize:theme.typography.body2.fontSize,
       fontFamily:theme.typography.body2.fontFamily,
       fontStyle:theme.typography.body2.fontStyle,
       fontWeight:theme.typography.body2.fontWeight,
       borderRadius:"6px",
    //    border: "1px solid #E5E7ED",
         borderColor:"#E5E7ED",
   },
};