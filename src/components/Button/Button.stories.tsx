import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Visual style of the button.',
    },
    iconName: {
      control: 'text',
      description: 'Lucide icon name in kebab-case, e.g. "arrow-right".',
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    iconSize: {
      control: { type: 'number', min: 12, max: 32, step: 2 },
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    iconPosition: 'left',
    iconSize: 16,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary',
  },
};

export const WithIconLeft: Story = {
  args: {
    variant: 'primary',
    children: 'Download',
    iconName: 'download',
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    variant: 'primary',
    children: 'Continue',
    iconName: 'arrow-right',
    iconPosition: 'right',
  },
};

export const IconSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button {...args} iconSize={12} />
      <Button {...args} iconSize={16} />
      <Button {...args} iconSize={24} />
    </div>
  ),
  args: {
    variant: 'secondary',
    children: 'Star',
    iconName: 'star',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled',
    disabled: true,
  },
};
