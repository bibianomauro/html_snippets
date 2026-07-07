const IMAGE = document.querySelector("img");

const ctx = canvas.getContext("2d");

const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;

const ASPECT_RATIO = WINDOW_WIDTH / WINDOW_HEIGHT;

let width = WINDOW_WIDTH < IMAGE.width ? WINDOW_WIDTH : IMAGE.width;
let height = width / ASPECT_RATIO;

canvas.width = width;
canvas.height = height;

class Cell
{
  constructor(effect, x, y)
  {
    this.effect = effect;
    this.x = x;
    this.y = y;

    this.width = this.effect.cellWidth;
    this.height = this.effect.cellHeight;

    this.image = IMAGE;

    this.slideX = 0;
    this.slideY = 0;
    this.vx = 0;
    this.vy = 0;

    this.ease = 0.5;
    this.friction = 0.8;
  }

  draw(context)
  {
    context.drawImage(
      this.image,
      this.x + this.slideX,
      this.y + this.slideY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    // context.strokeRect(this.x, this.y, this.width, this.height);
  }

  update()
  {
    const dx = this.effect.mouse.x - this.x;
    const dy = this.effect.mouse.y - this.y;
    const distance = Math.hypot(dx, dy);
    if(distance < this.effect.mouse.radius)
    {
      const angle = Math.atan2(dy, dx);
      const force = 10 * distance / this.effect.mouse.radius;
      this.vx = force * Math.cos(angle);
      this.vy = force * Math.sin(angle);
    }
    this.slideX += (this.vx *= this.friction) - this.slideX * this.ease;
    this.slideY += (this.vy *= this.friction) - this.slideY * this.ease;
  }

}

class Effect
{
  constructor(canvas)
  {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.aspectRatio = this.width / this.height;

    this.resolutionX = 10;
    this.resolutionY = Math.floor(this.resolutionX / this.aspectRatio);

    this.cellWidth = this.width / this.resolutionX;
    this.cellHeight = this.height / this.resolutionY;

    this.imageGrid = this.createGrid();

    this.mouse = {
      x: undefined,
      y: undefined,
      radius: 100,
    };
    this.canvas.addEventListener("mousemove", e =>
    {
      this.mouse.x = e.offsetX;
      this.mouse.y = e.offsetY;
    })
    this.canvas.addEventListener("mouseleave", e =>
    {
      this.mouse.x = undefined;
      this.mouse.y = undefined;
    })
    this.canvas.addEventListener("touchmove", e =>
    {
      this.mouse.x = e.targetTouches[0].clientX;
      this.mouse.y = e.targetTouches[0].clientY;
    })
    this.canvas.addEventListener("touchend", e =>
    {
      this.mouse.x = undefined;
      this.mouse.y = undefined;
    })
  }

  createGrid()
  {
    const grid = [];
    for(let y = 0; y < this.height; y += this.cellHeight)
    {
      for(let x = 0; x < this.width; x += this.cellWidth)
      {
        grid.push(new Cell(this, x, y));
      }
    }
    return grid;
  }

  render(context)
  {
    for(let i = 0; i < this.imageGrid.length; ++i)
    {
      this.imageGrid[i].draw(context);
      this.imageGrid[i].update(context);
    }
  }
}

const effect = new Effect(canvas);


function animate()
{
  effect.render(ctx);

  requestAnimationFrame(animate);
}

animate();
