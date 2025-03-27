import { Story, Meta } from '@storybook/react';
import TagInput, { TagInputProps } from '../components/TagInput';
import { Tag } from 'react-tag-input'

export default {
  title: 'Example/TagInput',
  component: TagInput,
} as Meta;

const Template: Story<TagInputProps> = (args) =>
  <div>
    <TagInput {...args} />
  </div>

export const Default = Template.bind({})
Default.args = {
  tags: [{
    placeholder: 'Insira as tags deste post',
    id: '1',
    text: 'Javascript'
  }]
}

export const VariousTags = Template.bind({})
VariousTags.args = {
  tags: [
    {id: '1', text: 'Javascript'},
    {id: '2', text: 'Java'},
    {id: '3', text: 'Ruby'},
    {id: '4', text: 'Python'},
    {id: '5', text: 'Javascript'},
    {id: '6', text: 'Javascript'},
    {id: '7', text: 'Javascript'},
    {id: '8', text: 'Javascript'},
  ]
}

export function WorkingLiveExample () {
    const [tags, setTags] = useState<Tag[]>([])
  
    return <TagInput
      placeholder="Insira as tags deste post"
      tags={tags}
      onAdd={tag => setTags([...tags, tag])}
      onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
    />
  }