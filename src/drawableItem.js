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
  }
  
  
  class SphereComponent {
    constructor() {
      this.size = 0;
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
      sphere(this.size);
      pop();
    }
    
    setItemColor() {
      fill(this.itemColor);
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
  }