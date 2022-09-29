import { ColorPallete } from "../Style/config/ColorPallete";
import { Typography } from "../Style/config/Typography";
import { ComponentFactory } from "./ComponentFactory";

export abstract class Component {
  protected comp_factory: ComponentFactory;
  protected color_pallete: ColorPallete = new ColorPallete()
  protected typography: Typography = new Typography()
  constructor(factory: ComponentFactory) {
    this.comp_factory = factory;
  }
  protected abstract mount(...args: any): unknown
  abstract preRender(...args: any): unknown
  abstract render(...args: any): unknown
  abstract destroy(...args: any): unknown
}
