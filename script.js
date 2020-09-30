'use strict';

class Figure {
    constructor(x1, y1, x2, y2, color) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.color = color;
    }
}

class Line extends Figure {
    draw(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

class Rect extends Figure {
    draw(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x1, this.y1, (this.x2-this.x1), (this.y2-this.y1));
    }
}

class Circle extends Figure {
    draw(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.2;
        ctx.beginPath();
        ctx.arc((this.x1 + (this.x2-this.x1)/2), (this.y1 + (this.y2-this.y1)/2), (this.x2-this.x1)/2, 0, 360, false);
        ctx.closePath();
        ctx.fill();
    }
}

class Canvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
    }
    add(figure) {
        for (let i = 0; i < arguments.length; i++) {
            arguments[i].draw(this.canvas);
        }
    }
}

let rect1 = new Rect(500,300,600,500,'lightgreen');
let rect2 = new Rect(550,250,700,350,'lightpink');
let rect3 = new Rect(650,300,750,400,'yellow');
let circle1 = new Circle(150,100,250,200,'lightblue');
let circle2 = new Circle(150, 150, 350, 350, 'lightblue');

let drawArea = new Canvas('my-canvas');

drawArea.add(circle1);
drawArea.add(circle2);

drawArea.add(rect1);
drawArea.add(rect2);
drawArea.add(rect3);

for (let x = 0; x < 800; x += 40) {
    drawArea.add(new Line(x,0,(x+20),20,'red'));
    drawArea.add(new Line((x+20),20,(x+40),0,'red'));
}

drawArea.add(new Line(150, 500, 400, 400, 'grey'));
drawArea.add(new Line(180, 530, 430, 430, 'grey'));
