/*
* Drawable item made up of drawable components
*/
class DrawableItem {
  constructor() {
    this.components = [];
  }
  
  drawItem() {
    for (const c in this.components) {
      this.components[c].drawItem();
    }
  }
  
  setItemColor(tableColor) {
    for (const c in this.components) {
      this.components[c].itemColor = tableColor;
    }
  }
}

class BoxComponent {
  constructor() {
    this.itemDepth = 0; //x plane
    this.itemHeight = 0; //y plane
    this.itemWidth = 0; //z plane
    this.forwardPosition = 0; //x plane
    this.verticalPosition = 0; //y plane
    this.horizontalPosition = 0; //z plane
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