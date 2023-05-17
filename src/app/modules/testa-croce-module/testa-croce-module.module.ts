import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestaCroceModuleRoutingModule } from './testa-croce-module-routing.module';
import { TestaCroceModuleComponent } from './testa-croce-module.component';


@NgModule({
  declarations: [
    TestaCroceModuleComponent
  ],
  imports: [
    CommonModule,
    TestaCroceModuleRoutingModule
  ]
})
export class TestaCroceModuleModule { }
