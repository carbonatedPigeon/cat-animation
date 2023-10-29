/**
File used to set up cat object
*/

const POS_ONE_ANGLE = 40;

class Cat extends ComponentAmalgamation {
  constructor() {
    super();
    //setting up cat body parts
    this.head = new CatHead();
    this.body = new CatBody();
    this.frontLeftLeg = new CatLimbs(
      createVector(10, 270, 200),
      90,
      220
    );
    this.frontRightLeg = new CatLimbs(
      createVector(10, 270, -200),
      -270,
      -40
    );
    this.backLeftLeg = new CatLimbs(
      createVector(260, 270, 200),
      90,
      -220
    );
    this.backRightLeg = new CatLimbs(
      createVector(260, 270, -200),
      -270,
      40
    );
    this.tail = new CatTail();
    this.components = [
      this.head,
      this.body,
      this.frontLeftLeg,
      this.frontRightLeg,
      this.backLeftLeg,
      this.backRightLeg,
      this.tail,
    ];
  }
}

class CatHead extends ComponentAmalgamation {
  constructor() {
    super();
    this.dimensions = new CatHeadDimensions();
    this.ears = new CatEar();
    this.eyebrows = new CatEyebrow();
    this.eyes = new CatEye();
    this.jaw = new CatJaw(this.dimensions);
    this.headShape = new CatHeadShape(this.dimensions);
    this.components = [
      this.ears,
      this.eyebrows,
      this.eyes,
      this.jaw,
      this.headShape,
    ]
    this.forwardPosition = -200;
    this.verticalPosition = 100;
    this.itemScale = createVector(0.5, 0.5, 0.5);
    this.zRotation = -40;
  }

  drawItem() {
    push();
    translate(
      this.forwardPosition,
      this.verticalPosition,
      this.horizontalPosition
    );
    scale(this.itemScale);
    rotateZ(this.zRotation);
    for (let c in this.components) {
      this.components[c].drawItem();
    }
    scale(1, 1, -1);
    for (let c in this.components) {
      this.components[c].drawItem();
    }
    pop();
  }
}

class CatEye extends ComponentAmalgamation {
  constructor() {
    super();
    this.sclera = new CatEyeSclera();
    this.pupil = new CatPupil();
    this.components = [
      this.pupil,
      this.sclera
    ];
    this.forwardPosition = 125;
    this.verticalPosition = 15;
    this.horizontalPosition = 80;
  }
}

class CatEyeSclera extends SphereComponent {
  constructor() {
    super();
    this.size = 50;
    //color is red
    this.itemColor = color(255, 50, 50);
  }
}

class CatPupil extends EllipsoidComponent  {
  constructor() {
    super();
    this.itemDepth = 20;
    this.itemHeight = 30;
    this.itemWidth = 10;
    //position relative to sclera
    this.forwardPosition = -25;
    this.verticalPosition = -25
    this.horizontalPosition = 5;
    this.zRotation = 50;
    this.yRotation = 10;
  }
}

class CatEyebrow extends BoxComponent {
  constructor() {
    super();
    this.yRotation = 20;
    this.zRotation = -40;
    this.xRotation = 20;
    this.itemDepth = 20;
    this.itemHeight = 55;
    this.itemWidth = 90;
    this.forwardPosition = 150;
    this.verticalPosition = -20;
    this.horizontalPosition = 75;
  }
}

class CatBody extends EllipsoidComponent {
  constructor() {
    super();
    this.itemColor = color(80, 90, 100);
    this.forwardPosition = 150;
    this.verticalPosition = 250;
    this.horizontalPosition = 0;
    this.itemScale = createVector(0.9, 1, 1);
    this.itemDepth = 300;
    this.itemHeight = 175;
    this.itemWidth = 250;
  }
}

class CatLimbs extends ComponentAmalgamation {
  constructor(position, xRotation, zRotation) {
    super();
    this.xRotation = xRotation;
    this.zRotation = zRotation;
    this.forwardPosition = position.x;
    this.verticalPosition = position.y;
    this.horizontalPosition = position.z;
    this.components = [
      new CatPaw(),
      new CatLeg(),
    ];
  }
}

class CatPaw extends SphereComponent {
  constructor() {
    super();
    this.size = 27;
    this.verticalPosition = -100;
    this.itemColor = color(80, 90, 100);
  }
}

class CatLeg extends CylinderComponent {
  constructor() {
    super();
    this.radius = 27;
    this.itemHeight = 200;
    this.itemColor = color(80, 90, 100);
  }
}

class CatEar extends CustomShapeComponent {
  constructor() {
    super();
    this.itemColor = color(50);
    this.itemScale = createVector(1.5, 1.1, 1.2);
    this.forwardPosition = 200;
    this.verticalPosition = -10;
    this.horizontalPosition = -170;
    this.xRotation = 15;
    this.zRotation = 5;
  }
    
  constructComponent() {
    const point = [5, -100, 30];

    beginShape();
    vertex(0, 100, 0);
    vertex(20, 85, 5);
    vertex(point[0], point[1], point[2]);
    endShape(CLOSE);

    beginShape();
    vertex(20, 85, 5);
    vertex(40, 70, 13);
    vertex(point[0], point[1], point[2]);
    endShape(CLOSE);

    beginShape();
    vertex(40, 70, 13);
    vertex(60, 55, 35);
    vertex(point[0], point[1], point[2]);
    endShape(CLOSE);

    beginShape();
    vertex(60, 55, 35);
    vertex(65, 40, 55);
    vertex(point[0], point[1], point[2]);
    endShape(CLOSE);

    beginShape();
    vertex(65, 40, 55);
    vertex(60, 30, 75);
    vertex(point[0], point[1], point[2]);
    endShape(CLOSE);

    beginShape();
    vertex(60, 30, 75);
    vertex(50, 20, 95);
    vertex(point[0], point[1], point[2]);
    endShape(CLOSE);

    beginShape();
    vertex(50, 20, 95);
    vertex(30, 10, 105);
    vertex(point[0], point[1], point[2]);
    endShape(CLOSE);

    beginShape();
    vertex(30, 10, 105);
    vertex(10, 0, 105);
    vertex(point[0], point[1], point[2]);
    endShape(CLOSE);
  }
}

class CatTail extends CustomShapeComponent {
  constructor() {
    super();
    this.forwardPosition = 450;
    this.verticalPosition = 100;
    this.itemScale = createVector(1, 1, 1.6);
    this.zRotation = 210;
    this.yRotation = 180;
  }
  
