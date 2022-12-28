import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackdropComponent } from './backdrop.component';
import { ProgressSpinnerModule } from '../progress-spinner/progress-spinner.module';

@NgModule({
  declarations: [BackdropComponent],
  imports: [CommonModule, ProgressSpinnerModule],
  exports: [BackdropComponent],
})
export class BackdropModule {}
