const canvas = document.getElementById("myCanvas");
//? Why below line commented ?? Read learning number 1 from learnings.txt
// canvas.height = window.innerHeight;
canvas.width = 200;

// COntect to handel everything with car
const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);

animate();

function animate() {
  car.update(road.borders);
  canvas.height = window.innerHeight;

  ctx.save();
  ctx.translate(0, -car.y + canvas.height * 0.75);

  road.draw(ctx);
  car.draw(ctx);
  ctx.restore();
  //   Calls animate method again and again which gives illusion of movement
  requestAnimationFrame(animate);
}
