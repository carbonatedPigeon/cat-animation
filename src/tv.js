class TV extends ComponentAmalgamation {
    constructor() {
        super();
        this.screen = new TVScreen();
        this.monitor = new TVMonitor();
        this.back = new TVBack();
        this.standBase = new TVStandBase();
        this.standNeck = new TVStandNeck(); 
        this.components = [
            this.screen,
            this.monitor,
            this.back,
            this.standBase,
            this.standNeck,
        ];
    }
}

class TVScreen extends RectComponent {
    constructor() {
        super();
        this.itemTexture = tvScreenImage;
        this.itemColor = color(0);
        this.itemWidth = 280;
        this.itemHeight = 180;
        this.xCoordinate = -140;
        this.yCoordinate = -90;
        this.forwardPosition = -6;
        this.yRotation = -90;
    }
}

class TVMonitor extends BoxComponent {
    constructor() {
        super();
        this.itemColor = color(50, 50, 50);
        this.itemDepth = 10;
        this.itemHeight = 200;
        this.itemWidth = 300;
    }
}

class TVBack extends BoxComponent {
    constructor() {
        super();
        this.itemDepth = 15;
        this.itemHeight = 125;
        this.itemWidth = 125;
        this.forwardPosition = 10;
        this.verticalPosition = 35;
    }
}

class TVStandBase extends BoxComponent {
    constructor() {
        super();
        this.forwardPosition = 20;
        this.verticalPosition = 100;
        this.itemDepth = 15;
        this.itemWidth = 30;
        this.itemHeight = 50;
    }
}

class TVStandNeck extends BoxComponent {
    constructor() {
        super();
        this.forwardPosition = 5;
        this.verticalPosition = 125;
        this.itemDepth = 50;
        this.itemHeight = 5;
        this.itemWidth = 150;
    }
}
