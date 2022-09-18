import { ComponentFrame } from "../Core/ComponentFrame";

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

  protected ApplyInBreakPoint(breakPoint: keyof TBreakPoints, call: () => ComponentFrame | undefined) {
    let timer: any = null;
    ['resize', 'onload'].map((e) => {
      (() =>
        window.addEventListener(e, () => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            if (breakPoint === this.getCurrentBreakPoint()) {
              call()
            }
          }, 200);
        }))();
    })
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

   xs(call: () => ComponentFrame | undefined) {
    this.ApplyInBreakPoint('xs', call)
    return call()
  }
  sm(call: () => ComponentFrame | undefined) {
    this.ApplyInBreakPoint('sm', call)
    return call()
  }
  md(call: () => ComponentFrame | undefined) {
    this.ApplyInBreakPoint('md', call)
    return call()
  }
  lg(call: () => ComponentFrame | undefined) {
    this.ApplyInBreakPoint('lg', call)
    return call()
  }
  xl(call: () => ComponentFrame | undefined) {
    this.ApplyInBreakPoint('xl', call)
    return call()
  }
  xxl(call: () => ComponentFrame | undefined) {
    this.ApplyInBreakPoint('xxl', call)
    return call()
  }
}

export default new MediaQueriesController();
