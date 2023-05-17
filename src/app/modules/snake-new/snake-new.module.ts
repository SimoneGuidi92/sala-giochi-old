import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnakeNewRoutingModule } from './snake-new-routing.module';
import { GameComponent } from './game/game.component';
import { MainMenuSnakeNewComponent } from './main-menu-snake-new/main-menu-snake-new.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    GameComponent,
    MainMenuSnakeNewComponent
  ],
  imports: [
    CommonModule,
    SnakeNewRoutingModule,
    MatButtonModule
  ]
})
export class SnakeNewModule { }
