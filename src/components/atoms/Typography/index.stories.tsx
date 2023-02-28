import React from "react";
import Text from './index';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import theme from "../../../theme";

export default {
    title:'atoms/Typography',
    component: Text,
    argTypes :{
        variant: {
            options:["h1", "h2", "h3", "h4", "h5" , "h6","body1","button","caption", "subtitle1","body2", "inherit", "subtitle2", "overline"],
            control: {type: "select"},
        },
    },
}as ComponentMeta <typeof Text>;
const Template : ComponentStory <typeof Text> = (args) => <Text {...args} />;
export const Heading = Template.bind({});
Heading.args ={
    text : 'Email',
    style : {
     color:"#696A6E",
     fontFamily:theme.typography.fontFamily,
    },
    variant:"h1",
};