import React from "react";
import CandidateList from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Search from "./index";
import search from "../../molecules/IconText/index.stories"

export default {
  title: "organisms/Search",
  component: search,
  
} as ComponentMeta<typeof Search>;
const Template: ComponentStory<typeof Search> = (args) => (
  <Search {...args}/>
);
export const searchButton = Template.bind({});
searchButton.storyName = "Search";
searchButton.args={
 height:36,
}