  constructComponent() {
    push();
    translate(-13, -100, 0);
    rotateZ(-10);
    cylinder(20, 100, 9 , 1);
    pop();

    push();
    translate(-5, -50, 0);
    rotateZ(-5);
    cylinder(20, 100, 9 , 1);
    pop();

    push();
    rotateZ(10);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-2, 15, 0);
    rotateZ(15);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-6, 30, 0);
    rotateZ(15);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-10, 45, 0);
    rotateZ(20);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-16, 55, 0);
    rotateZ(35);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-23, 65, 0);
    rotateZ(40);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-30, 72, 0);
    rotateZ(50);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-40, 80, 0);
    rotateZ(60);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-50, 87, 0);
    rotateZ(55);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-55, 91, 0);
    rotateZ(40);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-60, 97, 0);
    rotateZ(40);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-65, 105, 0);
    rotateZ(25);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-70, 115, 0);
    rotateZ(20);
    cylinder(20, 20, 9 , 1);
    pop();


    push();
    translate(-73, 125, 0);
    rotateZ(10);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-75, 135, 0);
    rotateZ(5);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-75, 155, 0);
    rotateZ(0);
    cylinder(20, 20, 9 , 1);
    pop();

     push();
    translate(-73, 165, 0);
    rotateZ(-10);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-70, 175, 0);
    rotateZ(-20);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-65, 185, 0);
    rotateZ(-30);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-60, 195, 0);
    rotateZ(-40);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-55, 200, 0);
    rotateZ(-50);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-50, 205, 0);
    rotateZ(-60);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-40, 210, 0);
    rotateZ(-70);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-30, 213, 0);
    rotateZ(-80);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-20, 215, 0);
    rotateZ(-90);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(-10, 215, 0);
    rotateZ(-90);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(0, 215, 0);
    rotateZ(-90);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(10, 215, 0);
    rotateZ(-95);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(20, 213, 0);
    rotateZ(-105);
    cylinder(20, 20, 9 , 1);
    pop();

    push();
    translate(30, 212, 0);
    sphere(20, 9, 3);
    pop();
  }
}

class CatHeadDimensions {
  constructor() {
    this.heightOfNose = 50;
    this.bottomWidthOfSnout = 40;
    this.heightOfSnought = 20;
    this.topWidthOfSnout = 20;
  }
}

class CatJaw extends CustomShapeComponent {
  constructor(catHeadDimensions) {
    super();
    this.itemColor = color(50);
    this.dimensions = catHeadDimensions;
  }
  
  constructComponent() {
    const HEIGHT_OF_NOSE = this.dimensions.heightOfNose;
    const BOTTOM_WIDTH_OF_SNOUT = this.dimensions.bottomWidthOfSnout;
    //lower jaw
    const v124 =[-20,  HEIGHT_OF_NOSE + 70, BOTTOM_WIDTH_OF_SNOUT - 10];
    const v125 = [-20, HEIGHT_OF_NOSE + 90,  BOTTOM_WIDTH_OF_SNOUT - 10];

    //upper right, counter
    beginShape();
    vertex(v124[0] + 5, v124[1], v124[2]);
    vertex(v124[0] , v124[1], 0);
    vertex(v125[0], v125[1], 0);
    vertex(v125[0] + 5, v125[1], v125[2]);
    endShape(CLOSE);

    const v126 = [0, HEIGHT_OF_NOSE + 70, BOTTOM_WIDTH_OF_SNOUT + 10];
    const v127 = [0, HEIGHT_OF_NOSE + 90, BOTTOM_WIDTH_OF_SNOUT + 10];
    //upper left, counter
    beginShape();
    vertex(v124[0] + 5, v124[1], v124[2]);
    vertex(v125[0] + 5, v125[1], v125[2]);
    vertex(v127[0], v127[1], v127[2]);
    vertex(v126[0], v126[1], v126[2]);
    endShape(CLOSE);

    const v128 = [15, HEIGHT_OF_NOSE + 70, BOTTOM_WIDTH_OF_SNOUT + 15];
    const v129 = [15, HEIGHT_OF_NOSE + 90, BOTTOM_WIDTH_OF_SNOUT + 15];
    //upper left, counter
    beginShape();
    vertex(v126[0], v126[1], v126[2]);
    vertex(v127[0], v127[1], v127[2]);
    vertex(v129[0], v129[1], v129[2]);
    vertex(v128[0], v128[1], v128[2]);
    endShape(CLOSE);

    const v130 = [100, HEIGHT_OF_NOSE + 70, BOTTOM_WIDTH_OF_SNOUT + 15];
    const v131 = [100, HEIGHT_OF_NOSE + 90, BOTTOM_WIDTH_OF_SNOUT + 15];
    //upper left, counter
    beginShape();
    vertex(v128[0], v128[1], v128[2]);
    vertex(v129[0], v129[1], v129[2]);
    vertex(v131[0], v131[1], v131[2]);
    vertex(v130[0], v130[1], v130[2]);
    endShape(CLOSE);

    const v132 = [-5, HEIGHT_OF_NOSE + 110, 0];
    const v133 = [-5, HEIGHT_OF_NOSE + 110, BOTTOM_WIDTH_OF_SNOUT - 10];
    //upper left, counter
    beginShape();
    vertex(v125[0], v125[1], 0);
    vertex(v125[0] + 5, v125[1], v125[2]);
    vertex(v133[0], v133[1], v133[2]);
    vertex(v132[0], v132[1], v132[2]);
    endShape(CLOSE);

    const v134 = [30, HEIGHT_OF_NOSE + 130, 0];
    const v135 = [30, HEIGHT_OF_NOSE + 130, BOTTOM_WIDTH_OF_SNOUT - 10];
    //upper left, counter
    beginShape();
    vertex(v132[0], v132[1], v132[2]);
    vertex(v133[0], v133[1], v133[2]);
    vertex(v135[0], v135[1], v135[2]);
    vertex(v134[0], v134[1], v134[2]);
    endShape(CLOSE);

    const v136 = [100, HEIGHT_OF_NOSE + 130, 0];
    const v137 = [100, HEIGHT_OF_NOSE + 130, BOTTOM_WIDTH_OF_SNOUT - 10];
    //upper left, counter
    beginShape();
    vertex(v134[0], v134[1], v134[2]);
    vertex(v135[0], v135[1], v135[2]);
    vertex(v137[0], v137[1], v137[2]);
    vertex(v136[0], v136[1], v136[2]);
    endShape(CLOSE);

    const v138 = [30, HEIGHT_OF_NOSE + 110, BOTTOM_WIDTH_OF_SNOUT + 15];
    const v139 = [100, HEIGHT_OF_NOSE + 110, BOTTOM_WIDTH_OF_SNOUT + 15];
    //upper left, counter
    beginShape();
    vertex(v135[0], v135[1], v135[2]);
    vertex(v137[0], v137[1], v137[2]);
    vertex(v139[0], v139[1], v139[2]);
    vertex(v138[0], v138[1], v138[2]);
    endShape(CLOSE);

    //bottom left, counter
    beginShape();
    vertex(v135[0], v135[1], v135[2]);
    vertex(v138[0], v138[1], v138[2]);
    vertex(v133[0], v133[1], v133[2]);
    endShape(CLOSE);

    //bottom left, clock 
    beginShape();
    vertex(v138[0], v138[1], v138[2]);
    vertex(v139[0], v139[1], v139[2]);
    vertex(v131[0], v131[1], v131[2]);
    vertex(v129[0], v129[1], v129[2]);
    endShape(CLOSE);

    //top left, clockwise
    beginShape();
    vertex(v127[0], v127[1], v127[2]);
    vertex(v129[0], v129[1], v129[2]);
    vertex(v138[0], v138[1], v138[2]);
    endShape(CLOSE);

    //top left clock
    beginShape();
    vertex(v125[0] + 5, v125[1], v125[2]);
    vertex(v127[0], v127[1], v127[2]);
    vertex(v138[0], v138[1], v138[2]);
    vertex(v133[0], v133[1], v133[2]);
    endShape(CLOSE);
  }
}

