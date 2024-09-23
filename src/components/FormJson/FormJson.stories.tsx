import { Meta, StoryFn } from '@storybook/react';
import { FormJson } from './FormJson';
import { action } from '@storybook/addon-actions';
import { FormJsonProps } from './FormJson.type';


export default {
  title: 'Components/FormJson',
  component: FormJson,
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
} as Meta<typeof FormJson>;

const Template: StoryFn<FormJsonProps> = (args: any) => <FormJson {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: action('submitted'),
};
