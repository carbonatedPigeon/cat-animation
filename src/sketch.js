let time = 0;
let conductor;
function setup() {
  let wdth = 600;
  let hght = 600;
  createCanvas(wdth, hght, WEBGL);
  let fov = 60.0;  // 60 degrees FOV
  perspective(PI * fov / 180.0, wdth / hght, 0.1, 2000);
  conductor = new SceneConductor();
}

function draw() {
  ++time;
  background(210, 235, 222);
  camera(-900, -150, 0, 40, -20, 75, 0, 1, 0);

  ambientLight(100, 100, 100);


  orbitControl(50, 50, 50);

  debugMode();

  // set light position
  pointLight(255, 255, 255, 0, -500, 0);

  angleMode(DEGREES);

  noStroke();
  
  let item = new Cat();
  item.drawItem(); 

  // let newHead = new NewHead();
  // newHead.itemColor.setAlpha(255);
  // newHead.drawItem();

}