class CatHeadShape extends CustomShapeComponent {
  constructor(catHeadDimensions) {
    super();
    this.itemColor = color(50);
    this.dimensions = catHeadDimensions;
  }
  
  constructComponent() {
    const BOTTOM_WIDTH_OF_SNOUT = this.dimensions.bottomWidthOfSnout;
    const HEIGHT_OF_NOSE = this.dimensions.heightOfNose;
    const TOP_WIDTH_OF_SNOUT = this.dimensions.topWidthOfSnout;
    const HEIGHT_OF_SNOUT = this.dimensions.heightOfSnout;
    fill(80, 90, 100);
    
    //side of nose
    beginShape();
    //top left, clockwise
    vertex(-10, 0, TOP_WIDTH_OF_SNOUT);
    vertex(70, 0, TOP_WIDTH_OF_SNOUT);
    vertex(50, HEIGHT_OF_SNOUT, BOTTOM_WIDTH_OF_SNOUT);
    vertex(-20, HEIGHT_OF_SNOUT, BOTTOM_WIDTH_OF_SNOUT);
    endShape(CLOSE);

    beginShape();
    vertex(70, 0, TOP_WIDTH_OF_SNOUT);
    vertex(120, -20, TOP_WIDTH_OF_SNOUT);
    vertex(50, HEIGHT_OF_SNOUT, BOTTOM_WIDTH_OF_SNOUT);
    endShape(CLOSE);

    //front of nose
    fill(255, 100, 100);
    beginShape();
    //top right corner, counter clockwise
    vertex(-10, 0, TOP_WIDTH_OF_SNOUT);
    vertex(-10, 0, 0);
    vertex(-20, HEIGHT_OF_SNOUT, 0);
    vertex(-40, HEIGHT_OF_NOSE + 10, 0);
    vertex(-20, HEIGHT_OF_SNOUT, BOTTOM_WIDTH_OF_SNOUT);
    endShape(CLOSE);
    
    fill(120, 130, 140);
    //top of nose
    //flat area
    beginShape();
    vertex(-10, 0, TOP_WIDTH_OF_SNOUT);
    vertex(-10, 0, 0);
    vertex(70, 0, 0);
    vertex(70, 0, TOP_WIDTH_OF_SNOUT);
    endShape(CLOSE);

    //angled area
    beginShape();
    vertex(70, 0, 0);
    vertex(70, 0, TOP_WIDTH_OF_SNOUT);
    vertex(120, -20, TOP_WIDTH_OF_SNOUT);
    vertex(120, -20, 0);
    endShape(CLOSE);
    this.skull();
  }
  
