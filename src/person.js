class Person extends ComponentAmalgamation {
  constructor() {
    super();
    //storing list of components that make up person
    this.head = new Head();
    this.body = new Body();
    this.legs = new Legs();
    this.components = [
      this.head,
      this.body,
      this.legs,
    ];
  }
  setSkinColor(skinColor) {
    //setting skin color of head & legs
    this.head.headColor = skinColor;
    this.legs.legColor = skinColor;
  }
  setHairColor(hairColor) {
    //setting hair color of hair, eyelashes, and eyebrows
    this.hair.hairColor = hairColor;
    this.eyelashes.eyelashColor = hairColor;
    this.eyeBrows.eyebrowColor = hairColor; 
  }
}

class Eyebrows extends ComponentAmalgamation {
  constructor() {
    super();
    //default eyebrow color == black
    this.eyebrowColor = (0, 0, 0);
    this.leftEyebrowAngle = 0;
    this.rightEyebrowAngle = 0;
    this.leftEyebrowPosition = createVector(-60, -15, 22);
    this.rightEyebrowPosition = createVector(-60, -15, -22);
    this.leftEyebrowSize = createVector(10, 5, 15);
    this.rightEyebrowSize = createVector(10, 5, 15);

    this.leftEyebrow = new Eyebrow(22, 20, 0);
    this.rightEyebrow = new Eyebrow(-22, -20, 0);
    this.components = [
      this.leftEyebrow,
      this.rightEyebrow,
    ];
  }
  
  drawItem() {
    fill(this.eyebrowColor)
    //left
    push();
    translate(this.leftEyebrowPosition);
    rotateY(20);
    rotateZ(this.leftEyebrowAngle);
    box(this.leftEyebrowSize.x, this.leftEyebrowSize.y, this.leftEyebrowSize.z);
    pop();
    //right
    push();
    translate(this.rightEyebrowPosition);
    rotateY(-20);
    rotateZ(this.rightEyebrowAngle);
    box(this.rightEyebrowSize.x, this.rightEyebrowSize.y, this.rightEyebrowSize.z);
    pop();
  }

  setYRotation(yRotation) {
    this.leftEyebrow.yRotation = yRotation;
    this.rightEyebrow.yRotation = -yRotation;
  }

  setZRotation(zRotation) {
    this.leftEyebrow.zRotation = zRotation;
    this.rightEyebrow.zRotation = -zRotation;
  }
}

class Eyebrow extends BoxComponent {
  constructor(horizontalPosition, yRotation, zRotation) {
    super();
    this.yRotation = yRotation;
    this.zRotation = zRotation;
    this.forwardPosition = horizontalPosition;
    this.horizontalPosition = 60;
    this.forwardPosition = -15;
  }
}

class Eyes extends ComponentAmalgamation {
  constructor() {
    super();
    this.forwardPosition = -60;
    this.leftEye = new Eye(22);
    this.rightEye = new Eye(-22);
    this.components = [
      this.leftEye,
      this.rightEye,
    ];
  }
}

class Eye extends ComponentAmalgamation {
  constructor(horizontalPosition) {
    super();
    this.horizontalPosition = horizontalPosition;
    this.pupil = new Pupil();
    this.components = [
      new Sclera(),
      this.pupil,
    ];
  }
}

class Sclera extends SphereComponent {
  constructor() {
    super();
    this.itemColor = color(255);
    this.size = 10;
  }
}

class Pupil extends SphereComponent {
  constructor() {
    super();
    this.size = 8;
    this.forwardPosition = -5;
  }
}

class Eyelashes extends ComponentAmalgamation {
  constructor() {
    super();
    this.forwardPosition = -55;
    this.verticalPosition = 5;
    this.leftEyelash = new Eyelash(25, -90);
    this.rightEyelash = new Eyelash(-25, 90);
    this.components = [
      this.leftEyelash,
      this.rightEyelash,
    ];
  }
}

class Eyelash extends CustomShapeComponent {
  constructor(horizontalPosition, yRotation) {
    super();
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = -15;
    this.x3 = 15;
    this.y3 = -7;
    this.yRotation = yRotation;
    this.horizontalPosition = horizontalPosition;
  }

  constructComponent() {
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
}

class Head extends ComponentAmalgamation {
  constructor() {
    super();
    this.eyes = new Eyes();
    this.eyelashes = new Eyelashes();
    this.eyebrows = new Eyebrows();
    this.headShape = new HeadShape();
    this.hair = new Hair();
    this.components = [
      this.eyes,
      this.eyebrows,
      this.eyelashes,
      this.headShape,
      this.hair,
    ]
  }
}

class HeadShape extends SphereComponent {
  constructor() {
    super();
    this.size = 50;
    this.itemScale = createVector(1.2, 1.5, 1.2);
    this.itemColor = color(255, 255, 225);
  }
}

class Hair extends SphereComponent {
  constructor() {
    super();
    this.size = 50;
    this.itemScale = createVector(1.2, 1.5, 1.5);
    this.forwardPosition = 10;
    this.verticalPosition = -7;
  }
}

class Body extends SphereComponent {
  constructor() {
    super();
    this.verticalPosition = 220;
    this.itemScale = createVector(1.5, 2, 1.2);
    this.size = 75;
  }
}

class Arms extends ComponentAmalgamation {
  constructor() {
    super();
    this.leftArm = new Arm();
    this.rightArm = new Arm();
    this.components = [
      this.leftArm,
      this.rightArm,
    ];
  }
}

class Arm extends CylinderComponent {
  constructor() {
    super();
  }
}

class Legs extends ComponentAmalgamation {
  constructor() {
    super();
    this.legColor = color(255, 255, 225);
    this.leftLeg = new Leg(75, 50);
    this.rightLeg = new Leg(-75, -50);
    this.components = [
      this.leftLeg,
      this.rightLeg,
    ]
  }
}

class Leg extends CylinderComponent {
  constructor(forwardPosition, zRotation) {
    super();
    this.itemColor = color(255, 255, 225);
    this.radius = 25;
    this.itemHeight = 125;
    this.xRotation = 90;
    this.forwardPosition = -100;
    this.verticalPosition = 300;
    this.horizontalPosition = forwardPosition;
    this.zRotation = zRotation;
  }
}
