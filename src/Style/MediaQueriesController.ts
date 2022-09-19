import { ComponentFrame } from "../Core/ComponentFrame";

export class MediaQueriesController {
  protected static $engine: MediaQueriesController;
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

  static eventsOnResize: any[] = []

  static eventWindow = (e: keyof WindowEventMap) =>
    window.addEventListener(e, () => MediaQueriesController.eventsOnResize.forEach((F) => F()) , false);

  constructor() {
    MediaQueriesController.currentBreakPoint =
      MediaQueriesController.getCurrentBreakPoint();
  }

  get $engine() {
    if (!MediaQueriesController.$engine) {
      MediaQueriesController.$engine = new MediaQueriesController();
      return MediaQueriesController.$engine;
    }
    return MediaQueriesController.$engine;
  }

  protected static ApplyInBreakPoint(
    breakPoint: keyof TBreakPoints,
    call: () => ComponentFrame | undefined
  ) {
    function handleChangeBreakPoints() {
      let timer: any = null;
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (breakPoint === MediaQueriesController.getCurrentBreakPoint()) {
          call()?.stylize('transition')('0.6s');
        }
      }, 200);
    }

    MediaQueriesController.eventsOnResize.push(handleChangeBreakPoints);

    ["resize", "load"].map((e: any) => {
      MediaQueriesController.eventWindow(e);
    });
  }

  private static getCurrentBreakPoint() {
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
    MediaQueriesController.ApplyInBreakPoint("xs", call);
    return call();
  }
  sm(call: () => ComponentFrame | undefined) {
    MediaQueriesController.ApplyInBreakPoint("sm", call);
    return call();
  }
  md(call: () => ComponentFrame | undefined) {
    MediaQueriesController.ApplyInBreakPoint("md", call);
    return call();
  }
  lg(call: () => ComponentFrame | undefined) {
    MediaQueriesController.ApplyInBreakPoint("lg", call);
    return call();
  }
  xl(call: () => ComponentFrame | undefined) {
    MediaQueriesController.ApplyInBreakPoint("xl", call);
    return call();
  }
  xxl(call: () => ComponentFrame | undefined) {
    MediaQueriesController.ApplyInBreakPoint("xxl", call);
    return call();
  }
}

const mediaQueriesEngine = new MediaQueriesController();

export default mediaQueriesEngine;
