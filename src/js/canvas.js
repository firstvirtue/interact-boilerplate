import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
c.scale(2, 2);

canvas.width = innerWidth
canvas.height = innerHeight

let indicator;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

class Indicator {
  constructor() {
    this.bars = [];

    this.length = 120;
    this.unit = 5;
  }

  resize() {

  }

  init() {
    for (let i = 0; i < this.length; i++) {
      const bar = new Bar(this.length, this.unit, (this.length * this.unit / 2) + (i * this.unit));
      this.bars.push(bar);
    }
  }

  draw(c) {
    this.bars.forEach(el => {
      el.draw(c);
      el.update();
    })
  }
}

class Bar {
  constructor(length, unit, x) {
    this.unit = unit;
    this.length = length;

    this.tall = Math.random() * 10 + 5;
    this.y = 600;
    this.x = x;
    this.speed = 2;
    this.cur = 0;
  }

  resize() {
    
  }

  init() {

  }

  update() {
    this.x = this.x - 2;

    if(this.x <= -(this.length * this.unit / 2)) {
      this.x = (this.length * this.unit / 2);
      this.cur = 0;
    }

    if(this.x < (this.length * this.unit / 2)) {
      if(this.cur <= this.tall) {
        this.cur += this.speed;
      }
    }
  }

  // just one
  draw(c) {
    // end
    // console.log(this.cur);
    c.fillRect(this.x, this.y, 2, this.cur);
  }
}

// Objects
class Object {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
  }
}

// Implementation
let objects
function init() {
  objects = []

  for (let i = 0; i < 400; i++) {
    // objects.push()
  }

  indicator = new Indicator();
  indicator.init();
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  // objects.forEach(object => {
  //  object.update()
  // })

  indicator.draw(c);
}

init()
animate()