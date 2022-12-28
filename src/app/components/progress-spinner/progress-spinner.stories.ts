import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ProgressSpinnerComponent } from './progress-spinner.component';
import { ProgressSpinnerModule } from './progress-spinner.module';

export default {
  title: 'Components/Progress Spinner',
  component: ProgressSpinnerComponent,
  args: {
    mode: 'indeterminate',
    color: 'primary',
    value: 50,
  },
  argTypes: {
    mode: {
      options: ['indeterminate', 'determinate'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      options: ['primary', 'accent', 'warn'],
      control: {
        type: 'radio',
      },
    },
    value: {
      control: { type: 'number', min: 1, max: 100 },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [ProgressSpinnerModule],
    }),
  ],
} as Meta;

export const Example: Story = (args) => ({
  props: args,
});
