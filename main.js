const canvas = document.getElementById("myCanvas");
//? Why below line commented ?? Read learning number 1 from learnings.txt
// canvas.height = window.innerHeight;
canvas.width = 200;

// COntect to handel everything with car
const ctx = canvas.getContext("2d");

const car = new Car(100, 100, 30, 50);

animate();

function animate() {
  car.update();
  canvas.height = window.innerHeight;

  car.draw(ctx);
  //   Calls animate method again and again which gives illusion of movement
  requestAnimationFrame(animate);
}
