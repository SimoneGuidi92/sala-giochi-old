import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() user!: string;

  showHidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
