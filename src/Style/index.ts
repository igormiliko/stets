import PalleteOfColors, { ColorPallete } from "./ColorPallete";
import typography, { Typography } from "./Typography";

export class StyleController {
  pallete: ColorPallete["colors"] = PalleteOfColors.colors;
  typography: Typography["fontSize"] = typography.fontSize;
  element: HTMLElement | null | undefined = null;

  protected setElement(element?: typeof this.element) {
    try {
      if (this.element) {
        if (element) {
          if (this.element !== element) {
            this.element = element;
          }
        }
        return;
      }
      if (!element) {
        throw new Error("Please provide a HTMLElement to the StyleController");
      }
      if (!this.element) {
        this.element = element;
      }
    } catch (error) {
      console.error(error);
    }
  }

  bgColor(color: keyof ColorPallete["colors"], element?: typeof this.element) {
    this.setElement(element);
    this.element!.style.backgroundColor = this.pallete[color];
    return this;
  }

  border(
    style: string,
    size: number,
    color: keyof ColorPallete["colors"],
    element?: typeof this.element
  ) {
    this.setElement(element);
    this.element!.style.border = `${style} ${size}px ${this.pallete[color]}`;
    return this;
  }

  fontColor(
    color: keyof ColorPallete["colors"],
    element?: typeof this.element
  ) {
    this.setElement(element);
    this.element!.style.color = this.pallete[color];
    return this;
  }

  fontSize(
    size: keyof Typography["fontSize"],
    element?: typeof this.element
  ) {
    this.setElement(element);
    this.element!.style.fontSize = this.typography[size];
    return this;
  }

  display(value: string, element?: typeof this.element) {
    this.setElement(element);
    this.element!.style.display = value;
    return this;
  }

  justify(value: string, element?: typeof this.element) {
    this.setElement(element);
    this.element!.style.justifyContent = value;
    return this;
  }

  align(value: string, element?: typeof this.element) {
    this.setElement(element);
    this.element!.style.alignItems = value;
    return this;
  }

  measurement(
    [width, height]: number[],
    WMeasurement?: TCSSmeasurementUnits,
    HMeasurement?: TCSSmeasurementUnits,
    element?: typeof this.element
  ) {
    this.setElement(element);
    this.element!.style.width = `${width}${
      WMeasurement || HMeasurement || "px"
    }`;
    this.element!.style.height = `${height}${
      HMeasurement || WMeasurement || "px"
    }`;
    return this;
  }

  // m(
  //   [l, t, r, b]: number[],
  //   measurement: TCSSmeasurementUnits,
  //   element?: typeof this.element
  // ) {
  //   this.setElement(element);
  //   this.element!.style.marginLeft = String(l ? l : r ? r : l) + measurement
  //   this.element!.style.marginTop = String(t ? t : b ? b : l) + measurement
  //   this.element!.style.marginRight = String(r ? r : l ? l : l) + measurement
  //   this.element!.style.marginBottom = String(b ? b : t ? t : l) + measurement
  // }

  // p(
  //   [l, t, r, b]: number[],
  //   measurement: TCSSmeasurementUnits,
  //   element?: typeof this.element
  // ) {
  //   this.setElement(element);
  //   this.element!.style.paddingLeft = String(l ? l : r ? r : l) + measurement
  //   this.element!.style.paddingTop = String(t ? t : b ? b : l) + measurement
  //   this.element!.style.paddingRight = String(r ? r : l ? l : l) + measurement
  //   this.element!.style.paddingBottom = String(b ? b : t ? t : l) + measurement
  // }

  // mAbs(
  //   [l, t, r, b]: number[],
  //   measurement: TCSSmeasurementUnits,
  //   element?: typeof this.element
  // ) {
  //   this.setElement(element);
  //   this.element!.style.left = String(l) + measurement
  //   this.element!.style.top = String(t ? t : l) + measurement
  //   this.element!.style.right = String(r ? r : l) + measurement
  //   this.element!.style.bottom = String(b ? b : t ? t : l) + measurement
  // }

  fashion(CSSprop: any, element?: typeof this.element) {
    if (!element) {
      element = this.element;
    }
    return (value: string) => {
      element!.style[CSSprop] = value;
      return this;
    };
  }
}

const styleController = new StyleController();

export default styleController;
