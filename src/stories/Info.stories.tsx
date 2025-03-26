import type { Meta, StoryObj } from "@storybook/react";
import Info, { InfoProps } from "../components/Info/Info";

const meta: Meta<typeof Info> = {
  title: "Example/Info",
  component: Info,
};

export default meta;

type Story = StoryObj<typeof Info>;

export const WithPlaceholder: Story = {
    args: {
      title: 'Post não encontrado',
      description: 'Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.'
    },
  };
