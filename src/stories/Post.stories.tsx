import { ComponentMeta, ComponentStory } from "@storybook/react";
import Post from "Components/Post/Post";
import { ThemeProvider } from "styled-components";
import { theme } from "Theme/theme";

export default {
  title: "Post",
  component: Post,
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => (
  <div style={{ maxWidth: 500 }}>
    <ThemeProvider theme={theme}>
      <Post {...args} />
      <Post {...args} />
      <Post {...args} />
    </ThemeProvider>
  </div>
);

export const PlainText = Template.bind({});
PlainText.args = {
  post: {
    published: "Há 2 horas",
    owner: {
      id: "1",
      nome: "Francisco Xavier Carvalho",
      image: "https://i.pravatar.cc/300",
      curso: {
        nome: "Engenharia de Bioprocessos e Biotecnologia",
        campus: "UTFPR DV",
      },
    },
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores libero nam sit fuga, ducimus illum placeat ex magnam officiis, quis sequi facere? Enim possimus omnis accusamus harum ut blanditiis ab",
  },
};
