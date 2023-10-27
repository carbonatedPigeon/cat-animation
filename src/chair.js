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
        //color default to black
        this.itemColor = color(0);
        this.chairDimensions = chairDimensions;
        //setting up chair back components
        this.leftBackVerticalBox = new BoxComponent();
        this.rightBackVerticalBox = new BoxComponent();
        this.topHorizontalBox = new BoxComponent();
        this.middleHorizontalBox = new BoxComponent();
        this.components = [
            this.leftBackVerticalBox,
            this.rightBackVerticalBox,
            this.topHorizontalBox,
            this.middleHorizontalBox,
        ];
        this.setUpDimensionsAndPositions();
    }

    setUpDimensionsAndPositions() {
        let chairBackDepth = (-this.chairDimensions.chairDepth / 2) + this.chairDimensions.boxWidth;
        let chairBackWidthPosition = (this.chairDimensions.chairWidth / 2) - (this.chairDimensions.boxWidth / 2);
        
        //setting dimensions of left/right vertical boxes
        let verticalBoxDepth = this.chairDimensions.boxWidth;
        let verticalBoxHeight = this.chairDimensions.backHeight;
        let verticalBoxWidth = this.chairDimensions.boxDepth
        this.leftBackVerticalBox.setItemDimensions(
            verticalBoxDepth, 
            verticalBoxHeight, 
            verticalBoxWidth
        );
        this.rightBackVerticalBox.setItemDimensions(
            verticalBoxDepth, 
            verticalBoxHeight, 
            verticalBoxWidth
        );
        //setting positions of left/right vertical boxes
        let backVerticalBoxForwardPosition = chairBackWidthPosition;
        let backVerticalBoxVerticalPosition = -this.chairDimensions.backHeight / 2;
        let leftBackVerticalBoxHorizontalPositon = -chairBackDepth;
        let rightBackVerticalBoxHorizontalPosition = -leftBackVerticalBoxHorizontalPositon
        this.leftBackVerticalBox.setItemPosition(
            backVerticalBoxForwardPosition, 
            backVerticalBoxVerticalPosition, 
            leftBackVerticalBoxHorizontalPositon,
        );
        this.rightBackVerticalBox.setItemPosition(
            backVerticalBoxForwardPosition, 
            backVerticalBoxVerticalPosition, 
            rightBackVerticalBoxHorizontalPosition,
        );
        //dimensions of top horizontal box on back of chair
        let horizontalBoxDepth = this.chairDimensions.boxDepth;
        let topHorizontalBoxWidth = this.chairDimensions.chairLength + this.chairDimensions.boxWidth; //extending past vertical boxes
        let horizontalBoxHeight = this.chairDimensions.boxWidth
        this.topHorizontalBox.setItemDimensions(
            horizontalBoxDepth,
            horizontalBoxHeight,
            topHorizontalBoxWidth,
        );
        //dimensions of middle horizontal box on back of chair
        let middleHorizontalBoxWidth = this.chairDimensions.chairLength - this.chairDimensions.boxWidth;
        this.middleHorizontalBox.setItemDimensions(
            horizontalBoxDepth,
            horizontalBoxHeight,
            middleHorizontalBoxWidth,
        );
        //position of top horizontal box on back of chair
        let horizontalBoxForwardPosition = -chairBackDepth;
        let topHorizontalBoxVerticalPosition = -this.chairDimensions.backHeight;
        let horizontalBoxHorizontalPosition = 0;
        this.topHorizontalBox.setItemPosition(
            horizontalBoxForwardPosition, 
            topHorizontalBoxVerticalPosition, 
            horizontalBoxHorizontalPosition
        );
        //position of middle horizontal box on back of chair
        let middleHorizontalBoxVerticalPosition = -this.chairDimensions.backHeight / 2;
        this.middleHorizontalBox.setItemPosition(
            horizontalBoxForwardPosition, 
            middleHorizontalBoxVerticalPosition, 
            horizontalBoxHorizontalPosition
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