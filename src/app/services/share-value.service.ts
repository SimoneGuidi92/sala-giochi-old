import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareValueService {

  difficolta: number = 150;

  constructor() { }

  setDifficolta(difficolta: number) {
    this.difficolta = difficolta;
  }

}
