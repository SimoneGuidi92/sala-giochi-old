import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ShareValueService } from 'src/app/services/share-value.service';

@Component({
  selector: 'app-options-modal',
  templateUrl: './options-modal.component.html',
  styleUrls: ['./options-modal.component.scss']
})
export class OptionsModalComponent implements OnInit {

  // difficolta = 150;
  @Output() difficoltaEmit: EventEmitter<number> = new EventEmitter<number>();
  difficolta: number = 150;

  // difficoltaGroup: FormGroup;

  constructor(private shareService: ShareValueService) {
    // this.difficoltaGroup = new FormGroup({

    // });
  }

  ngOnInit(): void {
  }

  selezionaDifficolta(difficolta: string) {
    if(difficolta == "facile") {
      this.difficolta = 150;
    }
    else if(difficolta === "media") {
      this.difficolta = 100;
    }
    else if(difficolta === "difficile") {
      this.difficolta = 50;
    }
    else if(difficolta === "impossibile") {
      this.difficolta = 25;
    }
    // this.difficoltaEmit.emit(this.difficolta);
    this.shareService.setDifficolta(this.difficolta);
  }

}
