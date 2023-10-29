//textures
let couchTexture;
function preload() {
  couchTexture = loadImage('resource\\upholstryTexture.jpeg')
}

class CouchBoxComponent extends BoxComponent {
  constructor() {
    super();
  }
  //overwriting parent setItemColor() function
  setItemColor() {
    texture(couchTexture);
    textureMode(NORMAL);
  }
}

class Couch extends ComponentAmalgamation {
  constructor() {
    super();
    this.couchDimensions = new CouchDimensions();
    this.couchBack = new CouchBack(this.couchDimensions);
    //setting up seat cushions
    let leftCushionHorizontalPosition = -(this.couchDimensions.cushionWidth / 2);
    this.leftSeatCushion = new CouchSeatCushion(
      this.couchDimensions,
      leftCushionHorizontalPosition
    );
    let rightCushionHorizontalPosition = -leftCushionHorizontalPosition;
    this.rightSeatCushion = new CouchSeatCushion(
      this.couchDimensions,
      rightCushionHorizontalPosition
    );
    //setting up back cushions
    this.leftBackCushion = new CouchBackCushion(
      this.couchDimensions,
      leftCushionHorizontalPosition
    );
    this.rightBackCushion = new CouchBackCushion(
      this.couchDimensions,
      rightCushionHorizontalPosition
    );
    //setting up arms
    let leftArmHorizontalPosition = -(this.couchDimensions.cushionWidth + (this.couchDimensions.cushionHeight / 2))
    this.leftArm = new CouchArm(
      this.couchDimensions,
      leftArmHorizontalPosition
    );
    let rightArmHorizontalPosition = this.couchDimensions.cushionWidth + (this.couchDimensions.cushionHeight / 2)
    this.rightArm = new CouchArm(
      this.couchDimensions,
      rightArmHorizontalPosition
    );
    //setting up bottom section
    this.bottomSection = new CouchBottomSection();
    this.components = [
      this.couchBack,
      this.leftSeatCushion,
      this.rightSeatCushion,
      this.leftBackCushion,
      this.rightBackCushion,
      this.leftArm,
      this.rightArm,
      this.bottomSection
    ];
  }
}


class CouchBack extends CouchBoxComponent {
  constructor(couchDimensions) {
    super();
    //setting item dimensions
    this.itemDepth = couchDimensions.cushionHeight;
    this.itemWidth = (couchDimensions.cushionWidth * 2) + (couchDimensions.cushionHeight * 2)
    this.itemHeight = 125;
    //setting item position
    this.forwardPosition = -((couchDimensions.cushionWidth / 2) + (this.itemDepth / 2));
    this.verticalPosition = -12.5;
    this.horizontalPosition = 0;
    this.position = createVector(
      this.forwardPosition, 
      this.verticalPosition,
      this.horizontalPosition
    );
  }
}


class CouchSeatCushion extends CouchBoxComponent {
  constructor(couchDimensions, horizontalPosition) {
    super();
    this.itemDepth = couchDimensions.cushionDepth; //x plane
    this.itemHeight = couchDimensions.cushionHeight; //y plane
    this.itemWidth = couchDimensions.cushionWidth; //z plane
    this.forwardPosition = 0; //x plane
    this.verticalPosition = 0; //y plane
    this.horizontalPosition = horizontalPosition; //z plane
  }
}


class CouchBackCushion extends CouchBoxComponent {
  constructor(couchDimensions, horizontalPosition) {
    super();
    this.itemDepth = couchDimensions.cushionHeight;//x plane
    this.itemHeight = 60; //y plane
    this.itemWidth = couchDimensions.cushionWidth; //z plane
    this.zRotation = -15;
    this.forwardPosition = -30; //x plane
    this.verticalPosition = -45; //y plane
    this.horizontalPosition = horizontalPosition; //z plane
  }
}


class CouchArm extends CouchBoxComponent {
  constructor(couchDimensions, horizontalPosition) {
    super();
    this.itemDepth = couchDimensions.cushionDepth;
    this.itemHeight = couchDimensions.cushionWidth;
    this.itemWidth = couchDimensions.cushionHeight;
    this.fowardPosition = 0;
    this.verticalPosition = 0;
    this.horizontalPosition = horizontalPosition;
  }
}


class CouchBottomSection extends CouchBoxComponent {
  constructor() {
    super();
    this.itemDepth = 100;
    this.itemHeight = 40;
    this.itemWidth = 200;
    this.forwardPosition = 10;
    this.verticalPosition = 30;
    this.horizontalPosition = 0;
  }
}


class CouchDimensions {
  constructor() {
    this.cushionWidth = 100;
    this.cushionHeight = 25;
    this.cushionDepth = 125;
  }
}





