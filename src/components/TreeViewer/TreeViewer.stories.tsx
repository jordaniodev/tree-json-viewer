import { Meta, StoryFn } from '@storybook/react';
import { TreeViewer } from './TreeViewer';
import { TreeViewerProps } from './TreeViewer.type';

export default {
  title: 'Components/TreeViewer',
  component: TreeViewer,
  argTypes: {
    jsonValue: { control: 'object' },
  },
} as Meta<typeof TreeViewer>;

const Template: StoryFn<TreeViewerProps> = (args) => <TreeViewer {...args} />;

export const Default = Template.bind({});
Default.args = {
  jsonValue: {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["JavaScript", "React", "Node.js"],
    address: {
      street: "123 Elm St",
      city: "Metropolis",
      zip: null,
    },
  },
};

export const EmptyObject = Template.bind({});
EmptyObject.args = {
  jsonValue: {},
};

export const ComplexJson = Template.bind({});
ComplexJson.args = {
  jsonValue: {
    company: "Tech Corp",
    employees: [
      { name: "Alice", role: "Developer" },
      { name: "Bob", role: "Designer" },
    ],
    projects: [
      { title: "Project A", deadline: "2024-12-31" },
      { title: "Project B", deadline: "2025-06-30" },
    ],
    headquarters: {
      country: "USA",
      state: "California",
      city: "San Francisco",
      established: 2008,
    },
  },
};

export const ArrayOnly = Template.bind({});
ArrayOnly.args = {
  jsonValue: ["Item 1", "Item 2", "Item 3", "Item 4"],
};
