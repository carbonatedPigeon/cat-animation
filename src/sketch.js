function setup() {
  let wdth = 600;
  let hght = 600;
  createCanvas(wdth, hght, WEBGL);
  let fov = 60.0;  // 60 degrees FOV
  perspective(PI * fov / 180.0, wdth / hght, 0.1, 2000);
}

function draw() {
  background(210, 235, 222);
  camera(-500, -200, 0, 0, 0, 0, 0, 1, 0);

  ambientLight(100, 100, 100);

  orbitControl(10, 10, 10);

  // set light position
  pointLight(255, 255, 255, -1500, -1000, -700)

  angleMode(DEGREES);

  noStroke();
  push();
  // setUpCat();
  //rotateY(180);
  // rotateZ(15);
  // rotateX(10);
  // let cat = new Cat();
  // cat.drawItem();

  // let chair = new Chair();
  // chair.drawItem();

  // let couch = new Couch();
  // couch.drawItem();

  // let cup = new Cup();
  // cup.drawItem();

  // let person = new Person();
  // person.drawItem();

  // let table = new Table();
  // table.drawItem();

  // let room = new Room();
  // room.drawItem();

  // let tv = new TV();
  // tv.drawItem();

  // let window = new Window();
  // window.drawItem();

  pop();

  let animationConductor = new AnimationConductor();
  animationConductor.setScene();
}


class AnimationConductor{
  constructor() {
    this.person = new Person();
    this.cat = new Cat();
    this.tables = {
      'dining_table': new Table(),
      'tv_stand': new Table(),
      'night_stand': new Table(),
    };
    this.chairs = [
      new Chair(),
      new Chair(),
      new Chair(),
      new Chair(),
    ]
    this.window = new Window();
    this.tv = new TV();
    this.cup = new Cup();
    this.couch = new Couch();
    this.room = new Room();
  }

  setScene() {
    //sets inital position of all objects in scene
    //setting up person values
    this.person.forwardPosition = 175;
    this.person.verticalPosition = -20;
    this.person.horizontalPosition = 175;
    this.person.itemScale = createVector(0.5, 0.5, 0.5);
    this.person.yRotation = -110;
    this.person.drawItem();
    //setting up cat values
    this.cat.verticalPosition = 155;
    this.cat.itemScale = createVector(0.225, 0.225, 0.225);
    this.cat.yRotation = 90;
    this.cat.drawItem();
    //setting window values
    this.window.verticalPosition = 90;
    this.window.horizontalPosition = -700;
    this.window.itemScale = createVector(1.25, 1.5, 1);
    this.window.drawItem();
    //setting up tv stand
    this.tables['tv_stand'].forwardPosition = 450;
  }
}

class PersonConductor {
  /**
   * Class that controlls the movement of the person object
   */
  constructor() {

  }

  setScene() {
    push();
    translate(175, -20, 175);
    scale(0.5, 0.5, 0.5);
    rotateY(-110);
    this.person.drawItem();
    pop();
  }

}