  skull() {
    const BOTTOM_WIDTH_OF_SNOUT = this.dimensions.bottomWidthOfSnout;
    const HEIGHT_OF_NOSE = this.dimensions.heightOfNose;
    const TOP_WIDTH_OF_SNOUTH = this.dimensions.topWidthOfSnout;
    const HEIGHT_OF_SNOUT = this.dimensions.heightOfSnout;
    //section 1
    const v1 = [-20, HEIGHT_OF_SNOUT, BOTTOM_WIDTH_OF_SNOUT];
    const v2 = [-35, HEIGHT_OF_SNOUT + 80, BOTTOM_WIDTH_OF_SNOUT - 10];
    const v3 = [-35, HEIGHT_OF_NOSE + 30, 0];
    //left corner, clockwise
    beginShape();
    vertex(-40, HEIGHT_OF_NOSE + 10, 0);
    vertex(v1[0], v1[1], v1[2]);
    vertex(v2[0], v2[1], v2[2]);
    vertex(v3[0], v3[1], v3[2]);
    endShape(CLOSE);

    //section 2
    const v4 = [10, HEIGHT_OF_NOSE + 40, 90];
    const v5 = [-15,  HEIGHT_OF_NOSE + 60, 60];
    //left corner, clockwise
    beginShape();
    vertex(v1[0], v1[1], v1[2]);
    vertex(v4[0], v4[1], v4[2]);
    vertex(v5[0], v5[1], v5[2]);
    vertex(v2[0], v2[1], v2[2]);
    endShape(CLOSE);

    //section 3
    const v6 = [25, HEIGHT_OF_SNOUT, BOTTOM_WIDTH_OF_SNOUT];
    const v7 = [30,  HEIGHT_OF_SNOUT + 10,  BOTTOM_WIDTH_OF_SNOUT+ 30];
    const v8 = [-17, HEIGHT_OF_NOSE - 10, 51];
    //left corner, clockwise
    beginShape();
    vertex(v1[0], v1[1], v1[2]);
    vertex(v6[0], v6[1], v6[2]);
    vertex(v7[0], v7[1], v7[2]);
    vertex(v8[0], v8[1], v8[2]);
    endShape(CLOSE);

    const v9 = [50, HEIGHT_OF_NOSE - 15, 80];
    //left corner, clockwise
    beginShape();
    vertex(v8[0], v8[1], v8[2]);
    vertex(v7[0], v7[1], v7[2]);
    vertex(v9[0], v9[1], v9[2]);
    vertex(v4[0], v4[1], v4[2]);
    endShape(CLOSE);

    const v10 = [50, HEIGHT_OF_NOSE - 10, 90 ];
    //top corner, counter clockwise
    beginShape();
    vertex(v9[0], v9[1], v9[2]);
    vertex(v4[0], v4[1], v4[2]);
    vertex(v10[0], v10[1], v10[2]);
    endShape(CLOSE);

    const v11 = [50, HEIGHT_OF_NOSE , 100];
    //top corner, counter clockwise
    beginShape();
    vertex(v10[0], v10[1], v10[2]);
    vertex(v4[0], v4[1], v4[2]);
    vertex(v11[0], v11[1], v11[2]);
    endShape(CLOSE);

    const v12 = [50,  HEIGHT_OF_NOSE + 15, 110];
    //top corner, counter clockwise
    beginShape();
    vertex(v11[0], v11[1], v11[2]);
    vertex(v4[0], v4[1], v4[2]);
    vertex(v12[0], v12[1], v12[2]);
    endShape(CLOSE);

    //section 4
    const v14 =[-20,  HEIGHT_OF_NOSE + 70, BOTTOM_WIDTH_OF_SNOUT - 10];
    beginShape();
    vertex(v3[0], v3[1], v3[2]);
    vertex(v2[0], v2[1], v2[2]);
    vertex(v14[0], v14[1], v14[2]);
    endShape(CLOSE);

    const v13 = [15, HEIGHT_OF_NOSE + 85 , 80];

    //top left corner, clockwise
    beginShape();
    vertex(v2[0], v2[1], v2[2]);
    vertex(v5[0], v5[1], v5[2]);
    vertex(v13[0], v13[1], v13[2]);
    vertex(v14[0], v14[1], v14[2]);
    endShape(CLOSE);

    const v15 = [35, HEIGHT_OF_NOSE + 70, 110];
    //top left, clockwise
    beginShape();
    vertex(v5[0], v5[1], v5[2]);
    vertex(v4[0], v4[1], v4[2]);
    vertex(v15[0], v15[1], v15[2]);
    vertex(v13[0], v13[1], v13[2]);
    endShape(CLOSE);

    const v16 = [60, HEIGHT_OF_NOSE + 50, 120];
    //top left, counter clockwise
    beginShape();
    vertex(v4[0], v4[1], v4[2]);
    vertex(v12[0], v12[1], v12[2]);
    vertex(v16[0], v16[1], v16[2]);
    vertex(v15[0], v15[1], v15[2]);
    endShape(CLOSE);

    //section 5
    const v17 = [50, HEIGHT_OF_SNOUT, BOTTOM_WIDTH_OF_SNOUT];
    const v18 = [50, HEIGHT_OF_SNOUT + 10,  BOTTOM_WIDTH_OF_SNOUT+ 30];
    //top left, clockwise
    beginShape();
    vertex(v6[0], v6[1], v6[2]);
    vertex(v17[0], v17[1], v17[2]);
    vertex(v18[0], v18[1], v18[2]);
    vertex(v7[0], v7[1], v7[2]);
    endShape(CLOSE);

    const v19 = [50,  HEIGHT_OF_NOSE - 15, 80];
    //top left clockwise
    beginShape();
    vertex(v7[0], v7[1], v7[2]);
    vertex(v18[0], v18[1], v18[2]);
    vertex(v19[0], v19[1], v19[2]);
    vertex(v9[0], v9[1], v9[2]);
    endShape(CLOSE);

    const v20 = [50, HEIGHT_OF_NOSE - 10, 90];
    //top left clockwise;
    beginShape();
    vertex(v9[0], v9[1], v9[2]);
    vertex(v19[0], v19[1], v19[2]);
    vertex(v20[0], v20[1], v20[2]);
    vertex(v10[0], v10[1], v10[2]);
    endShape(CLOSE);

    const v21 = [50, HEIGHT_OF_NOSE , 100];
    //top left clockwise;
    beginShape();
    vertex(v10[0], v10[1], v10[2]);
    vertex(v20[0], v20[1], v20[2]);
    vertex(v21[0], v21[1], v21[2]);
    vertex(v11[0], v11[1], v11[2]);
    endShape(CLOSE);

    //section 7
    const v26 = [70, HEIGHT_OF_NOSE + 50, 125];
    const v27 = [70, HEIGHT_OF_NOSE + 70, 125];
    //red

    //leftmost corner
    beginShape();
    vertex(v13[0], v13[1], v13[2]);
    vertex(v15[0], v15[1], v15[2]);
    vertex(v27[0], v27[1], v27[2]);
    endShape(CLOSE);

    //bottom left, clockwise
    beginShape();
    vertex(v15[0], v15[1], v15[2]);
    vertex(v16[0], v16[1], v16[2]);
    vertex(v26[0], v26[1], v26[2]);
    vertex(v27[0], v27[1], v27[2]);
    endShape(CLOSE);

    const v50 = [90, HEIGHT_OF_NOSE + 50, 125];
    const v51 = [90, HEIGHT_OF_NOSE + 70, 125];
    //top left corner counter clock
    beginShape();
    vertex(v26[0], v26[1], v26[2]);
    vertex(v27[0], v27[1], v27[2]);
    vertex(v51[0], v51[1], v51[2]);
    vertex(v50[0], v50[1], v50[2]);
    endShape(CLOSE);

    const v52 = [130, HEIGHT_OF_NOSE + 50, 170];
    const v53 = [130, HEIGHT_OF_NOSE + 70, 170];
    //top left counter clock
    beginShape();
    vertex(v50[0], v50[1], v50[2]);
    vertex(v51[0], v51[1], v51[2]);
    vertex(v53[0], v53[1], v53[2]);
    vertex(v52[0], v52[1], v52[2]);
    endShape(CLOSE);

    const v54 = [200, HEIGHT_OF_NOSE + 50, 180];
    const v55 = [200, HEIGHT_OF_NOSE + 70, 180];
    //top left counter clock
    beginShape();
    vertex(v52[0], v52[1], v52[2]);
    vertex(v53[0], v53[1], v53[2]);
    vertex(v55[0], v55[1], v55[2]);
    vertex(v54[0], v54[1], v54[2]);
    endShape(CLOSE);

    const v56 = [250, HEIGHT_OF_NOSE + 50, 170];
    const v57 = [250, HEIGHT_OF_NOSE + 70, 170];
    //top left counter clock
    beginShape();
    vertex(v54[0], v54[1], v54[2]);
    vertex(v55[0], v55[1], v55[2]);
    vertex(v57[0], v57[1], v57[2]);
    vertex(v56[0], v56[1], v56[2]);
    endShape();

    const v58 = [300, HEIGHT_OF_NOSE + 50, 140];
    const v59 = [300, HEIGHT_OF_NOSE + 70, 140];
    //top left counter clock
    beginShape();
    vertex(v56[0], v56[1], v56[2]);
    vertex(v57[0], v57[1], v57[2]);
    vertex(v59[0], v59[1], v59[2]);
    vertex(v58[0], v58[1], v58[2]);
    endShape(CLOSE);

    const v60 = [350, HEIGHT_OF_NOSE + 50, 50];
    const v61 = [350, HEIGHT_OF_NOSE + 70, 50];
    //top left counter clock
    beginShape();
    vertex(v58[0], v58[1], v58[2]);
    vertex(v59[0], v59[1], v59[2]);
    vertex(v61[0], v61[1], v61[2]);
    vertex(v60[0], v60[1], v60[2]);
    endShape(CLOSE);

    const v63 = [350, HEIGHT_OF_NOSE + 50, 0];
    const v62 = [350, HEIGHT_OF_NOSE + 70, 0];
    //top left counter clock
    beginShape();
    vertex(v60[0], v60[1], v60[2]);
    vertex(v61[0], v61[1], v61[2]);
    vertex(v62[0], v62[1], v62[2]);
    vertex(v63[0], v63[1], v63[2]);

    endShape(CLOSE);

    //section 10
    //yellow
    const v46 = [-20, HEIGHT_OF_NOSE + 70, 0];
    //top left/uppermost corner, clockwise
    beginShape();
    vertex(v3[0], v3[1], v3[2]);
    vertex(v14[0], v14[1], v14[2]);
    vertex(v46[0], v46[1], v46[2]);
    endShape(CLOSE);

    //leftmost corner, clockwise
    beginShape();
    vertex(v46[0], v46[1], v46[2]);
    vertex(v14[0], v14[1], v14[2]);
    vertex(v13[0], v13[1], v13[2]);
    endShape(CLOSE);

    const v47 = [100,  HEIGHT_OF_NOSE + 90, BOTTOM_WIDTH_OF_SNOUT - 10];
    //top left, clockwise
    beginShape();
    vertex(v46[0], v46[1], v46[2]);
    vertex(v14[0], v14[1], v14[2]);
    vertex(v47[0], v47[1], v47[2]);
    vertex(v47[0], v47[1], 0);
    endShape(CLOSE);

    const v48 = [100, 250, BOTTOM_WIDTH_OF_SNOUT - 10];
    //top left clockwise
    beginShape();
    vertex(v47[0], v47[1], 0);
    vertex(v47[0], v47[1], v47[2]);
    vertex(v48[0], v48[1], v48[2]);
    vertex(v48[0], v48[1], 0);
    endShape(CLOSE);


    //top left clockwise
    beginShape();
    //top left, clock
    vertex(v14[0], v14[1], v14[2]);
    vertex(v13[0], v13[1], v13[2]);
    vertex(v27[0], v27[1], v27[2]);
    vertex(v51[0], v51[1], v51[2]);
    vertex(v47[0], v47[1], v47[2]);

    //vertex(v48[0], v48[1], v48[2]);
    endShape(CLOSE);

    //section 11
    //section 11.1
    //green
    const v64 = [200, HEIGHT_OF_NOSE + 30, 180];
    const v65 = [250, HEIGHT_OF_NOSE + 30, 170];
    //bottom left, counter clock
    beginShape();
    vertex(v54[0], v54[1], v54[2]);
    vertex(v56[0], v56[1], v56[2]);
    vertex(v65[0], v65[1], v65[2]);
    vertex(v64[0], v64[1], v64[2]);
    endShape(CLOSE);

    const v66 = [200, HEIGHT_OF_NOSE + 10, 175];
    const v67 = [250, HEIGHT_OF_NOSE + 10, 165];
    //bottom left, counter clock
    beginShape();
    vertex(v64[0], v64[1], v64[2]);
    vertex(v65[0], v65[1], v65[2]);
    vertex(v67[0], v67[1], v67[2]);
    vertex(v66[0], v66[1], v66[2]);
    endShape(CLOSE);

    const v68 = [200, HEIGHT_OF_NOSE , 170];
    const v69 = [250, HEIGHT_OF_NOSE , 160];
    //bottom left, counter clock
    beginShape();
    vertex(v66[0], v66[1], v66[2]);
    vertex(v67[0], v67[1], v67[2]);
    vertex(v69[0], v69[1], v69[2]);
    vertex(v68[0], v68[1], v68[2]);
    endShape(CLOSE);

    const v70 = [200, HEIGHT_OF_NOSE - 20, 160];
    const v71 = [250, HEIGHT_OF_NOSE - 20, 150];
    //bottom left, counter clock
    beginShape();
    vertex(v68[0], v68[1], v68[2]);
    vertex(v69[0], v69[1], v69[2]);
    vertex(v71[0], v71[1], v71[2]);
    vertex(v70[0], v70[1], v70[2]);
    endShape(CLOSE);

    const v72 = [200, HEIGHT_OF_NOSE - 40, 150];
    const v73 = [250, HEIGHT_OF_NOSE - 40, 140];
    //bottom left, counter clock
    beginShape();
    vertex(v70[0], v70[1], v70[2]);
    vertex(v71[0], v71[1], v71[2]);
    vertex(v73[0], v73[1], v73[2]);
    vertex(v72[0], v72[1], v72[2]);
    endShape(CLOSE);

    const v74 = [200, HEIGHT_OF_NOSE - 65, 130];
    const v75 = [250, HEIGHT_OF_NOSE - 65, 120];
    //bottom left, counter clock
    beginShape();
    vertex(v72[0], v72[1], v72[2]);
    vertex(v73[0], v73[1], v73[2]);
    vertex(v75[0], v75[1], v75[2]);
    vertex(v74[0], v74[1], v74[2]);
    endShape(CLOSE);

    const v76 = [200, HEIGHT_OF_NOSE - 85, 100];
    const v77 = [250, HEIGHT_OF_NOSE - 80, 80];
    //bottom left, counter clock
    beginShape();
    vertex(v74[0], v74[1], v74[2]);
    vertex(v75[0], v75[1], v75[2]);
    vertex(v77[0], v77[1], v77[2]);
    vertex(v76[0], v76[1], v76[2]);
    endShape(CLOSE);

    const v78 = [200, HEIGHT_OF_NOSE - 90, 80];
    const v79 = [250, HEIGHT_OF_NOSE - 85, 50];
    //bottom left, counter clock
    beginShape();
    vertex(v76[0], v76[1], v76[2]);
    vertex(v77[0], v77[1], v77[2]);
    vertex(v79[0], v79[1], v79[2]);
    vertex(v78[0], v78[1], v78[2]);
    endShape(CLOSE);

    const v80 = [200, HEIGHT_OF_NOSE - 100, 0];
    const v81 = [250, HEIGHT_OF_NOSE - 90, 0];
    //bottom left, counter clock
    beginShape();
    vertex(v78[0], v78[1], v78[2]);
    vertex(v79[0], v79[1], v79[2]);
    vertex(v81[0], v81[1], v81[2]);
    vertex(v80[0], v80[1], v80[2]);
    endShape(CLOSE);

    //section 11.2
    const v82 = [130, HEIGHT_OF_NOSE + 30, 165];
    //bottom left counter clock
    beginShape();
    vertex(v52[0], v52[1], v52[2]);
    vertex(v54[0], v54[1], v54[2]);
    vertex(v64[0], v64[1], v64[2]);
    vertex(v82[0], v82[1], v82[2]);
    endShape(CLOSE);

    const v83 = [130, HEIGHT_OF_NOSE + 10, 160];
    //bottom left counter clock
    beginShape();
    vertex(v82[0], v82[1], v82[2]);
    vertex(v64[0], v64[1], v64[2]);
    vertex(v66[0], v66[1], v66[2]);
    vertex(v83[0], v83[1], v83[2]);
    endShape(CLOSE);

    const v84 = [140, HEIGHT_OF_NOSE - 10, 150];
    //bottom left counter clock
    beginShape();
    vertex(v83[0], v83[1], v83[2]);
    vertex(v66[0], v66[1], v66[2]);
    vertex(v68[0], v68[1], v68[2]);
    vertex(v84[0], v84[1], v84[2]);
    endShape(CLOSE);

    const v85 = [140, HEIGHT_OF_NOSE - 30, 140];
    //bottom left counter clock
    beginShape();
    vertex(v84[0], v84[1], v84[2]);
    vertex(v68[0], v68[1], v68[2]);
    vertex(v70[0], v70[1], v70[2]);
    vertex(v85[0], v85[1], v85[2]);
    endShape(CLOSE);

    const v86 = [150, HEIGHT_OF_NOSE - 50, 130];
    //bottom left counter clock
    beginShape();
    vertex(v85[0], v85[1], v85[2]);
    vertex(v70[0], v70[1], v70[2]);
    vertex(v72[0], v72[1], v72[2]);
    vertex(v86[0], v86[1], v86[2]);
    endShape(CLOSE);

    const v87 = [150, HEIGHT_OF_NOSE - 70, 110];
    //bottom left counter clock
    beginShape();
    vertex(v86[0], v86[1], v86[2]);
    vertex(v72[0], v72[1], v72[2]);
    vertex(v74[0], v74[1], v74[2]);
    vertex(v87[0], v87[1], v87[2]);
    endShape(CLOSE);

    const v88 = [160, HEIGHT_OF_NOSE - 90, 80];
    //bottom left counter clock
    beginShape();
    vertex(v87[0], v87[1], v87[2]);
    vertex(v74[0], v74[1], v74[2]);
    vertex(v76[0], v76[1], v76[2]);
    vertex(v88[0], v88[1], v88[2]);
    endShape(CLOSE);

    const v89 = [160, HEIGHT_OF_NOSE - 95, 60];
    //bottom left counter clock
    beginShape();
    vertex(v88[0], v88[1], v88[2]);
    vertex(v76[0], v76[1], v76[2]);
    vertex(v78[0], v78[1], v78[2]);
    vertex(v89[0], v89[1], v89[2]);
    endShape(CLOSE);

    const v90 = [160, HEIGHT_OF_NOSE - 105, 0];
    //bottom left counter clock
    beginShape();
    vertex(v89[0], v89[1], v89[2]);
    vertex(v78[0], v78[1], v78[2]);
    vertex(v80[0], v80[1], v80[2]);
    vertex(v90[0], v90[1], v90[2]);
    endShape(CLOSE);

    //section 1.3
    const v91 = [90, HEIGHT_OF_NOSE + 30, 120];
    //bottom left counter clock
    beginShape();
    vertex(v50[0], v50[1], v50[2]);
    vertex(v52[0], v52[1], v52[2]);
    vertex(v82[0], v82[1], v82[2]);
    vertex(v91[0], v91[1], v91[2]);
    endShape(CLOSE);

    const v92 = [90, HEIGHT_OF_NOSE + 10, 115];
    //bottom left counter clock
    beginShape();
    vertex(v91[0], v91[1], v91[2]);
    vertex(v82[0], v82[1], v82[2]);
    vertex(v83[0], v83[1], v83[2]);
    vertex(v92[0], v92[1], v92[2]);
    endShape(CLOSE);

    const v93 = [90, HEIGHT_OF_NOSE, 110];
    //bottom left counter clock
    beginShape();
    vertex(v92[0], v92[1], v92[2]);
    vertex(v83[0], v83[1], v83[2]);
    vertex(v84[0], v84[1], v84[2]);
    vertex(v93[0], v93[1], v93[2]);
    endShape(CLOSE);

    const v94 = [90, HEIGHT_OF_NOSE - 10, 105];
    //bottom left counter clock
    beginShape();
    vertex(v93[0], v93[1], v93[2]);
    vertex(v84[0], v84[1], v84[2]);
    vertex(v85[0], v85[1], v85[2]);
    vertex(v94[0], v94[1], v94[2]);
    endShape(CLOSE);

    const v95 = [90, HEIGHT_OF_NOSE - 30, 95];
    //bottom left counter clock
    beginShape();
    vertex(v94[0], v94[1], v94[2]);
    vertex(v85[0], v85[1], v85[2]);
    vertex(v86[0], v86[1], v86[2]);
    vertex(v95[0], v95[1], v95[2]);
    endShape(CLOSE);

    const v96 = [100, HEIGHT_OF_NOSE - 50, 80];
    //bottom left counter clock
    beginShape();
    vertex(v95[0], v95[1], v95[2]);
    vertex(v86[0], v86[1], v86[2]);
    vertex(v87[0], v87[1], v87[2]);
    vertex(v96[0], v96[1], v96[2]);
    endShape(CLOSE);

    const v97 = [110, HEIGHT_OF_NOSE - 70, 60];
    //bottom left counter clock
    beginShape();
    vertex(v96[0], v96[1], v96[2]);
    vertex(v87[0], v87[1], v87[2]);
    vertex(v88[0], v88[1], v88[2]);
    vertex(v97[0], v97[1], v97[2]);
    endShape(CLOSE);

    const v98 = [115, HEIGHT_OF_NOSE - 70, 50];
    //bottom left counter clock
    beginShape();
    vertex(v97[0], v97[1], v97[2]);
    vertex(v88[0], v88[1], v88[2]);
    vertex(v89[0], v89[1], v89[2]);
    vertex(v98[0], v98[1], v98[2]);
    endShape(CLOSE);

    const v99 = [120, -20, 0];
    //bottom left counter clock
    beginShape();
    vertex(v98[0], v98[1], v98[2]);
    vertex(v89[0], v89[1], v89[2]);
    vertex(v90[0], v90[1], v90[2]);
    vertex(v99[0], v99[1], v99[2]);
    endShape(CLOSE);

    //section 11.4
    const v100 = [70, HEIGHT_OF_NOSE + 30, 120];
    //bottom left counter clock
    beginShape();
    vertex(v26[0], v26[1], v26[2]);
    vertex(v50[0], v50[1], v50[2]);
    vertex(v91[0], v91[1], v91[2]);
    vertex(v100[0], v100[1], v100[2]);
    endShape(CLOSE);

    const v101 = [70, HEIGHT_OF_NOSE + 10, 110];
    //bottom left counter clock
    beginShape();
    vertex(v100[0], v100[1], v100[2]);
    vertex(v91[0], v91[1], v91[2]);
    vertex(v92[0], v92[1], v92[2]);
    vertex(v101[0], v101[1], v101[2]);
    endShape(CLOSE);

    const v102 = [70, HEIGHT_OF_NOSE, 105];
    //bottom left counter clock
    beginShape();
    vertex(v101[0], v101[1], v101[2]);
    vertex(v92[0], v92[1], v92[2]);
    vertex(v93[0], v93[1], v93[2]);
    vertex(v102[0], v102[1], v102[2]);
    endShape(CLOSE);

    const v103 = [70, HEIGHT_OF_NOSE - 20, 95];
    //bottom left counter clock
    beginShape();
    vertex(v102[0], v102[1], v102[2]);
    vertex(v93[0], v93[1], v93[2]);
    vertex(v94[0], v94[1], v94[2]);
    vertex(v103[0], v103[1], v103[2]);
    endShape(CLOSE);

    const v104 = [70, HEIGHT_OF_NOSE - 30, 80];
    //bottom left counter clock
    beginShape();
    vertex(v103[0], v103[1], v103[2]);
    vertex(v94[0], v94[1], v94[2]);
    vertex(v95[0], v95[1], v95[2]);
    vertex(v104[0], v104[1], v104[2]);
    endShape(CLOSE);

    const v105 = [70, HEIGHT_OF_NOSE - 32, 70];
    //bottom left counter clock
    beginShape();
    vertex(v104[0], v104[1], v104[2]);
    vertex(v95[0], v95[1], v95[2]);
    vertex(v96[0], v96[1], v96[2]);
    vertex(v105[0], v105[1], v105[2]);
    endShape(CLOSE);

     const v106 = [70, HEIGHT_OF_NOSE - 35, 60];
    //bottom left counter clock
    beginShape();
    vertex(v105[0], v105[1], v105[2]);
    vertex(v96[0], v96[1], v96[2]);
    vertex(v97[0], v97[1], v97[2]);
    vertex(v106[0], v106[1], v106[2]);
    endShape(CLOSE);

    const v107 = [70, HEIGHT_OF_NOSE - 37, 50];
    //bottom left counter clock
    beginShape();
    vertex(v106[0], v106[1], v106[2]);
    vertex(v97[0], v97[1], v97[2]);
    vertex(v98[0], v98[1], v98[2]);
    vertex(v107[0], v107[1], v107[2]);
    endShape(CLOSE);

    const v108 = [70, HEIGHT_OF_NOSE - 40, 0];
    //bottom left counter clock
    beginShape();
    vertex(v107[0], v107[1], v107[2]);
    vertex(v98[0], v98[1], v98[2]);
    vertex(v99[0], v99[1], v99[2]);
    vertex(v108[0], v108[1], v108[2]);
    endShape(CLOSE);

    //section 11.5
    //
    beginShape();
    vertex(v16[0], v16[1], v16[2]);
    vertex(v26[0], v26[1], v26[2]);
    vertex(v100[0], v100[1], v100[2]);
    vertex(v12[0], v12[1], v12[2]);
    endShape(CLOSE);

    //top  left clock
    beginShape();
    vertex(v11[0], v11[1], v11[2]);
    vertex(v101[0], v101[1], v101[2]);
    vertex(v100[0], v100[1], v100[2]);
    vertex(v12[0], v12[1], v12[2]);
    endShape(CLOSE);

    //bottom left, counter
    beginShape();
    vertex(v11[0], v11[1], v11[2]);
    vertex(v101[0], v101[1], v101[2]);
    vertex(v102[0], v102[1], v102[2]);
    vertex(v10[0], v10[1], v10[2]);
    endShape(CLOSE);

    beginShape();
    vertex(v10[0], v10[1], v10[2]);
    vertex(v102[0], v102[1], v102[2]);
    vertex(v103[0], v103[1], v103[2]);
    vertex(v9[0], v9[1], v9[2]);
    endShape(CLOSE);

    beginShape();
    vertex(v9[0], v9[1], v9[2]);
    vertex(v103[0], v103[1], v103[2]);
    vertex(v104[0], v104[1], v104[2]);
    endShape(CLOSE);

    beginShape();
    vertex(v9[0], v9[1], v9[2]);
    vertex(v104[0], v104[1], v104[2]);
    vertex(v105[0], v105[1], v105[2]);
    endShape(CLOSE);

    beginShape();
    vertex(v9[0], v9[1], v9[2]);
    vertex(v105[0], v105[1], v105[2]);
    vertex(v106[0], v106[1], v106[2]);
    endShape(CLOSE);

    beginShape();
    vertex(v9[0], v9[1], v9[2]);
    vertex(v106[0], v106[1], v106[2]);
    vertex(v107[0], v107[1], v107[2]);
    endShape(CLOSE);

    beginShape();
    vertex(v107[0], v107[1], v107[2]);
    vertex(v108[0], v108[1], v108[2]);
    vertex(v17[0], v17[1], v17[2]);
    vertex(v9[0], v9[1], v9[2]);
    endShape(CLOSE);

    //section 11.6
    const v109 = [300, HEIGHT_OF_NOSE + 30, 140];
    beginShape();
    vertex(v56[0], v56[1], v56[2]);
    vertex(v58[0], v58[1], v58[2]);
    vertex(v109[0], v109[1], v109[2]);
    vertex(v65[0], v65[1], v65[2]);
    endShape(CLOSE);

    const v110 = [300, HEIGHT_OF_NOSE + 10, 135];
    beginShape();
    vertex(v65[0], v65[1], v65[2]);
    vertex(v109[0], v109[1], v109[2]);
    vertex(v110[0], v110[1], v110[2]);
    vertex(v67[0], v67[1], v67[2]);
    endShape(CLOSE);

    const v111 = [300, HEIGHT_OF_NOSE, 130];
    beginShape();
    vertex(v67[0], v67[1], v67[2]);
    vertex(v110[0], v110[1], v110[2]);
    vertex(v111[0], v111[1], v111[2]);
    vertex(v69[0], v69[1], v69[2]);
    endShape(CLOSE);

    const v112 = [295, HEIGHT_OF_NOSE - 20, 122];
    beginShape();
    vertex(v69[0], v69[1], v69[2]);
    vertex(v111[0], v111[1], v111[2]);
    vertex(v112[0], v112[1], v112[2]);
    vertex(v71[0], v71[1], v71[2]);
    endShape(CLOSE);


    const v113 = [295, HEIGHT_OF_NOSE - 40, 110];
    beginShape();
    vertex(v71[0], v71[1], v71[2]);
    vertex(v112[0], v112[1], v112[2]);
    vertex(v113[0], v113[1], v113[2]);
    vertex(v73[0], v73[1], v73[2]);
    endShape(CLOSE);

    const v114 = [290, HEIGHT_OF_NOSE - 60, 90];
    beginShape();
    vertex(v73[0], v73[1], v73[2]);
    vertex(v113[0], v113[1], v113[2]);
    vertex(v114[0], v114[1], v114[2]);
    vertex(v75[0], v75[1], v75[2]);
    endShape(CLOSE);

    const v115 = [290, HEIGHT_OF_NOSE - 70, 70];
    beginShape();
    vertex(v75[0], v75[1], v75[2]);
    vertex(v114[0], v114[1], v114[2]);
    vertex(v115[0], v115[1], v115[2]);
    vertex(v77[0], v77[1], v77[2]);
    endShape(CLOSE);

    const v116 = [290, HEIGHT_OF_NOSE - 75, 50];
    beginShape();
    vertex(v77[0], v77[1], v77[2]);
    vertex(v115[0], v115[1], v115[2]);
    vertex(v116[0], v116[1], v116[2]);
    vertex(v79[0], v79[1], v79[2]);
    endShape(CLOSE);

    const v117 = [290, HEIGHT_OF_NOSE - 75, 0];
    beginShape();
    vertex(v79[0], v79[1], v79[2]);
    vertex(v116[0], v116[1], v116[2]);
    vertex(v117[0], v117[1], v117[2]);
    vertex(v80[0], v80[1], v80[2]);
    endShape(CLOSE);

    //section 11.7
    const v118 = [350, HEIGHT_OF_NOSE + 30, 45];
    beginShape();
    vertex(v58[0], v58[1], v58[2]);
    vertex(v60[0], v60[1], v60[2]);
    vertex(v118[0], v118[1], v118[2]);
    vertex(v109[0], v109[1], v109[2]);
    endShape(CLOSE);


    const v119 = [350, HEIGHT_OF_NOSE + 10, 35];
    beginShape();
    vertex(v109[0], v109[1], v109[2]);
    vertex(v118[0], v118[1], v118[2]);
    vertex(v119[0], v119[1], v119[2]);
    vertex(v110[0], v110[1], v110[2]);
    endShape(CLOSE);

    beginShape();
    vertex(v110[0], v110[1], v110[2]);
    vertex(v111[0], v111[1], v111[2]);
    vertex(v112[0], v112[1], v112[2]);
    vertex(v113[0], v113[1], v113[2]);
    vertex(v114[0], v114[1], v114[2]);
    vertex(v115[0], v115[1], v115[2]);
    vertex(v116[0], v116[1], v116[2]);
    vertex(v117[0], v117[1], v117[2]);
    vertex(v119[0], v119[1], v119[2]);
    endShape(CLOSE);

    //section 11.8
    const v120 = [350, HEIGHT_OF_NOSE + 30, 0];
    beginShape();
    vertex(v60[0], v60[1], v60[2]);
    vertex(v63[0], v63[1], v63[2]);
    vertex(v120[0], v120[1], v120[2]);
    vertex(v118[0], v118[1], v118[2]);
    endShape(CLOSE);

    const v121 = [350, HEIGHT_OF_NOSE + 10, 0];
    beginShape();
    vertex(v118[0], v118[1], v118[2]);
    vertex(v120[0], v120[1], v120[2]);
    vertex(v121[0], v121[1], v121[2]);
    vertex(v119[0], v119[1], v119[2]);
    endShape(CLOSE);

    beginShape();
    vertex(v121[0], v121[1], v121[2]);
    vertex(v119[0], v119[1], v119[2]);

    vertex(v117[0], v117[1], v117[2]);
    endShape(CLOSE);

    //section 12
    //purple

    const LENGTH_OF_NECK = 300;

    const v122 = [130, LENGTH_OF_NECK, 170];
    const v123 = [200, LENGTH_OF_NECK, 180];

    beginShape();
    vertex(v51[0], v51[1], v51[2]);
    vertex(v53[0], v53[1], v53[2]);
    vertex(v53[0], LENGTH_OF_NECK, v53[2]);
    vertex(v51[0], LENGTH_OF_NECK, v51[2]);
    endShape(CLOSE);

    //top corner clockwise
    beginShape();
    vertex(v53[0], v53[1], v53[2]);
    vertex(v55[0], v55[1], v55[2]);
    vertex(v123[0], v123[1], v123[2]);
    vertex(v122[0], v122[1], v122[2]);
    endShape(CLOSE);

    beginShape();
    vertex(v55[0], v55[1], v55[2]);
    vertex(v57[0], v57[1], v57[2]);
    vertex(v57[0], LENGTH_OF_NECK, v57[2]);
    vertex(v55[0], LENGTH_OF_NECK, v55[2]);
    endShape(CLOSE);

    beginShape();
    vertex(v61[0], v61[1], v61[2]);
    vertex(v62[0], v62[1], v62[2]);
    vertex(v62[0], LENGTH_OF_NECK, v62[2]);
    vertex(v61[0], LENGTH_OF_NECK, v61[2]);
    endShape(CLOSE);

    beginShape();
    vertex(v59[0], v59[1], v59[2]);
    vertex(v61[0], v61[1], v61[2]);
    vertex(v61[0], LENGTH_OF_NECK, v61[2]);
    vertex(v59[0], LENGTH_OF_NECK, v59[2]);
    endShape(CLOSE);

    beginShape();
    vertex(v57[0], v57[1], v57[2]);
    vertex(v59[0], v59[1], v59[2]);
    vertex(v59[0], LENGTH_OF_NECK, v59[2]);
    vertex(v57[0], LENGTH_OF_NECK, v57[2]);
    endShape(CLOSE);

    beginShape();
    vertex(v51[0], LENGTH_OF_NECK, 0);
    vertex(v51[0], LENGTH_OF_NECK, v51[2]);
    vertex(v53[0], LENGTH_OF_NECK, v53[2]);
    vertex(v55[0], LENGTH_OF_NECK, v55[2]);
    vertex(v57[0], LENGTH_OF_NECK, v57[2]);
    vertex(v59[0], LENGTH_OF_NECK, v59[2]);
    vertex(v61[0], LENGTH_OF_NECK, v61[2]);
    vertex(v61[0], LENGTH_OF_NECK, 0);
    endShape(CLOSE);

    beginShape();
    vertex(v51[0], v51[1], v51[2]);
    vertex(v51[0], LENGTH_OF_NECK, v51[2]);
    vertex(v51[0], LENGTH_OF_NECK, 0);
    vertex(v51[0], HEIGHT_OF_NOSE + 90, 0);
    endShape(CLOSE);
  }
}
