import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from ".";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Calender: string = require("../../../../public/assests/images/Calender.svg").default;

export default {
  title: "molecules/Card",
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);

export const clear = Template.bind({});
clear.args = {
title:"Name",
content:"John Smith",
src:Calender,
alt:"calender",
};