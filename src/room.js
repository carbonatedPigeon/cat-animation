class Room extends ComponentAmalgamation {
    constructor() {
        super();
        this.walls = [
            new Wall(
                color(62, 77, 85),
                1000,
                createVector(-500, -1000, -500),
                0,
            ),
            new Wall(
                color(62, 77, 85),
                1000,
                createVector(-500, -1000, 500),
                90,
            ),
            new Wall(
                color(162, 200, 225),
                1000,
                createVector(500, -1000, 500),
                90,
            ),
            new Wall(
                color(152, 190, 215),
                1000,
                createVector(-500, -1000, 500),
                0,
            ),
        ];
        this.floor = new Floor();
        this.ceiling = new Ceiling();
        this.components = this.walls.concat(this.floor);
        this.components.push(this.ceiling);
    }
}

class Wall extends SquareComponent {
    constructor(
        itemColor, 
        sideLength,
        position,
        yRotation,
    ) {
        super();
        this.itemColor = itemColor;
        this.sideLength = sideLength;
        this.forwardPosition = position.x;
        this.verticalPosition = position.y;
        this.horizontalPosition = position.z;
        this.yRotation = yRotation;
    }
}

class Floor extends SquareComponent {
    constructor() {
        super();
        this.forwardPosition = -500;
        this.horizontalPosition = -500;
        this.xRotation = 90;
        this.sideLength = 1000;
    }
}


class Ceiling extends SquareComponent {
    constructor() {
        super();
        this.itemColor = color(100, 100, 100);
        this.forwardPosition = -500;
        this.verticalPosition = -1000;
        this.horizontalPosition = -500;
        this.xRotation = 90;
        this.sideLength = 1000;
    }
}