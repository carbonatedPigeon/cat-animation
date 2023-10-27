class Person extends DrawableItem {
    constructor() {
      super();
      //storing list of components that make up person
      this.eyeBrows = new Eyebrows();
      this.eyes = new Eyes();
      this.head = new Head();
      this.eyelashes = new Eyelashes();
      this.hair = new Hair();
      this.body = new Body();
      this.legs = new Legs();
      this.components = [
        this.eyeBrows,
        this.eyes,
        this.head,
        this.eyelashes,
        this.hair,
        this.body,
        this.legs,
      ];
    }
    setSkinColor(skinColor) {
      //setting skin color of head & legs
      this.head.headColor = this.skinColor;
      this.legs.legColor = this.skinColor;
    }
    setHairColor(hairColor) {
      //setting hair color of hair, eyelashes, and eyebrows
      this.hair.hairColor = hairColor;
      this.eyelashes.eyelashColor = hairColor;
      this.eyeBrows.eyebrowColor = hairColor; 
    }
  }
  
  class Eyebrows {
    constructor() {
      //default eyebrow color == black
      this.eyebrowColor = (0, 0, 0);
      this.leftEyebrowAngle = 0;
      this.rightEyebrowAngle = 0;
      this.leftEyebrowPosition = createVector(22, -15, 60);
      this.rightEyebrowPosition = createVector(-22, -15, 60);
      this.leftEyebrowSize = createVector(15, 5, 10);
      this.rightEyebrowSize = createVector(15, 5, 10);
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
  
  class Head {
    constructor() {
      this.headSize = 50;
      this.headScale = createVector(1.2, 1.5, 1.2);
      this.headColor = color(255, 255, 225);
    }
    
    drawItem() {
      fill(this.headColor);
      push();
      scale(this.headScale);
      sphere(this.headSize);
      pop();
    }
  }
  
  class Hair {
    constructor() {
      this.hairColor = color(0);
      this.hairPosition = createVector(0, -10, -7);
      this.hairScale = createVector(1.5, 1.5, 1.2);
      this.hairSize = 50;
    }
    drawItem() {
      fill(this.hairColor);
      push();
      translate(this.hairPosition);
      scale(this.hairScale);
      sphere(this.hairSize);
      pop();
    }
  }
  
  class Body {
    constructor() {
      //color of body is black
      this.bodyColor = color(0);
      this.bodyPosition = createVector(0, 220, 0);
      this.bodyScale = createVector(1.5, 2, 1.2);
      this.bodySize = 75;
    }
    
    drawItem() {
      fill(this.bodyColor);
      push();
      translate(this.bodyPosition);
      scale(this.bodyScale);
      sphere(this.bodySize);
      pop();
    }
  }
  
  class Arms {
    constructor() {
      
    }
    drawItem() {
      
    }
  }
  
  class Legs  {
    constructor() {
      self.legColor = color(255, 255, 225);
      self.leftLegPosition = createVector(75, 300, 100);
      self.rightLegPosition = createVector(-75, 300, 100);
      self.leftLegRotateX = 90;
      self.rightLegRotateX = 90;
      self.leftLegRotateZ = -15;
      self.rightLegRotateZ = 15;
      self.legSize = createVector(25, 125);
    }
    drawItem() {
      fill(self.legColor);
      push();
      translate(self.leftLegPosition);
      rotateX(self.leftLegRotateX);
      rotateZ(self.leftLegRotateZ);
      cylinder(self.legSize.x, self.legSize.y);
      pop();
  
      push();
      translate(self.rightLegPosition);
      rotateX(self.rightLegRotateX);
      rotateZ( self.rightLegRotateZ);
      cylinder(self.legSize.x, self.legSize.y);
      pop();
    }
  }
  