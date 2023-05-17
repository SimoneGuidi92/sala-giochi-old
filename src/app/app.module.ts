import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { PizzaModule } from './pizza/pizza.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScissorsPaperRockModuleModule } from './modules/scissors-paper-rock-module/scissors-paper-rock-module.module';
import { SnakeModule } from './modules/snake/snake.module';
import { SnakeNewModule } from './modules/snake-new/snake-new.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PizzaModule,
    BrowserAnimationsModule,
    ScissorsPaperRockModuleModule,
    SnakeModule,
    SnakeNewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
