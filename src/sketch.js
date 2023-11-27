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
  pointLight(255, 255, 255, 0, -500, 0);

  angleMode(DEGREES);

  noStroke();
  let item = new Couch();
  item.drawItem();

  let animationConductor = new AnimationConductor();
  //animationConductor.setScene();
}


class AnimationConductor{
  constructor() {
    this.person = new Person();
    this.cat = new Cat();
    this.tables = {
      'dining_table': new Table(),
      'tv_stand': new Table(),
      'end_table': new Table(),
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
    this.rug = new Rug();
    this.cups = {
      'dining_table_cup_1': new Cup(),
      'dining_table_cup_2': new Cup(),
      'end_table_cup': new Cup(),
    }
  }

  setScene() {
    //sets inital position of all objects in scene
    //setting up person values
    this.person.setItemPosition(40, -20, 75);
    this.person.itemScale = createVector(0.5, 0.5, 0.5);
    this.person.yRotation = -30;
    this.person.drawItem();
    //setting up cat values
    this.cat.setItemPosition(-500, 125, 400);
    this.cat.itemScale = createVector(0.3, 0.35, 0.3);
    this.cat.yRotation = -90;
    this.cat.drawItem();
    //setting window values
    this.window.setItemPosition(0, 0, -700);
    this.window.itemScale = createVector(1.25, 1.5, 1);
    this.window.yRotation = 90;
    this.window.itemColor = color(60);
    this.window.drawItem();
    //setting up tv stand
    this.tables['tv_stand'].setItemPosition(450, 150, -450)
    this.tables['tv_stand'].itemScale = createVector(1.5, 1, 4);
    this.tables['tv_stand'].drawItem();
    //setting up TV
    this.tv.setItemPosition(450, -50, -450);
    this.tv.itemScale = createVector(1, 1.5, 1.5);
    this.tv.drawItem();
    //setting up couch
    this.couch.setItemPosition(-460, 150, -460);
    this.couch.itemScale = createVector(2, 2, 2);
    this.couch.yRotation = 180;
    this.couch.drawItem();
    //setting up end table next to couch
    this.tables['end_table'].setItemPosition(-460, 115, -110);
    this.tables['end_table'].itemScale = createVector(2, 1.5, 2);
    this.tables['end_table'].drawItem();
    //setting up rug
    this.rug.setItemPosition(25, 250, -450)
    this.rug.yRotation = -90;
    this.rug.drawItem();
    //setting up cup on end table
    this.cups['end_table_cup'].setItemPosition(-420, 110, -175);
    this.cups['end_table_cup'].drawItem();
    //setting up dining table
    this.tables['dining_table'].setItemPosition(0, 100, 350);
    this.tables['dining_table'].itemScale = createVector(3, 1.6, 4)
    this.tables['dining_table'].drawItem();
    //setting up chairs
    //start with chair person is sitting on & going clockwise
    this.chairs[0].setItemPosition(45, 150, 80);
    this.chairs[0].yRotation = -30;
    this.chairs[0].drawItem();
    this.chairs[1].setItemPosition(125, 150, 350);
    this.chairs[1].drawItem();
    this.chairs[2].setItemPosition(0, 150, 625);
    this.chairs[2].yRotation = -90;
    this.chairs[2].drawItem();
    this.chairs[3].setItemPosition(-125, 150, 350);
    this.chairs[3].yRotation = 180;
    this.chairs[3].drawItem();
    //setting up other cups
    this.cups['dining_table_cup_1'].setItemPosition(175, 230, 200);
    this.cups['dining_table_cup_1'].zRotation = 90;
    this.cups['dining_table_cup_1'].yRotation = 15;
    this.cups['dining_table_cup_1'].drawItem();
    //drawing room
    this.room.setItemPosition(-40, 250, -60)
    this.room.itemScale = createVector(1.15, 1, 1.55);
    this.room.drawItem();

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