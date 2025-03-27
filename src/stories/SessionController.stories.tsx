import type { Meta, StoryObj } from '@storybook/react';
import SessionController from '../components/SessionController';

const meta: Meta<typeof SessionController> = {
  title: 'Example/SessionController',
  component: SessionController,
  argTypes: {
    onLogout: {
      action: 'logout',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SessionController>;

export const Default: Story = {
  args: {
    name: 'Daniel Bonfacio',
    description: 'editor há muito tempo',
  },
};
