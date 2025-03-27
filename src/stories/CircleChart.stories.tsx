import type { Meta, StoryObj } from '@storybook/react';
import CircleChart from '../components/CircleChart';

const meta: Meta<typeof CircleChart> = {
  title: 'Example/CircleChart',
  component: CircleChart,
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CircleChart>;

export const Default: Story = {
  args: {
    progress: 80,
    size: 150,
  },
};
