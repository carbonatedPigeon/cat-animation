/*
ok, ok, i know, a lot of duplicate code here (classes have same attributes, i.e. positional & rotational values) 
which would be easily solved by having each class inherit from a parent class and setting the 
those attributes there. HOWEVER javascript does not allow grandchildren direct access to grandparent 
class attributes (boo) so I'd have to write getter/setter functions for each class for each attribute 
(*starts barfing uncontrollably*). Ain't doin all that. So... yeah, it be how it be. 
*/
class ComponentAmalgamation {
  constructor() {
    this.components = [];
    this.forwardPosition = 0; //x plane
    this.verticalPosition = 0; //y plane
    this.horizontalPosition = 0; //z plane
    this.itemScale = createVector(1, 1, 1);
    this.xRotation = 0;
    this.yRotation = 0;
    this.zRotation = 0;
  }
  
  drawItem() {
    push();
    translate(
      this.forwardPosition,
      this.verticalPosition,
      this.horizontalPosition
    );
    scale(this.itemScale);
    rotateX(this.xRotation);
    rotateY(this.yRotation);
    rotateZ(this.zRotation);
    for (const c in this.components) {
      this.components[c].drawItem();
    }
    pop();
  }
  
  setItemColor(itemColor) {
    for (const c in this.components) {
      this.components[c].itemColor = itemColor;
    }
  }
  
  setItemTexture(itemTexture) {
    for (const c in this.components) {
      this.components[c].itemTexture = itemTexture;
    }
  }
}

class YSymmetricCoupledComponents {
  constructor() {
    this.left = 0;
    this.right = 0;
    this.components = [];
    this.forwardPosition = 0; //x plane
    this.verticalPosition = 0; //y plane
    this.itemScale = createVector(1, 1, 1);
    this.itemColor = color(0);
  }

  drawItem() {
    push();
    translate(
      this.forwardPosition,
      this.verticalPosition,
      0,
    );
    scale(this.itemScale);
    for (const c in this.components) {
      this.components[c].drawItem();
    }
    pop();
  }

  setXRotation(xRotation) {
    this.left.xRotation = xRotation;
    this.right.xRotation = xRotation;
  }

  setYRotation(yRotation) {
    this.left.yRotation = yRotation;
    this.right.yRotation = -yRotation;
  }

  setZRotation(zRotation) {
    this.left.zRotation = zRotation;
    this.right.zRotation = -zRotation;
  }

  setHorizontalPosition(horizontalPosition) {
    this.left.horizontalPosition = horizontalPosition;
    this.right.horizontalPosition = -horizontalPosition;
  }
}

class Component {
  constructor() {
    this.forwardPosition = 0; //x plane
    this.verticalPosition = 0; //y plane
    this.horizontalPosition = 0; //z plane
    this.itemScale = createVector(1, 1, 1);
    this.xRotation = 0;
    this.yRotation = 0;
    this.zRotation = 0;
    this.itemColor = color(0);
    this.itemTexture = null;
  }

  setItemPosition(x, y, z) {
    //setting forwardPosition if arg provided
    if (x != undefined) { this.forwardPosition = x; }
    //setting verticalPosition if arg provided
    if (y != undefined) { this.verticalPosition = y; }
    //setting horizontalPosition if arg provided
    if (z != undefined) { this.horizontalPosition = z; }
  }

  setItemRotation(x, y, z) {
    //setting forwardPosition if arg provided
    if (x != undefined) { this.xRotation = x; }
    //setting verticalPosition if arg provided
    if (y != undefined) { this.yRotation = y; }
    //setting horizontalPosition if arg provided
    if (z != undefined) { this.zRotation = z; }
  }

  setItemColor() {
    if (this.itemTexture == null) {
      fill(this.itemColor);
    } else {
      texture(this.itemTexture);
      textureMode(NORMAL);
    }
  }
}

class CustomShapeComponent extends Component {
  constructor() {
    super();
  }

  drawItem() {
    this.setItemColor();
    push();
    translate(
      this.forwardPosition,
      this.verticalPosition,
      this.horizontalPosition
    );
    scale(this.itemScale);
    rotateX(this.xRotation);
    rotateY(this.yRotation);
    rotateZ(this.zRotation);
    this.constructComponent();
    pop();
  }

  constructComponent() {}
}

class BoxComponent extends Component {
  constructor() {
    super();
    this.itemDepth = 0; //x plane
    this.itemHeight = 0; //y plane
    this.itemWidth = 0; //z plane
  }
  
  drawItem() {
    this.setItemColor();
    push();
    translate(
      this.forwardPosition,
      this.verticalPosition,
      this.horizontalPosition
    );
    scale(this.itemScale);
    rotateX(this.xRotation);
    rotateY(this.yRotation);
    rotateZ(this.zRotation);
    box(this.itemDepth, this.itemHeight, this.itemWidth);
    pop();
  }

  setItemDimensions(itemDepth, itemHeight, itemWidth) {
    //setting itemDepth if arg provided
    if (itemDepth != undefined) { this.itemDepth = itemDepth; }
    //setting itemHeight if arg provided
    if (itemHeight != undefined) { this.itemHeight = itemHeight; }
    //setting itemWidth if arg provided
    if (itemWidth != undefined) { this.itemWidth = itemWidth; }
  }
}


class SphereComponent extends Component {
  constructor() {
    super();
    this.size = 0;
  }
  
  drawItem() {
    this.setItemColor();
    push();
    translate(
      this.forwardPosition,
      this.verticalPosition,
      this.horizontalPosition
    );
    scale(this.itemScale);
    rotateX(this.xRotation);
    rotateY(this.yRotation);
    rotateZ(this.zRotation);
    sphere(this.size);
    pop();
  }
}


class EllipsoidComponent extends Component {
  constructor() {
    super();
    this.itemDepth = 0; //x plane
    this.itemHeight = 0; //y plane
    this.itemWidth = 0; //z plane
  }
  
  drawItem() {
    this.setItemColor();
    push();
    translate(
      this.forwardPosition,
      this.verticalPosition,
      this.horizontalPosition
    );
    scale(this.itemScale);
    rotateX(this.xRotation);
    rotateY(this.yRotation);
    rotateZ(this.zRotation);
    ellipsoid(this.itemDepth, this.itemHeight, this.itemWidth);
    pop();
  }
}

class CylinderComponent extends Component {
  constructor() {
    super();
    this.radius = 0;
    this.itemHeight = 0;
  }

  drawItem() {
    this.setItemColor();
    push();
    translate(
      this.forwardPosition,
      this.verticalPosition,
      this.horizontalPosition
    );
    scale(this.itemScale);
    rotateX(this.xRotation);
    rotateY(this.yRotation);
    rotateZ(this.zRotation);
    cylinder(this.radius, this.itemHeight);
    pop();
  }
}