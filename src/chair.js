class Chair extends DrawableItem {
    constructor() {
        super();
        this.chairDimensions = new ChairDimensions();
        this.components = [
        new Table(),
        new ChairBack(this.chairDimensions),
        new ChairCusion(this.chairDimensions)
        ];
    }
}

class ChairBack extends DrawableItem {
    constructor(chairDimensions) {
        super();
        this.chairDimensions = chairDimensions;
        //default color is black
        this.itemColor = color(0);
    }

    drawItem() {
        this.setUpDimensionsAndPositions();
        //left vertical box
        fill(this.itemColor);
        push();
        translate(this.leftBackVerticalBoxPosition);
        box(
        this.backVerticalBoxDimensions.x, 
        this.backVerticalBoxDimensions.y, 
        this.backVerticalBoxDimensions.z
        );
        pop();
        //right vertical box
        push();
        translate(this.rightBackVerticalBoxPosition);
        box(
        this.backVerticalBoxDimensions.x, 
        this.backVerticalBoxDimensions.y, 
        this.backVerticalBoxDimensions.z
        );
        pop();
        //top horizontal box
        push();
        translate(this.topHorizontalBoxPosition);
        box(
        this.topHorizontalBoxDimensions.x, 
        this.topHorizontalBoxDimensions.y, 
        this.topHorizontalBoxDimensions.z
        );
        pop();
        //middle horizontal box
        push();
        translate(this.middleHorizontalBoxPosition);
        box(
            this.middleHorizontalBoxDimensions.x, 
            this.middleHorizontalBoxDimensions.y, 
            this.middleHorizontalBoxDimensions.z
        );
        pop();
    }

    setUpDimensionsAndPositions() {
        let chairBackDepth = (-this.chairDimensions.chairDepth / 2) + this.chairDimensions.boxWidth;
        let chairBackWidthPosition = (this.chairDimensions.chairWidth / 2) - (this.chairDimensions.boxWidth / 2);
        let topHorizontalBoxWidth = this.chairDimensions.chairLength + (this.chairDimensions.boxWidth * 2);
        this.backVerticalBoxDimensions = createVector(
            this.chairDimensions.boxWidth, 
            this.chairDimensions.backHeight, 
            this.chairDimensions.boxDepth
        );
        this.leftBackVerticalBoxPosition = createVector(
            chairBackWidthPosition, 
            -this.chairDimensions.backHeight / 2, 
            -chairBackDepth
        );
        this.rightBackVerticalBoxPosition = createVector(
        -chairBackWidthPosition, 
        -this.chairDimensions.backHeight / 2, 
        -chairBackDepth
        );
        //dimensions of top horizon box on back of chair
        this.topHorizontalBoxDimensions = createVector(
        topHorizontalBoxWidth, //extending past vertical boxes
        this.chairDimensions.boxWidth,
        this.chairDimensions.boxDepth
        );
        //position of top horizon box on back of chair
        this.topHorizontalBoxPosition = createVector(
        0, 
        -this.chairDimensions.backHeight, 
        -chairBackDepth
        );
        //dimensions of middle horizon box on back of chair
        this.middleHorizontalBoxDimensions = createVector(
        this.chairDimensions.chairLength - this.chairDimensions.boxWidth,
        this.chairDimensions.boxWidth,
        this.chairDimensions.boxDepth
        );
        //position of middle horizon box on back of chair
        this.middleHorizontalBoxPosition = createVector(
        0,
        -this.chairDimensions.backHeight / 2,
        -chairBackDepth
        );
    }
}

class ChairCusion {
    constructor(chairDimensions) {
        //default color is white
        this.itemColor = color(255);
        this.position = createVector(
        0,
        -chairDimensions.boxWidth,
        (chairDimensions.chairWidth * 0.1 / 2) - chairDimensions.boxWidth
        );
        this.dimensions = createVector(
        chairDimensions.chairWidth - (chairDimensions.chairWidth * 0.1), 
        chairDimensions.boxWidth, 
        chairDimensions.chairDepth - (chairDimensions.chairWidth * 0.1)
        );
    }
    drawItem() {
        fill(this.itemColor)
        push();
        translate(this.position);
        box(this.dimensions.x, this.dimensions.y, this.dimensions.z);
        pop();
    }
}

class ChairDimensions {
    constructor() {
        this.backHeight = 120;
        this.boxWidth = 10;
        this.boxDepth = 10;
        this.chairDepth = 100;
        this.chairWidth = 100;
        this.chairLength = 100;
    }
}