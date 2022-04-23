import { ComponentMeta, ComponentStory } from "@storybook/react";
import Avatar from "Components/Avatar/Avatar";

export default {
  title: "Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 100,
  alt: "",
  url: "https://i.pravatar.cc/300",
};

export const Small = Template.bind({});
Small.args = {
  size: 40,
  alt: "",
  url: "https://i.pravatar.cc/300",
};
