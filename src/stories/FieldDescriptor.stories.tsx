import type { Meta, StoryObj } from "@storybook/react";
import FildDescriptor from "../components/FieldDescriptor/FieldDescriptor";

const meta: Meta<typeof FildDescriptor> = {
  title: "Typography/FildDescriptor",
  component: FildDescriptor,
};

export default meta;

type Story = StoryObj<typeof FildDescriptor>;

export const Default: Story = {
    args: {
      bold: true,
      children: (
        <>
          Data de nascimento<br />
          26 de dezembro de 1997 (22 anos)
        </>
      )
      
    },
  };

  export const Normal: Story = {
    args: {
      bold: false,
      children: (
        <>
          Data de nascimento<br />
          26 de dezembro de 1997 (22 anos)
        </>
      )
    },
  };