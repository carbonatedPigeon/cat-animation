class Person extends ComponentAmalgamation {
  constructor() {
    super();
    //storing list of components that make up person
    this.head = new Head();
    this.body = new Body();
    this.legs = new Legs();
    this.arms = new Arms();
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

class Eyebrows extends YSymmetricCoupledComponents {
  constructor() {
    super();
    this.forwardPosition = -60;
    this.verticalPosition = -15;
    this.left = new Eyebrow(22, 20, 0);
    this.right = new Eyebrow(-22, -20, 0);
    this.components = [
      this.left,
      this.right,
    ];
  }  
}

class Eyebrow extends BoxComponent {
  constructor(horizontalPosition, yRotation, zRotation) {
    super();
    this.itemDepth = 10;
    this.itemHeight = 5;
    this.itemWidth = 15;
    this.yRotation = yRotation;
    this.zRotation = zRotation;
    this.horizontalPosition = horizontalPosition;
  }
}

class Eyes extends YSymmetricCoupledComponents {
  constructor() {
    super();
    this.forwardPosition = -60;
    this.left = new Eye(22);
    this.right = new Eye(-22);
    this.components = [
      this.left,
      this.right,
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

class Eyelashes extends YSymmetricCoupledComponents {
  constructor() {
    super();
    this.forwardPosition = -55;
    this.verticalPosition = 5;
    this.left = new Eyelash(25, -90);
    this.right = new Eyelash(-25, 90);
    this.components = [
      this.left,
      this.right,
    ];
  }
}

class Eyelash extends Component {
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

  drawShape() {
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
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
    this.itemTexture = shirtTexture;
    this.verticalPosition = 220;
    this.itemScale = createVector(1.5, 2, 1.2);
    this.size = 75;
  }
}

class Arms extends YSymmetricCoupledComponents {
  constructor() {
    super();
    this.left = new Arm();
    this.right = new Arm();
    this.components = [
      this.left,
      this.right,
    ];
  }
}

class Arm extends CylinderComponent {
  constructor() {
    super();
  }
}

class Legs extends YSymmetricCoupledComponents {
  constructor() {
    super();
    this.forwardPosition = -100;
    this.verticalPosition = 300;
    this.left = new Leg(75, 50);
    this.right = new Leg(-75, -50);
    this.components = [
      this.left,
      this.right,
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
    this.horizontalPosition = forwardPosition;
    this.zRotation = zRotation;
  }
}
