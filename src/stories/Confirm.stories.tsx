import { StoryObj, Meta } from '@storybook/react';
import Confirm, { ConfirmProps } from '../components/Confirm/Confirm';

export default {
  title: 'Example/Confirm',
  component: Confirm,
  argTypes: {
    onConfirm: { action: 'confirm' },
    onCancel: { action: 'cancel' },
  },
} as Meta;

type Story = StoryObj<typeof Confirm>;

export const Default: Story = {
    args: {
      title: 'Você tem certeza?',
    },
  };