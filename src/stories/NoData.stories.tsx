import { StoryObj, Meta } from "@storybook/react";
import NoData from "../components/NoData/NoData";

export default {
  title: "Example/NoData",
  component: NoData,
  argTypes: {
    onNoData: { action: 'confirm' },
    onCancel: { action: 'cancel' },
  },
} as Meta;

type Story = StoryObj<typeof NoData>;

export const Default: Story = {
  args: {},
};

export const FixedHeight: Story = {
    args: {
      height: 180,
    },
  };
