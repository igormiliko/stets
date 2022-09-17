export class Responsiveness {
  static device__width = window.innerWidth;
  static device__height = window.innerWidth;

  constructor() {
    this.UPDATE_DEVICE_MEASUREMENTS();
  }

  private UPDATE_DEVICE_MEASUREMENTS() {
    window.addEventListener("resize", () => {
      Responsiveness.device__height = window.innerHeight;
      Responsiveness.device__width = window.innerWidth;
    });

  }

  xs() {

  }

  sm() {}
  md() {}
  lg() {}
  xl() {}
  xxl() {}
}

export default new Responsiveness();
