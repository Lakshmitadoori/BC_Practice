import Image from './index'

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Image",
  component: Image,

} as ComponentMeta<typeof Image>;

const template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const small = template.bind({});
small.args = {
  source:"assets/images/logo192.png",
  alt:"backup",
  width:"40px",
  height:"40px",
};