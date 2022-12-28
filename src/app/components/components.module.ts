import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModules } from './';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModules],
  exports: [SharedModules],
})
export class ComponentsModule {}
