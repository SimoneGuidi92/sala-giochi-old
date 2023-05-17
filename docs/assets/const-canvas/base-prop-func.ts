// Properties
export const COLS = 30;
export const ROWS = 30;
// export const BLOCK_SIZE = 20;
export const GAP_SIZE = 1;
export const CELL_SIZE = 10;
export const SNAKE_LENGTH = 5;
export const POINTS_PER_APPLE = 1;
export const SPEED = 50;
export const FPS = 60;
// export const CANVAS_WIDTH = COLS * (CELL_SIZE + GAP_SIZE) + GAP_SIZE;
// export const CANVAS_WIDTH = COLS * (CELL_SIZE + GAP_SIZE);
// export const CANVAS_HEIGHT = ROWS * (CELL_SIZE + GAP_SIZE);
export const CANVAS_WIDTH = 500;
export const CANVAS_HEIGHT = 500;
// Functions
export function createCanvasElement() {
  const canvas = document.createElement('canvas');
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  return canvas;
}

// Interfaces
export interface Point2D {
  x: number;
  y: number;
}

export interface Directions {
  [key: string]: Point2D;
}

export const DIRECTIONS: Directions = {
  // 'ArrowUp': {x: 0, y: -1},
  // 'ArrowDown': {x: 0, y: 1},
  // 'ArrowLeft': {x: -1, y: 0},
  // 'ArrowRight': {x: 1, y: 0}
  37: {x: -1, y: 0}, // Left Arrow
  39: {x: 1, y: 0}, // Right Arrow
  38: {x: 0, y: -1}, // Up Arrow
  40: {x: 0, y: 1} // Down Arrow
};
export const INITIAL_DIRECTION = DIRECTIONS[39];
// export const INITIAL_DIRECTION = ;


