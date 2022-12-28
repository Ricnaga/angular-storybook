import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ProgressSpinnerModule } from '../progress-spinner/progress-spinner.module';
import { BackdropComponent } from './backdrop.component';

export default {
  title: 'Components/Backdrop',
  component: BackdropComponent,
  argTypes: {
    isLoading: {
      control: 'boolean',
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
