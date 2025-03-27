import type { Meta, StoryObj } from '@storybook/react';
import WordPriceCounter from '../components/WordPriceCounter';

const meta: Meta<typeof WordPriceCounter> = {
  title: 'Example/WordPriceCounter',
  component: WordPriceCounter,
};

export default meta;

type Story = StoryObj<typeof WordPriceCounter>;

export const Default: Story = {
  args: {
    pricePerWord: 0.25,
    wordsCount: 20,
  },
};
