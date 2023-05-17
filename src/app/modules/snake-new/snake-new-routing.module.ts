import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { MainMenuSnakeNewComponent } from './main-menu-snake-new/main-menu-snake-new.component';

const routes: Routes = [
  { path: '', component: MainMenuSnakeNewComponent },
  { path: 'snake-new-game', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnakeNewRoutingModule { }
