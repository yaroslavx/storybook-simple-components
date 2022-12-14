import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = (args) => <Button {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  label: 'Try it out',
  backgroundColor: 'blue',
  size: 'md',
};

export const Gray = Template.bind({});
Gray.args = {
  label: 'Try it out',
  backgroundColor: 'gray',
  size: 'md',
};

export const Small = Template.bind({});
Blue.args = {
  label: 'Try it out',
  backgroundColor: 'blue',
  size: 'sm',
};

export const Large = Template.bind({});
Blue.args = {
  label: 'Try it out',
  backgroundColor: 'blue',
  size: 'lg',
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  label:
    'Try it out, Try it out, Try it out, Try it out, Try it out, Try it out, Try it out',
  backgroundColor: 'blue',
  color: 'white',
  size: 'md',
};
