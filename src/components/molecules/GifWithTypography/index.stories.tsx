import React from "react";
import Text from './index';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import theme from "../../../theme";

export default {
    title:'molecules/gif+typo',
    component: Text,
    argTypes :{
        variant: {
            options:["h1", "h2", "h3", "h4", "h5" , "h6","body1","button","caption", "subtitle1","body2", "inherit", "subtitle2", "overline"],
            control: {type: "select"},
        },
    },
}as ComponentMeta <typeof Text>;
const Template : ComponentStory <typeof Text> = (args) => <Text {...args} />;
export const gif = Template.bind({});
gif.args ={
    text : 'OTP has been sent to your email!',
    style : {
     color:"#2C2C2E",
     fontFamily:theme.typography.fontFamily,
     fontSize:"18px",
     fontWeight:"500",
     position: "absolute",
    left: "16.95%",
    right: "16.81%",
    top: "315px",
   bottom: "19.1%",
    },
    variant:"h1",
};