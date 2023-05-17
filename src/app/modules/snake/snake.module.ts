import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnakeRoutingModule } from './snake-routing.module';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    SnakeRoutingModule
  ],
  exports: [
    // GameComponent
  ]
})
export class SnakeModule { }
// @NgModule({
//   declarations: [
//     ScissorsPaperRockModuleComponent,
//     MainMenuComponent,
//     GameComponent
//   ],
//   imports: [
//     CommonModule,
//     ScissorsPaperRockModuleRoutingModule
//   ],
//   exports: [
//     MainMenuComponent,
//     GameComponent
//   ]
// })
