import { ColorPallete } from "../Style/config/ColorPallete";
import { Typography } from "../Style/config/Typography";
import { ComponentFactory } from "./ComponentFactory";
import { ComponentFrame } from "./ComponentFrame";

export abstract class Component {
  protected comp_factory: ComponentFactory;
  protected color_pallete: ColorPallete = new ColorPallete()
  protected typography: Typography = new Typography()
  constructor(factory: ComponentFactory) {
    this.comp_factory = factory;
  }
  protected abstract mount(): void
  protected abstract preRender(): void
  abstract render(): ComponentFrame
  abstract destroy(): void
}
