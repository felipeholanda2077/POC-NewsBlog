import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TagInput from '../components/TagInput';
import type { Tag } from 'react-tag-input';

const meta: Meta<typeof TagInput> = {
  title: 'Example/TagInput',
  component: TagInput,
};

export default meta;

type Story = StoryObj<typeof TagInput>;

export const Default: Story = {
  args: {
    tags: [
      {
        id: '1',
        text: 'Javascript',
        className: '',
      },
    ],
    placeholder: 'Insira as tags deste post',
  },
};

export const VariousTags: Story = {
  args: {
    tags: [
      { id: '1', text: 'Javascript', className: '' },
      { id: '2', text: 'Java', className: '' },
      { id: '3', text: 'Ruby', className: '' },
      { id: '4', text: 'Python', className: '' },
      { id: '5', text: 'Typescript', className: '' },
      { id: '6', text: 'Go', className: '' },
      { id: '7', text: 'Rust', className: '' },
      { id: '8', text: 'C#', className: '' },
    ],
    placeholder: 'Linguagens populares',
  },
};

export function WorkingLiveExample() {
  const [tags, setTags] = useState<Tag[]>([]);

  return (
    <TagInput
      placeholder="Insira as tags deste post"
      tags={tags}
      onAdd={(tag) => setTags([...tags, tag])}
      onDelete={(index) => setTags(tags.filter((_, i) => i !== index))}
    />
  );
}
