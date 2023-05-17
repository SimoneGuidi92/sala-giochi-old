import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
// // import { log } from 'console';
// // import { Observable, fromEvent } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { map, filter, scan, switchMap, startWith, distinctUntilChanged, share, withLatestFrom, skip, tap, takeWhile } from 'rxjs/operators';
// import { Observable, Subject, asapScheduler, pipe, of, from,
//   interval, merge, fromEvent, BehaviorSubject, generate, combineLatest, animationFrame } from 'rxjs'
// // import 'rxjs/Rx';
// // import 'rxjs/add/operator/map';
// import { DIRECTIONS, FPS, INITIAL_DIRECTION, POINTS_PER_APPLE, Point2D, SNAKE_LENGTH, SPEED, createCanvasElement } from 'src/assets/const-canvas/base-prop-func';
import { Observable, BehaviorSubject, animationFrameScheduler } from '../../../../assets/imports/rxjs';
import { DIRECTIONS, SNAKE_LENGTH, FPS, APPLE_COUNT, POINTS_PER_APPLE } from '../../../../assets/imports/constants';
import { Key, Point2D, Scene } from '../../../../assets/imports/types';

import {
  createCanvasElement,
  renderScene,
  renderApples,
  renderSnake,
  renderScore,
  renderGameOver,
  getRandomPosition,
  checkCollision,
  removeCanvasElement
} from '../../../../assets/imports/canvas';

import {
  isGameOver,
  nextDirection,
  move,
  eat,
  generateSnake,
  generateApples
} from '../../../../assets/imports/utils';
import { distinctUntilChanged, filter, fromEvent, map, interval, scan, startWith, share, withLatestFrom, skip, tap, combineLatest, animationFrame, takeWhile } from 'rxjs';
import { ShareValueService } from 'src/app/services/share-value.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  @ViewChild('snakeDiv', { static: true }) snakeDivTs!: ElementRef;

  canvas: any = null;
  score: any = 0;
  speed = this.shareService.difficolta;
  ticks$ = interval(this.speed)
  speedString = "Facile";
  // prova = this.shareService.difficolta;

  constructor(private shareService: ShareValueService, private elementRef: ElementRef) {
    if(this.speed === 150) {
      this.speedString = "Facile";
    }
    else if(this.speed === 100) {
      this.speedString = "Media";
    }
    else if(this.speed === 50) {
      this.speedString = "Difficile";
    }
    else if(this.speed === 25) {
      this.speedString = "Impossibile!";
    }
  }

  ngOnDestroy(): void {
    // removeCanvasElement();
    this.canvas.remove();
    // this.elementRef.nativeElement.remove();
  }

  ngOnInit(): void {
    // window.location.reload();
        // throw new Error('Method not implemented.');
        /**
     * Crea un nuovo elemento canvas e lo appende alla pagina
     */
    this.canvas = createCanvasElement();
    let divElement: HTMLElement = this.snakeDivTs.nativeElement;
    divElement.appendChild(this.canvas);
    // let divSnake = document.getElementById('snake-content');
  //   if(divSnake) {
  //     divSnake.appendChild(this.canvas);
  //     divSnake.style.backgroundColor = '#F2F7FC';
  //     divSnake.style.width = '100%';
  //     divSnake.style.height = '100%';
  //   }
    let ctx = this.canvas.getContext('2d');
    // document.body.appendChild(this.canvas);

    /**
     * Valore iniziale della direzione del serpente
     */
    const INITIAL_DIRECTION = DIRECTIONS[Key.RIGHT];

    /**
     * Determina la velocita del serpente
     */
    // let ticks$ = interval(this.speed / 60, animationFrameScheduler).pipe();
    // let ticks$ = interval(this.speed)

    /**
     * Traccia interazioni generali dell'utente con la pagina
     */
    let click$ = fromEvent(document, 'click');
    let keydown$: Observable<any> = fromEvent(document, 'keydown');

    /**
     * Cambio di direzione del serpente controllando l'ultima freccia utilizzata dall'utente
     */
    let direction$ = keydown$.pipe(
      map((event: KeyboardEvent) => DIRECTIONS[event.keyCode]),
      filter((direction: any) => !!direction),
      scan(nextDirection),
      startWith(INITIAL_DIRECTION),
      distinctUntilChanged()
    );

    /**
     * Meccanismo di trasmissione utilizzato per notificare agli abbonati le collisioni tra il serpente e le mele
     */
    let length$ = new BehaviorSubject<number>(SNAKE_LENGTH);

    /**
     * Accumula la lunghezza del serpente
     */
    let snakeLength$ = length$.pipe(
      scan((step, snakeLength) => snakeLength + step),
      share()
    );

    /**
     * Score dell'utente
     */
    // let score$ = snakeLength$.pipe(
    //   startWith(0),
    //   scan((score, _) => score + POINTS_PER_APPLE)
    // );

    /**
     * Accumula un array di body segments. Ogni segmento è rappresentato come una cella sulla griglia
     */
    let snake$: Observable<Array<Point2D>> = this.ticks$.pipe(
      withLatestFrom(direction$, snakeLength$, (_, direction, snakeLength) => [direction, snakeLength]),
      scan(move, generateSnake()),
      share()
    );

    /**
     * Lista di mele
     */
    let apples$ = snake$.pipe(
      scan(eat, generateApples()),
      distinctUntilChanged(),
      share()
    );

    /**
     * Utilizzato per trasmettere le collisioni per aggiornare il punteggio e aggiungere un nuovo segmento al serpente
     */
    let appleEaten$ = apples$.pipe(
      skip(1),
      tap(() => length$.next(POINTS_PER_APPLE)),
    ).subscribe(() => {
      this.score = this.score + 1;
    });

    /**
     * Logica di base del gioco che restituisce un Osservabile della scena. Questo sarà per renderizzare il gioco sulla tela mentre si svolge
     */
    // let scene$ = combineLatest(snake$, apples$, score$, (snake, apples, score) => ({ snake, apples, score }));
    let scene$ = combineLatest(snake$, apples$, (snake, apples) => ({ snake, apples }));

    /**
     * Questo flusso si occupa di rendere il gioco mantenendo 60 FPS
     */
    let game$ = interval(1000 / FPS, animationFrame).pipe(
      withLatestFrom(scene$, (_, scene) => scene),
      takeWhile(scene => !isGameOver(scene))

    ).subscribe({
      next: (scene) => renderScene(ctx, scene),
      complete: () => renderGameOver(ctx)
    });

  }



}
