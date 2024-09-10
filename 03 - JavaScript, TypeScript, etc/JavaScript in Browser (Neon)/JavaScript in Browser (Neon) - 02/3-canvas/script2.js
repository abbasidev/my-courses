//// استفاده از شی گرایی

let canves = document.querySelector("canvas");

canves.width = window.innerWidth;
canves.height = window.innerHeight;

let c = canves.getContext("2d");

class Ball {
  constructor(x, y) {
    this.baseR = 20;
    this.r = this.baseR;
    this.x = x || randomInt(0 + this.r, innerWidth - this.r);
    this.y = y || randomInt(0 + this.r, innerHeight - this.r);
    this.vx = (Math.random() - 0.5) * 15;
    this.vy = (Math.random() - 0.5) * 15;
    this.draw();
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    c.fillStyle = "#222";
    c.fill();
  }
  update() {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.vx = -this.vx;
    }
    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.vy = -this.vy;
    }

    this.x += this.vx;
    this.y += this.vy;
    this.draw();
  }
}

let balls = [];
for (let i = 0; i < 2; i++) {
  balls.push(new Ball());
}

function animate() {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  balls.forEach(function (ball) {
    ball.update();
  });
  requestAnimationFrame(animate);
}

addEventListener("click", function (e) {
  balls.push(new Ball(e.clientX, e.clientY));
});

addEventListener("mousemove", function (e) {
  balls.forEach(function (ball) {
    let distance = Math.sqrt(
      Math.pow(e.clientX - ball.x, 2) + Math.pow(e.clientY - ball.y, 2)
    );

    if (distance < 100 && ball.r < ball.baseR * 4) {
      ball.r += 1;
    } else if (ball.r > ball.baseR) {
      ball.r -= 1;
    }
  });
});

addEventListener("resize", function () {
  canves.width = innerWidth;
  canves.height = innerHeight;
});

animate();

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
