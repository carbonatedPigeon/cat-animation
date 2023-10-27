class Table extends DrawableItem {
  constructor() {
    super();
    this.itemColor = color(0);
    //creating table legs counter-clockwise
    this.tableLegs = [
      new TableLeg(createVector(-40, 50, 40)),
      new TableLeg(createVector(40, 50, 40)),
      new TableLeg(createVector(40, 50, -40)),
      new TableLeg(createVector(-40, 50, -40)),
    ];
    this.tableSidePanels = [
      new TableSidePanel(createVector(40, 10, 0)),
      new TableSidePanel(createVector(0, 10, 40), 90),
      new TableSidePanel(createVector(-40, 10, 0)),
      new TableSidePanel(createVector(0, 10, -40), 90),
    ]
    this.tableTop = new TableTop();
    this.components = this.tableLegs.concat(this.tableSidePanels);
    this.components.push(this.tableTop);
  }
}


class TableLeg extends BoxComponent {
  constructor(position) {
    super();
    this.itemDepth = 10;
    this.itemHeight = 100;
    this.itemWidth = 10;
    this.dimensions = createVector(10, 100, 10);
    this.forwardPosition = position.x;
    this.verticalPosition = position.y;
    this.horizontalPosition = position.z;
    this.itemColor = color(0);
  }
}


class TableSidePanel extends BoxComponent {
  constructor(position, yRotation) {
    super();
    this.itemDepth = 5;
    this.itemHeight = 20;
    this.itemWidth = 70;
    this.forwardPosition = position.x;
    this.verticalPosition = position.y;
    this.horizontalPosition = position.z;
    //default Y rotation to 0 if parameter not given 
    if (yRotation) {
      this.yRotation = yRotation;
    } else {
      this.yRotation = 0;
    }
  }
}


class TableTop extends BoxComponent {
  constructor() {
    super();
    this.itemDepth = 100;
    this.itemHeight = 10;
    this.itemWidth = 100;
  }
}
  