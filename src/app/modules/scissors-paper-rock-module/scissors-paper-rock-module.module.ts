import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScissorsPaperRockModuleRoutingModule } from './scissors-paper-rock-module-routing.module';
import { ScissorsPaperRockModuleComponent } from './scissors-paper-rock-module.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    ScissorsPaperRockModuleComponent,
    MainMenuComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    ScissorsPaperRockModuleRoutingModule
  ],
  exports: [
    MainMenuComponent,
    GameComponent
  ]
})
export class ScissorsPaperRockModuleModule { }
