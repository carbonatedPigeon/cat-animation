class Component {
  constructor() {
    this.forwardPosition = 0; //x plane
    this.verticalPosition = 0; //y plane
    this.horizontalPosition = 0; //z plane
    this.itemScale = createVector(1, 1, 1);
    this.xRotation = 0;
    this.yRotation = 0;
    this.zRotation = 0;
    //defaults to black
    this.itemColor = color(0);
    this.itemTexture = null;
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
    this.drawShape();
    pop();
  }

  drawShape() {}

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
    //if itemTexture is set to anything other than null
    //it will prioritize tecture over over color
    if (this.itemTexture == null) {
      fill(this.itemColor);
    } else {
      texture(this.itemTexture);
      textureMode(NORMAL);
    }
  }
}


class BoxComponent extends Component {
  constructor() {
    super();
    this.itemDepth = 0; //x plane
    this.itemHeight = 0; //y plane
    this.itemWidth = 0; //z plane
  }

  drawShape() {
    box(this.itemDepth, this.itemHeight, this.itemWidth);
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

  drawShape() {
    sphere(this.size);
  }
}


class EllipsoidComponent extends Component {
  constructor() {
    super();
    this.itemDepth = 0; //x plane
    this.itemHeight = 0; //y plane
    this.itemWidth = 0; //z plane
  }
  
  drawShape() {
    ellipsoid(this.itemDepth, this.itemHeight, this.itemWidth);
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


class CylinderComponent extends Component {
  constructor() {
    super();
    this.radius = 0;
    this.itemHeight = 0;
  }

  drawShape() {
    cylinder(this.radius, this.itemHeight);
  }

  setItemDimensions(radius, itemHeight) {
    //setting radius if arg provided
    if (radius != undefined) { this.radius = radius; }
    //setting itemHeight if arg provided
    if (itemHeight != undefined) { this.itemHeight = itemHeight; }
  }
}


class SquareComponent extends Component {
  constructor() {
    super();
    this.xCoordinate = 0;
    this.yCoordinate = 0;
    this.sideLength = 0;
  }

  drawShape() {
    square(this.xCoordinate, this.yCoordinate, this.sideLength);
  }

  setItemDimensions(xCoordinate, yCoordinate, sideLength) {
    //setting xCoordinate if arg provided
    if (xCoordinate != undefined) { this.xCoordinate = xCoordinate; }
    //setting yCoordinate if arg provided
    if (yCoordinate != undefined) { this.yCoordinate = yCoordinate; }
    //setting sideLength if arg provided
    if (sideLength != undefined) { this.sideLength = sideLength; }
  }
}


class RectComponent extends Component {
  constructor() {
    super();
    this.xCoordinate = 0;
    this.yCoordinate = 0;
    this.itemWidth = 0;
    this.itemHeight = 0;
  }

  drawShape() {
    rect(this.xCoordinate, this.yCoordinate, this.itemWidth, this.itemHeight);
  }
}

class ComponentAmalgamation extends Component {
  constructor() {
    super();
    this.components = [];
    this.itemColor = null;
  }

  drawShape() {
    for (const c in this.components) {
      this.components[c].drawItem();
    }
  }
  
  setItemColor() {
    if (this.itemColor != null) {
      for (const c in this.components) {
        this.components[c].itemColor = this.itemColor;
      }
    } else if (this.itemTexture != null) {
      for (const c in this.components) {
        this.components[c].itemTexture = this.itemTexture;
      }
    }
  }
}


class YSymmetricCoupledComponents extends ComponentAmalgamation {
  constructor() {
    super();
    this.left = 0;
    this.right = 0;
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