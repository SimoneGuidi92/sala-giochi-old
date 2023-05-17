import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ScissorsPaperRockModuleComponent } from './scissors-paper-rock-module.component';

const routes: Routes = [
  { path: '', component: ScissorsPaperRockModuleComponent },
  { path: 'main-menu', component: MainMenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScissorsPaperRockModuleRoutingModule { }
