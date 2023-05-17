import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { MainMenuTttComponent } from './main-menu-ttt/main-menu-ttt.component';
import { GameTttComponent } from './game-ttt/game-ttt.component';


@NgModule({
  declarations: [
    MainMenuTttComponent,
    GameTttComponent
  ],
  imports: [
    CommonModule,
    TicTacToeRoutingModule
  ]
})
export class TicTacToeModule { }
