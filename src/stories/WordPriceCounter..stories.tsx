import { Story, Meta } from '@storybook/react';
import WordPriceCounter, { SessionControllerProps } from '../components/WordPriceCounter';

export default {
  title: 'Example/WordPriceCounter',
  component: WordPriceCounter,
} as Meta;

const Template: Story<SessionControllerProps> = (args) =>
  <div>
    <WordPriceCounter {...args} />
  </div>

export const Default = Template.bind({})
Default.args = {
  pricePerWord: 0.25,
  wordsCount: 20,
}