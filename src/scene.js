class Scene {
    /**
     * Inializes and sets positions of all inanimate objects in scene
     */
    constructor() {
      this.dining_table = new Table();
      this.tv_stand = new Table();
      this.end_table = new Table();
      this.chairs = [
        new Chair(),
        new Chair(),
        new Chair(),
        new Chair(),
      ]
      this.window = new Window();
      this.tv = new TV();
      this.couch = new Couch();
      this.room = new Room();
      this.rug = new Rug();
      this.dining_table_cup = new Cup();
      this.components = [
        this.dining_table,
        this.tv_stand,
        this.end_table,
        this.window,
        this.tv,
        this.couch,
        this.room,
        this.rug,
        this.dining_table_cup,
      ];
      this.components = this.components.concat(this.chairs);
      this.setScene();
    }
  
    setScene() {
      /**
       * Sets positions of all inanimate objects in scene
       */
      //setting up window 
      this.window.setItemPosition(0, 0, -700);
      this.window.itemScale = createVector(1.25, 1.5, 1);
      this.window.yRotation = 90;
      this.window.itemColor = color(60);
      //setting up tv stand
      this.tv_stand.setItemPosition(450, 150, -450)
      this.tv_stand.itemScale = createVector(1.5, 1, 4);
      //setting up TV
      this.tv.setItemPosition(450, -50, -450);
      this.tv.itemScale = createVector(1, 1.5, 1.5);
      //setting up couch
      this.couch.setItemPosition(-460, 150, -460);
      this.couch.itemScale = createVector(2, 2, 2);
      this.couch.yRotation = 180;
      //setting up end table next to couch
      this.end_table.setItemPosition(-460, 115, -110);
      this.end_table.itemScale = createVector(2, 1.5, 2);
      //setting up rug
      this.rug.setItemPosition(25, 250, -450)
      this.rug.yRotation = -90;
      //setting up dining table
      this.dining_table.setItemPosition(0, 100, 350);
      this.dining_table.itemScale = createVector(3, 1.6, 4)
      //setting up chairs
      //start with chair person is sitting on & going clockwise
      this.chairs[0].setItemPosition(45, 150, 80);
      this.chairs[0].yRotation = -30;
      this.chairs[1].setItemPosition(125, 150, 350);
      this.chairs[2].setItemPosition(0, 150, 625);
      this.chairs[2].yRotation = -90;
      this.chairs[3].setItemPosition(-125, 150, 350);
      this.chairs[3].yRotation = 180;
      //setting up other cups
      this.dining_table_cup.setItemPosition(175, 230, 200);
      this.dining_table_cup.zRotation = 90;
      this.dining_table_cup.yRotation = 15;
      //drawing room
      this.room.setItemPosition(-40, 250, -60);
      this.room.itemScale = createVector(1.15, 1, 1.55);
    }

    drawItem() {
        for (const c in this.components) {
            this.components[c].drawItem();
        }
    }
  }