import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu-snake-new',
  templateUrl: './main-menu-snake-new.component.html',
  styleUrls: ['./main-menu-snake-new.component.scss']
})
export class MainMenuSnakeNewComponent implements OnInit {

  difficolta: number = 150;

  constructor() { }

  ngOnInit(): void {
  }

  difficoltaSelezionata(event: any) {
    this.difficolta = event;
  }

}
