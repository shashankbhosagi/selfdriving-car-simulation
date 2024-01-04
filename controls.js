class Controls {
  constructor(type) {
    this.forward = false;
    this.left = false;
    this.reverse = false;
    this.right = false;

    switch (type) {
      case "KEYS":
        this.#addKeyboardListners();
        break;
      case "DUMMY":
        this.forward = true;
        break;

      default:
        break;
    }
  }
  // # refers to private class :)
  #addKeyboardListners() {
    document.onkeydown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
      }
      // console.table(this); //for debugging
    };
    document.onkeyup = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;
      }
      // console.table(this); //for debugging
    };
  }
}
