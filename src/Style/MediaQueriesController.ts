export class MediaQueriesController {
  static device__width = window.innerWidth;
  static device__height = window.innerWidth;
  static currentBreakPoint: keyof TBreakPoints | null = null;
  static _breakPoints: TBreakPoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  };

  constructor() {
    this.UPDATE_DEVICE_MEASUREMENTS();
    MediaQueriesController.currentBreakPoint = this.getCurrentBreakPoint();
  }

  private UPDATE_DEVICE_MEASUREMENTS() {
    return window.addEventListener("resize", () => {
      MediaQueriesController.device__height = window.innerHeight;
      MediaQueriesController.device__width = window.innerWidth;
    });
  }

  protected ApplyInBrakPoint(breakPoint: keyof TBreakPoints, call: () => any) {
    let timer: any = null;
    (() =>
      window.addEventListener("resize", () => {
        clearTimeout(timer);
        timer = setTimeout(() => {

          console.log(breakPoint)
          console.log(this.getCurrentBreakPoint())
          if (breakPoint === this.getCurrentBreakPoint()) {
            call();
          }
        }, 200);
      }))();
    return MediaQueriesController.currentBreakPoint;
  }

  private getCurrentBreakPoint() {
    const $breakPointsTest: Array<(w: number) => keyof TBreakPoints | null> = [
      (w) => (w < 576 ? "xs" : null),

      (w) => (w >= 576 && w < 768 ? "sm" : null),

      (w) => (w >= 768 && w < 992 ? "md" : null),

      (w) => (w >= 992 && w < 1200 ? "lg" : null),

      (w) => (w >= 1200 && w < 1400 ? "xl" : null),

      (w) => (w >= 1400 ? "xxl" : null),
    ];
    const [current] = $breakPointsTest
      .map((a) => a(window.innerWidth))
      .filter((a) => a);
    return current;
  }

  xs(call: any) {
    this.ApplyInBrakPoint('xs', call)
  }
  sm(call: any) {
    this.ApplyInBrakPoint('sm', call)
  }
  md(call: any) {
    this.ApplyInBrakPoint('md', call)
  }
  lg(call: any) {
    this.ApplyInBrakPoint('lg', call)
  }
  xl(call: any) {
    this.ApplyInBrakPoint('xl', call)
  }
  xxl(call: any) {
    this.ApplyInBrakPoint('xxl', call)
  }
}

export default new MediaQueriesController();
