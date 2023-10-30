/*
* Drawable item made up of drawable components
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
}

class YSymmetricCoupledComponents {
  constructor() {
    this.left = 0;
    this.right = 0;
    this.components = [];
    this.forwardPosition = 0; //x plane
    this.verticalPosition = 0; //y plane
    this.itemScale = createVector(1, 1, 1);
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

class CustomShapeComponent {
  constructor() {
    this.forwardPosition = 0; //x plane
    this.verticalPosition = 0; //y plane
    this.horizontalPosition = 0; //z plane
    this.itemScale = createVector(1, 1, 1);
    this.xRotation = 0;
    this.yRotation = 0;
    this.zRotation = 0;
    this.itemColor = color(0);
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

  setItemColor() {
    fill(this.itemColor);
  }

  constructComponent() {}
}

class BoxComponent {
  constructor() {
    this.itemDepth = 0; //x plane
    this.itemHeight = 0; //y plane
    this.itemWidth = 0; //z plane
    this.forwardPosition = 0; //x plane
    this.verticalPosition = 0; //y plane
    this.horizontalPosition = 0; //z plane
    this.itemScale = createVector(1, 1, 1);
    this.xRotation = 0;
    this.yRotation = 0;
    this.zRotation = 0;
    this.itemColor = color(0);
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
  
  setItemColor() {
    fill(this.itemColor);
  }

  setItemDimensions(itemDepth, itemHeight, itemWidth) {
    //setting itemDepth if arg provided
    if (itemDepth != undefined) { this.itemDepth = itemDepth; }
    //setting itemHeight if arg provided
    if (itemHeight != undefined) { this.itemHeight = itemHeight; }
    //setting itemWidth if arg provided
    if (itemWidth != undefined) { this.itemWidth = itemWidth; }
  }

  setItemPosition(x, y, z) {
    //setting forwardPosition if arg provided
    if (x != undefined) { this.forwardPosition = x; }
    //setting verticalPosition if arg provided
    if (y != undefined) { this.verticalPosition = y; }
    //setting horizontalPosition if arg provided
    if (z != undefined) { this.horizontalPosition = z; }
  }
}


class SphereComponent {
  constructor() {
    this.size = 0;
    this.forwardPosition = 0; //x plane
    this.verticalPosition = 0; //y plane
    this.horizontalPosition = 0; //z plane
    this.position = createVector(
      this.forwardPosition, 
      this.verticalPosition, 
      this.horizontalPosition
    );
    this.itemScale = createVector(1, 1, 1);
    this.xRotation = 0;
    this.yRotation = 0;
    this.zRotation = 0;
    this.itemColor = color(0);
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
  
  setItemColor() {
    fill(this.itemColor);
  }

  setItemDimensions(itemDepth, itemHeight, itemWidth) {
    //setting itemDepth if arg provided
    if (itemDepth != undefined) { this.itemDepth = itemDepth; }
    //setting itemHeight if arg provided
    if (itemHeight != undefined) { this.itemHeight = itemHeight; }
    //setting itemWidth if arg provided
    if (itemWidth != undefined) { this.itemWidth = itemWidth; }
  }

  setItemPosition(x, y, z) {
    //setting forwardPosition if arg provided
    if (x != undefined) { this.forwardPosition = x; }
    //setting verticalPosition if arg provided
    if (y != undefined) { this.verticalPosition = y; }
    //setting horizontalPosition if arg provided
    if (z != undefined) { this.horizontalPosition = z; }
  }
}


class EllipsoidComponent {
  constructor() {
    this.itemDepth = 0; //x plane
    this.itemHeight = 0; //y plane
    this.itemWidth = 0; //z plane
    this.forwardPosition = 0; //x plane
    this.verticalPosition = 0; //y plane
    this.horizontalPosition = 0; //z plane
    this.itemScale = createVector(1, 1, 1);
    this.xRotation = 0;
    this.yRotation = 0;
    this.zRotation = 0;
    this.itemColor = color(0);
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
  
  setItemColor() {
    fill(this.itemColor);
  }

  setItemDimensions(itemDepth, itemHeight, itemWidth) {
    //setting itemDepth if arg provided
    if (itemDepth != undefined) { this.itemDepth = itemDepth; }
    //setting itemHeight if arg provided
    if (itemHeight != undefined) { this.itemHeight = itemHeight; }
    //setting itemWidth if arg provided
    if (itemWidth != undefined) { this.itemWidth = itemWidth; }
  }

  setItemPosition(x, y, z) {
    //setting forwardPosition if arg provided
    if (x != undefined) { this.forwardPosition = x; }
    //setting verticalPosition if arg provided
    if (y != undefined) { this.verticalPosition = y; }
    //setting horizontalPosition if arg provided
    if (z != undefined) { this.horizontalPosition = z; }
  }
}

class CylinderComponent {
  constructor() {
    this.radius = 0;
    this.itemHeight = 0;
    this.forwardPosition = 0; //x plane
    this.verticalPosition = 0; //y plane
    this.horizontalPosition = 0; //z plane
    this.itemScale = createVector(1, 1, 1);
    this.xRotation = 0;
    this.yRotation = 0;
    this.zRotation = 0;
    this.itemColor = color(0);
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
  
  setItemColor() {
    fill(this.itemColor);
  }

  setItemDimensions(itemDepth, itemHeight, itemWidth) {
    //setting itemDepth if arg provided
    if (itemDepth != undefined) { this.itemDepth = itemDepth; }
    //setting itemHeight if arg provided
    if (itemHeight != undefined) { this.itemHeight = itemHeight; }
    //setting itemWidth if arg provided
    if (itemWidth != undefined) { this.itemWidth = itemWidth; }
  }

  setItemPosition(x, y, z) {
    //setting forwardPosition if arg provided
    if (x != undefined) { this.forwardPosition = x; }
    //setting verticalPosition if arg provided
    if (y != undefined) { this.verticalPosition = y; }
    //setting horizontalPosition if arg provided
    if (z != undefined) { this.horizontalPosition = z; }
  }
}