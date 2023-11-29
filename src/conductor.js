class SceneConductor {
  /**
   * Class that initializes and starts the conductors of all objects in Scene
   */
  constructor() {
    this.scene = new Scene();
    this.personConductor = new PersonConductor();
    this.catConductor = new CatConductor();
    this.cupConductor = new CupConductor();
  }

  start() {
    this.scene.drawItem();
    this.personConductor.animate();
    this.catConductor.animate();
    this.cupConductor.animate();
  }
}

class PersonConductor {
  /**
   * Class that controls the movement of the person object in scene
   */
  constructor() {
    this.person = new Person();
    this.setUp();
  }

  setUp() {
    /**
     * Sets the inital position of person object
     */
    this.person.setItemPosition(40, -20, 75);
    this.person.itemScale = createVector(0.5, 0.5, 0.5);
    this.person.yRotation = -30;
  }

  animate() {
    /**
     * Controlls the position of person as time increases
     */
    this.person.drawItem();
  }
}

class CatConductor {
  /**
   * Class that controls the movement of the cat object in scene
   */
  constructor() {
    this.cat = new Cat();
    this.setUp();
  }

  setUp() {
    /**
     * Sets initial position of cat object
     */
    this.cat.setItemPosition(-500, 125, 400);
    this.cat.itemScale = createVector(0.3, 0.35, 0.3);
    this.cat.yRotation = -90;
  }

  animate() {
    /**
     * Controls the position of cat as time increases
     */
    this.cat.drawItem();
  }
}

class CupConductor {
  /**
   * Class that controls the movement of the cup object in scene
   */
  constructor() {
    this.cup = new Cup();
    this.setUp();
  }

  setUp() {
    /**
     * Sets inital position of cup object
     */
    this.cup.setItemPosition(-420, 110, -175);
  }

  animate() {
    /**
     * Controls the position of cup object as time increases
     */
    this.cup.drawItem();
  }
}