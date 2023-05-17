import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnakeNewRoutingModule } from './snake-new-routing.module';
import { GameComponent } from './game/game.component';
import { MainMenuSnakeNewComponent } from './main-menu-snake-new/main-menu-snake-new.component';
import {MatButtonModule} from '@angular/material/button';
import { OptionsModalComponent } from './main-menu-snake-new/options-modal/options-modal.component';


@NgModule({
  declarations: [
    GameComponent,
    MainMenuSnakeNewComponent,
    OptionsModalComponent
  ],
  imports: [
    CommonModule,
    SnakeNewRoutingModule,
    MatButtonModule
  ]
})
export class SnakeNewModule { }
