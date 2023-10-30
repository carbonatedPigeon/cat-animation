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
    this.leftEyebrowPosition = createVector(22, -15, 60);
    this.rightEyebrowPosition = createVector(-22, -15, 60);
    this.leftEyebrowSize = createVector(15, 5, 10);
    this.rightEyebrowSize = createVector(15, 5, 10);

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

class Eyes {
  constructor() {
    //white of eye variables
    this.eyePosition = createVector(22, 0, 55);
    this.eyeSize = 10;
    //pupil variables
    //default pupil color == black
    this.pupilColor = (0, 0, 0);
    this.pupilPosition = createVector(22, 0, 60);
    this.pupilSize = 8;
  }
  
  drawItem() {
    this.drawWhites();
    this.drawPupils();
  }
  
  drawPupils() {
    //left
    fill(this.pupilColor)
    push();
    translate(this.pupilPosition);
    sphere(this.pupilSize);
    pop();
    //right
    push();
    translate(-this.pupilPosition.x, this.pupilPosition.y, this.pupilPosition.z);
    sphere(this.pupilSize);
    pop();
  }
  
  drawWhites() {
      //filling in as white
      fill(255);
      push();
      //left
      translate(this.eyePosition);
      sphere(this.eyeSize);
      pop();
      //right
      push();
      translate(-this.eyePosition.x, this.eyePosition.y, this.eyePosition.z);
      sphere(this.eyeSize);
      pop();
    }
}

class Eyes2 extends ComponentAmalgamation {
  constructor() {
    this.leftEye = new Eye(0);
    this.rightEye = new Eye(0);
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
      new Eyelash(),
    ];
  }
}

class Sclera extends SphereComponent {
  constructor() {
    super();
  }
}

class Pupil extends SphereComponent {
  constructor() {
    super();
  }
}

class Eyelash extends CustomShapeComponent {
  constructor() {
    super();
  }
}

class Eyelashes {
  constructor() {
    //eyelash variables
    this.eyelashColor = (0, 0, 0);
    this.eyelashPosition = createVector(25, 5, 55);
    this.eyelashDimensions = (0, 0, 0, -15, 15, -7);
  }
  
  drawItem() {
    //left
    fill(this.eyelashColor)
    push();
    translate(this.eyelashPosition);
    triangle(0, 0, 0, -15, 15, -7);
    pop();
    //right
    push();
    translate(-this.eyelashPosition.x, this.eyelashPosition.y, this.eyelashPosition.z);
    rotateY(180);
    triangle(0, 0, 0, -15, 15, -7);
    pop();
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
    this.itemScale = createVector(1.5, 1.5, 1.2);
    this.verticalPosition = -10;
    this.horizontalPosition = -7;
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
    this.leftLeg = new Leg(75, -15);
    this.rightLeg = new Leg(-75, 15);
    this.leftLeg.forwardPosition = 75;
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
    this.forwardPosition = forwardPosition;
    this.verticalPosition = 300;
    this.horizontalPosition = 100;
    this.zRotation = zRotation;
  }
}
