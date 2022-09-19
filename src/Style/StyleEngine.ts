import PalleteOfColors, { ColorPallete } from "./config/ColorPallete";
import { MediaQueriesController } from "./components/MediaQueriesController";
import typography, { Typography } from "./config/Typography";

export class StyleController extends MediaQueriesController {
  pallete: ColorPallete["colors"] = PalleteOfColors.colors;
  typography: Typography["fontSize"] = typography.fontSize;
  element: HTMLElement | null | undefined = null;

  constructor() {
    super();
  }

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

  

  stylize(CSSprop: any, element?: typeof this.element) {
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
