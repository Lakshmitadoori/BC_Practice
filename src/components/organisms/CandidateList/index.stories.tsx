import React from "react";
import CandidateList from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "organisms/CandidateList",
  component: CandidateList,
  
} as ComponentMeta<typeof CandidateList>;
const Template: ComponentStory<typeof CandidateList> = (args) => (
  <CandidateList {...args}/>
);
export const Candidates = Template.bind({});
Candidates.storyName = "CandidateList";
Candidates.args={
    width:1060,
    top:60
}
