import type { Meta, StoryObj } from '@storybook/react';
import Profile from '../components/Profile';

const meta: Meta<typeof Profile> = {
  title: 'Example/Profile',
  component: Profile,
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    name: 'Daniel Bonfacio',
    description: 'editor há muito tempo',
  },
};
