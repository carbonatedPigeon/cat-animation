class Cup {
    constructor() {
        //cup is red
        this.itemColor = color(255, 50, 50)
        this.itemHeight = 50;
    }

    drawItem() {
        fill(this.itemColor);

        beginShape();
        vertex(-10, 0, -5);
        vertex(-10, 0, 5);
        vertex(-15, -this.itemHeight, 5);
        vertex(-15, -this.itemHeight, -5);
        endShape(CLOSE);

        beginShape();
        vertex(-10, 0, 5);
        vertex(-15, -this.itemHeight, 5);
        vertex(-5, -this.itemHeight, 15);
        vertex(-5, 0, 10);
        endShape(CLOSE);

        beginShape();
        vertex(10, 0, -5);
        vertex(10, 0, 5);
        vertex(15, -this.itemHeight, 5);
        vertex(15, -this.itemHeight, -5);
        endShape(CLOSE);

        beginShape();
        vertex(5, 0, 10);
        vertex(5, -this.itemHeight, 15);
        vertex(15, -this.itemHeight, 5);
        vertex(10, 0, 5);
        endShape(CLOSE);

        beginShape();
        vertex(-5, 0, 10);
        vertex(5, 0, 10);
        vertex(5, -this.itemHeight, 15);
        vertex(-5, -this.itemHeight, 15);
        endShape(CLOSE);

        beginShape();
        vertex(5, 0, -10);
        vertex(5, -this.itemHeight, -15);
        vertex(15, -this.itemHeight, -5);
        vertex(10, 0, -5);
        endShape(CLOSE);

        beginShape();
        vertex(-5, 0, -10);
        vertex(5, 0, -10);
        vertex(5, -this.itemHeight, -15);
        vertex(-5, -this.itemHeight, -15);
        endShape(CLOSE);

        beginShape();
        vertex(-5, -this.itemHeight, -15);
        vertex(-5, 0, -10);
        vertex(-10, 0, -5);
        vertex(-15, -this.itemHeight, -5);
        endShape(CLOSE);
        
        //base of cupt
        beginShape();
        vertex(-10, 0, -5);
        vertex(-5, 0, -10);
        vertex(5, 0, -10);
        vertex(10, 0, -5);
        vertex(10, 0, 5);
        vertex(5, 0, 10);
        vertex(-5, 0, 10);
        vertex(-10, 0, 5);
        endShape(CLOSE);
    }
}
  
  