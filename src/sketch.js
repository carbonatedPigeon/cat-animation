function setup() {
  let wdth = 600;
  let hght = 600;
  createCanvas(wdth, hght, WEBGL);
  let fov = 60.0;  // 60 degrees FOV
  perspective(PI * fov / 180.0, wdth / hght, 0.1, 2000);
}

function draw() {
  background(210, 235, 222);
  camera(-500, 0, 0, 0, 0, 0, 0, 1, 0);

  ambientLight(100, 100, 100);

  orbitControl(10, 10, 10);

  // set light position
  pointLight(255, 255, 255, -1500, -1000, -700)

  angleMode(DEGREES);

  //noStroke();
  push();
  // setUpCat();
  // rotateY(-50);
  // rotateZ(15);
  // rotateX(10);
  // // cat();
  rotateY(180);
  pop();
  let item = new Chair();
  item.drawItem();

}