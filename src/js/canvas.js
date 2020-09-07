import utils from './utils'
import Vector from './vector'
import Blob from './blob'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const devicePixelRatio = window.devicePixelRatio || 1;

const w = 400
const h = 640

canvas.style.width = w + 'px'
canvas.style.height = h + 'px'

canvas.width = w * devicePixelRatio
canvas.height = h * devicePixelRatio

c.scale(devicePixelRatio, devicePixelRatio);

let indicator;

const mouse = {
  x: document.documentElement.clientWidth / 2,
  y: document.documentElement.clientHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

const blob = new Blob(c);

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = document.documentElement.clientWidth
  canvas.height = document.documentElement.clientHeight

  init()
})

// document.querySelector('.btn--bezier').addEventListener('click', () => {
//   indicator.setState('bezier');
// })
// document.querySelector('.btn--linear').addEventListener('click', () => {
//   indicator.setState('default');
// })

class Indicator {
  constructor() {
    this.bars = [];
    this.length = 92; // window.width / unit
    this.unit = 8;
    this.state = 'default';
  }

  resize() {

  }

  init() {
    for (let i = 0; i < this.length; i++) {
      const bar = new Bar(this.length, this.unit, (document.documentElement.clientWidth * 0.7) + (i * this.unit));
      this.bars.push(bar);
    }
  }

  setState(state) {
    this.state = state;
  }

  draw(c) {
    c.beginPath();
    c.moveTo(this.bars[0].position.x, this.bars[0].position.y);

    this.bars.forEach((el, i) => {                            
      if(this.state === 'bezier') {
        el.updateCircle(i);
        el.drawLine(c);
      } else {
        el.update();
        el.draw(c);
      }
    })
    
    c.fill();
  }
}

class Bar {
  constructor(length, unit, x) {
    this.unit = unit;
    this.length = length;

    this.height = Math.random() * 10 + 5;
    this.baroffset = 0.4;
    this.currentHeight = 1;

    this.position = new Vector(x, 600);
    this.velocity = new Vector(0, -1 * (Math.random() + 10));
    this.acceleration = new Vector(0, 0);
    this.destination = new Vector(0, 0);
  }

  resize() {
     
  }

  init() {

  }

  update() {
    // add power
    this.position.x = this.position.x - 2;

    // 초기화
    if(this.position.x <= 0) {
      this.position.x = (this.length * this.unit);
      this.currentHeight = 1;
    }

    // Height
    if(this.position.x < (document.documentElement.clientWidth / 2)) {
      if(this.currentHeight <= this.height) {
        this.currentHeight += this.baroffset;
      }
    }
  }
  
  // just one
  draw(c) {
    // end
    // console.log(this.currentHeight);
    c.fillRect(this.position.x, this.position.y, 2, this.currentHeight);
  }

  updateBezier() {
    this.integrate(0.5 * 0.8)
  }

  // just one
  drawBezier(c) {
    c.lineTo(this.position.x, this.position.y);
    // console.log(this.position);
  }

  integrate(duration) {
    this.position.addScaledVector(this.velocity, duration);
  }

  updateCircle(idx) {
    this.destination.x = Math.cos(idx / this.length * 360) * 100 + 200;
    this.destination.y = Math.sin(idx / this.length * 360) * 100 + 200;

    const sub = this.destination.subtract(this.position);
    const step = sub.magnitude() * 0.03 * 0.4;
    sub.normalize();

    // Add power
    const power = new Vector(sub.x * step, sub.y * step);
    this.position = this.position.add(power);
    
    // Interpolation lerp
    // const power = new Vector(this.lerp(this.position.x, this.destination.x, 0.03 * 0.4), this.lerp(this.position.y, this.destination.y, 0.03 * 0.4))
    // this.position = power;
  }
  
  drawLine(c) {
    c.lineTo(this.position.x, this.position.y);
    // c.fillRect(this.position.x, this.position.y, 2, this.currentHeight);
  }

  lerp(min, max, fraction) { return (max - min) * fraction + min }
}

// Objects
class Object {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  // draw() {
    // c.beginPath()
    // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    // c.fillStyle = this.color
    // c.fill()
    // c.closePath()
  // }

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

  c.save();
  c.setTransform(1, 0, 0, 1, 0, 0);
  blob.func(canvas.width/2, canvas.height/2 - 100, canvas.width * 0.8);
  // blob.drawGuideLine(canvas.width/2, canvas.height/2 - 100, canvas.width * 0.8)
  c.restore()

  c.fillStyle = '#495057'
  indicator.draw(c);
}

init()
animate()