import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuTttComponent } from './main-menu-ttt/main-menu-ttt.component';
import { GameTttComponent } from './game-ttt/game-ttt.component';

const routes: Routes = [
  { path: '', component: MainMenuTttComponent },
  { path: 'tic-tac-toe-game', component: GameTttComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicTacToeRoutingModule { }
