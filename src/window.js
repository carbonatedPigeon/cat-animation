class Window extends ComponentAmalgamation {
    constructor() {
        super();
        this.background = new WindowBackground();
        this.sill = new WindowSill();
        this.horizontalBars = [
            new WindowHorizontalBar(createVector(25, -200, 0)),
            new WindowHorizontalBar(createVector(25, -400, 0)),
        ];
        this.verticalBars = [
            new WindowVerticalBar(createVector(25, -200, 0)),
            new WindowVerticalBar(createVector(25, -200, -200)),
            new WindowVerticalBar(createVector(25, -200, 200)),
        ];
        this.components = this.horizontalBars.concat(this.verticalBars);
        this.components.push(this.background);
        this.components.push(this.sill);
    }
}

class WindowBackground extends BoxComponent {
    constructor() {
        super();
        this.itemTexture = windowImage;
        this.forwardPosition = 30;
        this.verticalPosition = -200;
        this.itemDepth = 10;
        this.itemHeight = 400;
        this.itemWidth = 400;
    }
}

class WindowSill extends BoxComponent {
    constructor() {
        super();
        //white
        this.itemColor = color(255);
        this.itemDepth = 50;
        this.itemHeight = 15;
        this.itemWidth = 400;
    }
}

class WindowHorizontalBar extends BoxComponent {
    constructor(position) {
        super();
        //white
        this.itemColor = color(255);
        this.itemDepth = 10;
        this.itemHeight = 15;
        this.itemWidth = 400;
        this.forwardPosition = position.x;
        this.verticalPosition = position.y;
        this.horizontalPosition = position.z;
    }
}

class WindowVerticalBar extends BoxComponent {
    constructor(position) {
        super();
        //white
        this.itemColor = color(255);
        this.itemDepth = 10;
        this.itemHeight = 400;
        this.itemWidth = 15;
        this.forwardPosition = position.x;
        this.verticalPosition = position.y;
        this.horizontalPosition = position.z;
    }
}

