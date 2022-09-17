import PalleteOfColors, { ColorPallete } from "./ColorPallete";

export class StyleController {
  pallete: ColorPallete["colors"] = PalleteOfColors.colors;
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

  borderColor(
    color: keyof ColorPallete["colors"],
    element?: typeof this.element
  ) {
    this.setElement(element);
    this.element!.style.borderColor = this.pallete[color];
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
