import type { Meta, StoryObj } from '@storybook/react';
import MarkdownEditor from '../components/MarkdownEditor';

const meta: Meta<typeof MarkdownEditor> = {
  title: 'Example/MarkdownEditor',
  component: MarkdownEditor,
};

export default meta;

type Story = StoryObj<typeof MarkdownEditor>;

export const Default: Story = {
  args: {},
};
