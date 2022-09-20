import { Lines_piston } from "../Lines_piston";
import { Border } from "./Border";
import { Border_image } from "./Border_image";

export class Border_segment_ring {
  private piston: Lines_piston;
  private BORDER_CONFIG = new Border();
  private border_left: Border = this.BORDER_CONFIG;
  private border_top: Border = this.BORDER_CONFIG;
  private border_right: Border = this.BORDER_CONFIG;
  private border_bottom: Border = this.BORDER_CONFIG;
  private border_image: Border_image | null = null;

  constructor(piston: Lines_piston) {
    this.piston = piston;
  }

  border(){}
  left(){}
  top(){}
  right(){}
  bottom(){}
  x(){}
  y(){}
  color(){}
  style(){}
  radius(){}
  width(){}
  collapse(){}
  spacing(){}
  image(){}
}
