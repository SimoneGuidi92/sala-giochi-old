import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {


  canvas: any;
  ctx: any;
  blockSize: number = 10;
  width: number = 500;
  height: number = 500;
  score: number = 0;
  snake: any;
  apple: any;
  direction!: string;
  intervalId: any;

  constructor() { }

  ngOnInit() {
    this.canvas = document.getElementById("snakeCanvas");
    this.ctx = this.canvas.getContext("2d");

    this.initGame();
  }

  initGame() {
    this.score = 0;
    this.snake = [{x: 10, y: 10}, {x: 9, y: 10}, {x: 8, y: 10}];
    // this.snake.forEach((element: any, index: number) => {
    //   // element.x = (index + 1) * this.blockSize;
    //   // element.y = 10 * this.blockSize;
    //   element.x = Math.floor(this.snake[index].x * (this.width / this.blockSize)) * this.blockSize;
    //   element.y = Math.floor(this.snake[index].y * (this.height / this.blockSize)) * this.blockSize;
    // });
    this.apple = this.generateApple();
    this.direction = 'right';

    this.intervalId = setInterval(() => {
      this.update();
      this.draw();
    }, 100);
  }

  generateApple() {
    return {
      x: Math.floor(Math.random() * (this.width / this.blockSize)) * this.blockSize,
      y: Math.floor(Math.random() * (this.height / this.blockSize)) * this.blockSize
    };
  }

  update() {
    let head = {x: this.snake[0].x, y: this.snake[0].y};
    // this.snake.forEach((element: any, index: number) => {
    //   // element.x = (index + 1) * this.blockSize;
    //   // element.y = 10 * this.blockSize;
    //   element.x = Math.floor(this.snake[index].x * (this.width / this.blockSize)) * this.blockSize;
    //   element.y = Math.floor(this.snake[index].y * (this.height / this.blockSize)) * this.blockSize;
    // });
    head.x = Math.floor(this.snake[0].x / this.blockSize) * this.blockSize;
    head.y = Math.floor(this.snake[0].y / this.blockSize) * this.blockSize;
    // head.x = Math.floor(this.snake[0].x * (this.width / this.blockSize)) * this.blockSize,
    // head.y = Math.floor(this.snake[0].y * (this.height / this.blockSize)) * this.blockSize
    switch (this.direction) {
      case 'right':
        head.x += this.blockSize;
        break;
      case 'left':
        head.x -= this.blockSize;
        break;
      case 'up':
        head.y -= this.blockSize;
        break;
      case 'down':
        head.y += this.blockSize;
        break;
    }

    if (head.x === this.apple.x && head.y === this.apple.y) {
      this.score++;
      this.apple = this.generateApple();
    } else {
      this.snake.pop();
    }

    this.snake.unshift(head);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.apple.x, this.apple.y, this.blockSize, this.blockSize);

    this.ctx.fillStyle = 'green';
    this.snake.forEach((block: any) => {
      this.ctx.fillRect(block.x, block.y, this.blockSize, this.blockSize);
    });

    this.ctx.fillStyle = 'black';
    this.ctx.font = 'bold 20px Arial';
    this.ctx.fillText(`Score: ${this.score}`, 10, 25);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowRight':
        this.direction = 'right';
        break;
      case 'ArrowLeft':
        this.direction = 'left';
        break;
      case 'ArrowUp':
        this.direction = 'up';
        break;
      case 'ArrowDown':
        this.direction = 'down';
        break;
    }
  }

}
