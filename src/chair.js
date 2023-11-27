class Chair extends ComponentAmalgamation {
    constructor() {
        super();
        this.chairDimensions = new ChairDimensions();
        this.seat = new Table();
        this.seat.itemColor = color(0);
        this.seat.itemTexture = null;
        this.components = [
            this.seat,
            new ChairBack(this.chairDimensions),
            new ChairCusion(this.chairDimensions)
        ];
    }
}

class ChairBack extends ComponentAmalgamation {
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
        //left
        this.leftBackVerticalBox.itemDepth = this.chairDimensions.boxWidth;
        this.leftBackVerticalBox.itemHeight = this.chairDimensions.backHeight;
        this.leftBackVerticalBox.itemWidth = this.chairDimensions.boxDepth;
        //right
        this.rightBackVerticalBox.itemDepth = this.chairDimensions.boxWidth;
        this.rightBackVerticalBox.itemHeight = this.chairDimensions.backHeight;
        this.rightBackVerticalBox.itemWidth = this.chairDimensions.boxDepth;
        //setting positions of left/right vertical boxes
        //left
        this.leftBackVerticalBox.forwardPosition = chairBackWidthPosition;
        this.leftBackVerticalBox.verticalPosition = -this.chairDimensions.backHeight / 2;
        this.leftBackVerticalBox.horizontalPosition = -chairBackDepth;
        //right
        this.rightBackVerticalBox.verticalPosition = -this.chairDimensions.backHeight / 2;
        this.rightBackVerticalBox.horizontalPosition = chairBackDepth;
        this.rightBackVerticalBox.forwardPosition = chairBackWidthPosition;
        //dimensions of horizontal boxes on back of chair
        //top
        this.topHorizontalBox.itemDepth = this.chairDimensions.boxDepth;
        this.topHorizontalBox.itemHeight = this.chairDimensions.boxWidth;
        this.topHorizontalBox.itemWidth = this.chairDimensions.chairLength + this.chairDimensions.boxWidth; //extending past vertical boxes
        //middle
        this.middleHorizontalBox.itemDepth = this.chairDimensions.boxDepth;
        this.middleHorizontalBox.itemHeight = this.chairDimensions.boxWidth;
        this.middleHorizontalBox.itemWidth = this.chairDimensions.chairLength - this.chairDimensions.boxWidth;
        //position of of horizontal boxes on back of chair
        //top
        this.topHorizontalBox.forwardPosition = -chairBackDepth;
        this.topHorizontalBox.verticalPosition = -this.chairDimensions.backHeight;
        this.topHorizontalBox.horizontalPosition = 0;
        //middle
        this.middleHorizontalBox.forwardPosition = -chairBackDepth;
        this.middleHorizontalBox.verticalPosition = -this.chairDimensions.backHeight / 2;
        this.middleHorizontalBox.horizontalPosition = 0;
    }
}

class ChairCusion extends BoxComponent {
    constructor(chairDimensions) {
        super();
        //default color is white
        this.itemColor = color(255);
        this.itemTexture = chairCushionTexture;
        this.forwardPosition = (chairDimensions.chairWidth * 0.1 / 2) - chairDimensions.boxWidth;
        this.verticalPosition = -chairDimensions.boxWidth;
        this.horizontalPosition = 0;
        this.itemDepth = chairDimensions.chairWidth - (chairDimensions.chairWidth * 0.1);
        this.itemHeight = chairDimensions.boxWidth;
        this.itemWidth = chairDimensions.chairDepth - (chairDimensions.chairWidth * 0.1);
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