
let GridX = 10
let GridY = 10


function drawGrid() {
  stroke(200);
  for (let i = 0; i <= GridX; i++) {
    let x = i * (width / GridX);
    line(x, 0, x, height);
  }
  for (let j = 0; j <= GridY; j++) {
    let y = j * (height / GridY);
    line(0, y, width, y);
  }
}


class Town {
  constructor(tilex, tiley, w, h) {
    this.tilex = tilex;
    this.tiley = tiley;
    this.w = w;
    this.h = h;
    this.x = 0;
    this.y = 0;

  } convertToPixels() {
    this.x = this.tilex * (width / GridX);
    this.y = this.tiley * (height / GridY);
    this.pixelW = this.w * (width / GridX);
    this.pixelH = this.h * (height / GridY);

  } draw() {
    this.convertToPixels();
    rect(this.x, this.y, this.pixelW, this.pixelH);
  }   
}

class Path {
  constructor(lst) {
    this.startTileX = lst[0][0];
    this.startTileY = lst[0][1];
    this.endTileX = lst[1][0];
    this.endTileY = lst[1][1];

    this.listofpoints = lst;
  }

  convertToPixelsPath(gridcoord, multi) {
    return gridcoord * multi;
  }

  draw() {
    strokeWeight(4);
    for (let i = 0; i < this.listofpoints.length - 1; i++) {
      let x1 = this.convertToPixelsPath(this.listofpoints[i][0], (width / GridX)) + width / 2;
      let y1 = this.convertToPixelsPath(this.listofpoints[i][1], (height / GridY)) + height / 2;
      let x2 = this.convertToPixelsPath(this.listofpoints[i + 1][0], (width / GridX)) + width / 2;
      let y2 = this.convertToPixelsPath(this.listofpoints[i + 1][1], (height / GridY)) + height / 2;
      line(x1, y1, x2, y2);
    }
    strokeWeight(1);    

  }
}

let path1 = new Path([[2, 3], [5, 5], [7, 2]]);


let Townlist = [];
let block1 = new Town(2, 3, 1, 1);
let block2 = new Town(5, 5, 1, 1);
let block3 = new Town(7, 2, 1, 1);
Townlist.push(block1);
Townlist.push(block2);
Townlist.push(block3);


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  drawGrid();

  for (let town of Townlist) {
    town.draw();
  }
  path1.draw();
}
