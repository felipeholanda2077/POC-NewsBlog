import type { Meta, StoryObj } from "@storybook/react";
import ValueDescriptor, {
  ValueDescriptorProps,
} from "../components/ValueDescriptor/ValueDescript";

const meta: Meta<typeof ValueDescriptor> = {
  title: "Example/ValueDescriptor",
  component: ValueDescriptor,
};

export default meta;

type Story = StoryObj<typeof ValueDescriptor>;

export const Default: Story = {
  args: {
    description: 'Ganhos na semana',
    value: 560322.02,
  },
};

export const DefaultCurrency: Story = {
    args: {
      description: 'Ganhos na semana',
      value: 560322.02,
      isCurrency: true,
      color: 'default'
    },
  };

export const Primary: Story = {
  args: {
    description: 'Ganhos na semana',
    value: 560322.02,
    isCurrency: false,
    color: 'primary'
  },
};

export const PrimaryCurrency: Story = {
  args: {
    description: 'Ganhos na semana',
    value: 560322.02,
    isCurrency: true,
    color: 'primary'
  },
};
