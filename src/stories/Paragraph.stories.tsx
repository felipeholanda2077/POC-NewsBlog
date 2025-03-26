import type { Meta, StoryObj } from "@storybook/react";
import Paragraph, { ParagraphProps } from "../components/Typography/Paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Typography/Paragraph",
  component: Paragraph,
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
    args: {
      size: 'default',
      children: 'Lorem ipsum dolor sit amet. Ad mollitia voluptatem et temporibus molestiae vel libero consequuntur a suscipit ipsam ut obcaecati odit est cumque aperiam. In consequatur possimus eos fuga culpa ut eveniet quam sit voluptates iusto et quam adipisci et perferendis nihil. Est explicabo excepturi sit eligendi iure qui molestias iste. Et fugiat voluptatem aut ratione recusandae et fuga tenetur.'
    },
  };

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Nam vitae eveniet et distinctio autem ut magnam rerum aut repellat maiores ea consectetur quaerat. Non quia consequatur et sunt doloremque eos saepe soluta et iste natus nam aperiam vitae et nulla error.'
  },
};