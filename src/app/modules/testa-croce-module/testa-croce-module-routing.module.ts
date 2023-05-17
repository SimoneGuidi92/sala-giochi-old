import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestaCroceModuleComponent } from './testa-croce-module.component';

const routes: Routes = [{ path: '', component: TestaCroceModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestaCroceModuleRoutingModule { }
