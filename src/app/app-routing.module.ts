import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'scissors-paper-rock', loadChildren: () => import('./modules/scissors-paper-rock-module/scissors-paper-rock-module.module').then(m => m.ScissorsPaperRockModuleModule) },
  { path: 'testa-croce', loadChildren: () => import('./modules/testa-croce-module/testa-croce-module.module').then(m => m.TestaCroceModuleModule) },
  { path: 'snake', loadChildren: () => import('./modules/snake/snake-routing.module').then(m => m.SnakeRoutingModule) },
  { path: 'snake-new', loadChildren: () => import('./modules/snake-new/snake-new-routing.module').then(m => m.SnakeNewRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
