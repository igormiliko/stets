import PalleteOfColors, { ColorPallete } from "./config/ColorPallete";
import { MediaQueriesController } from "./components/MediaQueriesController";
import typography, { Typography } from "./config/Typography";
import { Lines_piston } from "./components/Pistons/Lines/Lines_piston";
import { IBorder_config } from "./components/Pistons/Lines/Border_segment_ring/Border";

export class StyleController extends MediaQueriesController {
  element: HTMLElement | null | undefined = null;
  pallete: ColorPallete["colors"] = PalleteOfColors.colors;
  typography: Typography["fontSize"] = typography.fontSize;
  Lines_Cilinder: Lines_piston | null = null;

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

  border(config: IBorder_config) {
    console.log(config)
    this.Lines_Cilinder?.Border_segment_ring().init_config(config)
    return this
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
