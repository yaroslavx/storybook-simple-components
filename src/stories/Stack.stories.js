import Stack from '../components/Stack';

export default {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    numberOfChildren: { type: 'number', defaultValue: 5 },
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((num) => (
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'blue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {num + 1}
      </div>
    ))}
  </Stack>
);

export const HorizontalStack = Template.bind({});
HorizontalStack.args = {
  direction: 'row',
  spacing: 3,
  wrap: false,
};

export const VerticalStack = Template.bind({});
VerticalStack.args = {
  direction: 'column',
  spacing: 3,
  wrap: false,
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
  direction: 'row',
  spacing: 0,
  wrap: false,
};

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
  numberOfChildren: 50,
  direction: 'row',
  spacing: 3,
  wrap: true,
};

export const Empty = Template.bind({});
Empty.args = {
  numberOfChildren: 0,
};
