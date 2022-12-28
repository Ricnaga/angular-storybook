import { BackdropModule } from './backdrop/backdrop.module';
import { ProgressSpinnerModule } from './progress-spinner/progress-spinner.module';

import { BackdropComponent } from './backdrop/backdrop.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

export const SharedModules = [BackdropModule, ProgressSpinnerModule];
export const SharedComponents = [BackdropComponent, ProgressSpinnerComponent];
