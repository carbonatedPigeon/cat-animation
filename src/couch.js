class Couch extends ComponentAmalgamation {
  constructor() {
    super();
    //setting up couch components
    this.couchDimensions = new CouchDimensions();
    this.couchBack = new CouchBack(this.couchDimensions);
    this.couchSeatCushions = new CouchSeatCushions(this.couchDimensions);
    this.couchBackCushions = new CouchBackCushions(this.couchDimensions);
    this.couchArms = new CouchArms(this.couchDimensions);
    this.bottomSection = new CouchBottomSection();
    this.components = [
      this.couchBack,
      this.couchSeatCushions,
      this.couchBackCushions,
      this.couchArms,
      this.bottomSection
    ];
  }
}


class CouchBack extends BoxComponent {
  constructor(couchDimensions) {
    super();
    //setting item dimensions
    this.itemDepth = couchDimensions.cushionHeight;
    this.itemWidth = (couchDimensions.cushionWidth * 2) + (couchDimensions.cushionHeight * 2)
    this.itemHeight = 125;
    //setting item position
    this.forwardPosition = (couchDimensions.cushionWidth / 2) + (this.itemDepth / 2);
    this.verticalPosition = -12.5;
    this.horizontalPosition = 0;
    this.position = createVector(
      this.forwardPosition, 
      this.verticalPosition,
      this.horizontalPosition
    );
  }
}

class CouchSeatCushions extends YSymmetricCoupledComponents {
  constructor(couchDimensions) {
    super();
    let leftHorizontalPosition = -(couchDimensions.cushionWidth / 2);
    this.left = new CouchSeatCushion(
      couchDimensions,
      leftHorizontalPosition
    );
    let rightHorizontalPosition = -leftHorizontalPosition;
    this.right = new CouchSeatCushion(
      couchDimensions,
      rightHorizontalPosition
    );
    this.components = [
      this.left,
      this.right,
    ]
  }
}


class CouchSeatCushion extends BoxComponent {
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


class CouchBackCushions extends YSymmetricCoupledComponents {
  constructor(couchDimensions)  {
    super();
    let leftHorizontalPosition = -(couchDimensions.cushionWidth / 2);
    let rightHorizontalPosition = -leftHorizontalPosition;
    this.left = new CouchBackCushion(
      couchDimensions,
      leftHorizontalPosition
    );
    this.right = new CouchBackCushion(
      couchDimensions,
      rightHorizontalPosition
    );
    this.components = [
      this.left,
      this.right,
    ]
  }
}

class CouchBackCushion extends BoxComponent {
  constructor(couchDimensions, horizontalPosition) {
    super();
    this.itemDepth = couchDimensions.cushionHeight;//x plane
    this.itemHeight = 60; //y plane
    this.itemWidth = couchDimensions.cushionWidth; //z plane
    this.zRotation = -15;
    this.forwardPosition = 30; //x plane
    this.verticalPosition = -45; //y plane
    this.horizontalPosition = horizontalPosition; //z plane
  }
}


class CouchArms extends YSymmetricCoupledComponents {
  constructor(couchDimensions) {
    super();
    let leftHorizontalPosition = -(couchDimensions.cushionWidth + (couchDimensions.cushionHeight / 2))
    this.left = new CouchArm(
      couchDimensions,
      leftHorizontalPosition
    );
    let rightHorizontalPosition = couchDimensions.cushionWidth + (couchDimensions.cushionHeight / 2)
    this.right = new CouchArm(
      couchDimensions,
      rightHorizontalPosition
    );
    this.components = [
      this.left,
      this.right,
    ]
  }
}


class CouchArm extends BoxComponent {
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


class CouchBottomSection extends BoxComponent {
  constructor() {
    super();
    this.itemDepth = 100;
    this.itemHeight = 40;
    this.itemWidth = 200;
    this.forwardPosition = -10;
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





