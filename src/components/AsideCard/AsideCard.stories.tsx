
import { Meta, StoryFn } from '@storybook/react';
import { AsideCard } from './AsideCard';
import { Avatar } from "@mui/material";
import { AsideCardProps } from './AsideCard.type';

export default {
  title: 'Components/AsideCard',
  component: AsideCard,
  argTypes: {
    title: { control: 'text' },
    icon: { control: 'text' },
    children: { control: 'text' },
  },
} as Meta<typeof AsideCard>;

const Template: StoryFn<AsideCardProps> = (args) => <AsideCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  icon: <Avatar src="/img/icons/sample-icon.svg" alt="Icon" />,
  children: <p>This is the card content.</p>,
};


export const WithoutChildren = Template.bind({});
WithoutChildren.args = {
  title: 'Card Without Children',
  icon: <Avatar src="/img/icons/sample-icon.svg" alt="Icon" />,
};
