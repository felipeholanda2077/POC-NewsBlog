import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from '../components/ProgressBar/ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Example/ProgressBar',
  component: ProgressBar,
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Primary: Story = {
  args: {
    title: 'Você tem certeza?',
    progress: 50,
    theme: 'primary',
    width: 375,
  },
};

export const Secondary: Story = {
  args: {
    title: 'Você tem certeza?',
    progress: 50,
    theme: 'secondary',
    width: 375,
  },
};

export const Complete: Story = {
  args: {
    title: 'Você tem certeza?',
    progress: 100,
    theme: 'primary',
    width: 375,
  },
};

export const ZeroProgress: Story = {
  args: {
    title: 'Você tem certeza?',
    progress: 0,
    theme: 'secondary',
    width: 375,
  },
};

export const ProgressInHalfOfText: Story = {
  args: {
    title: 'Você tem certeza?',
    progress: 50, // Corrigido: estava com progress 0, mas o nome sugere "metade"
    theme: 'secondary',
    width: 375,
  },
};
