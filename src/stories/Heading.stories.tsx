import type { Meta, StoryObj } from "@storybook/react";
import Heading, { HeadingProps } from "../components/Typography/Heading";

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
    args: {
        level: 1,
        children: 'Heading 1'
    },
  };

export const Heading2: Story = {
  args: {
    level: 2,
    children: 'Heading 2'
  },
};

export const Heading3: Story = {
    args: {
        level: 3,
        children: 'Heading 3'
    },
  };
  