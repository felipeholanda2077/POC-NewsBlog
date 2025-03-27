import type { Meta, StoryObj } from '@storybook/react';
import ErrorDisplay from '../components/ErrorDisplay';

const meta: Meta<typeof ErrorDisplay> = {
  title: 'Example/ErrorDisplay',
  component: ErrorDisplay,
  argTypes: {
    small: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorDisplay>;

export const Default: Story = {
  args: {},
};

export const CustomTitle: Story = {
  args: {
    title: 'Houve um erro',
  },
};

export const CustomMessage: Story = {
  args: {
    title: 'Houve um erro',
    message: 'Falha na comunicação com o servidor',
  },
};

export const Small: Story = {
  args: {
    title: 'Houve um erro',
    message: 'Falha na comunicação com o servidor',
    small: true,
  },
};
