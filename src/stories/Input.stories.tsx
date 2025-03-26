import type { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "../components/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const WithPlaceholder: Story = {
    args: {
      label: "Name ",
      placeholder: "Digite algo...",
      value: "Jon Doe",
    },
  };

export const WithLabelAndPlaceholder: Story = {
  args: {
    label: "Name ",
    placeholder: "Digite algo...",
    value: "Jon Doe",
  },
};

export const WithLabelAndContent: Story = {
    args: {
      label: "Name ",
      placeholder: "Digite algo...",
      value: "Jon Doe",
    },
  };
  

export const WithContent: Story = {
  args: {
    label: "Name ",
    placeholder: "Digite algo...",
    value: "Jon Doe",
  },
};