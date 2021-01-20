import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

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

const gravity = 0.01
const friction=0.99
const power=10

let Particles
Particles = []
addEventListener('click', event => {
  let particleCount = 400
  mouse.x = event.clientX
  mouse.y = event.clientY
  const angleIncrement=Math.PI*2/particleCount
  for (let i = 0; i < particleCount; i++) {
    Particles.push(new Circle(mouse.x,mouse.y,2,`hsl(${Math.random()*360},50%,50%)`,{x:Math.cos(angleIncrement *i)*Math.random()*power,y:Math.sin(angleIncrement*i)*Math.random()*power}))
  }
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
class Circle {
  constructor(x, y, radius, color,velocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color,
      this.velocity = velocity
      this.alpha=1
  }
 

  draw () {
    c.save()
    c.globalAlpha=this.apha
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
    c.restore()
  }

  update() {
    this.draw()
  
    this.velocity.x *= friction
    this.velocity.y*=friction
    this.velocity.y+=gravity
    this.x += this.velocity.x
    this.y += this.velocity.y
    this.alpha-=0.004
  
  }
}

// Implementation
// let Particles
function init() {
  // Particles = []

  for (let i = 0; i < 400; i++) {
    // objects.push()
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle='rgba(0,0,0,0.05)'
  c.fillRect(0, 0, canvas.width, canvas.height)

  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  Particles.forEach((Particle,i )=> {
    if (Particle.alpha>0) {
      Particle.update()
    } else {
      Particles.splice(i,1)
    }
  
  })
}

// init()
animate()


