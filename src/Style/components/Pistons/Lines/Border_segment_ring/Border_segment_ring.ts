import { Lines_piston } from "../Lines_piston";
import { Border, IBorder_config } from "./Border";
import { Border_image } from "./Border_image";

export class Border_segment_ring {
  private piston: Lines_piston;
  private BORDER_CONFIG: Border | null = null;

  constructor(piston: Lines_piston) {
    this.piston = piston;
  }

  getBORDER_CONFIG(border_config: IBorder_config) {
    if(this.BORDER_CONFIG){
      return 
    }
    this.BORDER_CONFIG = new Border(border_config.border)

    return this.BORDER_CONFIG
  }

  border(border: IBorder_config) {
    const _border = this.getBORDER_CONFIG(border)
    console.log(_border)
    this.piston.element!.style.border = ''

    return this.piston.element;
  }
  left() {
    
    return this.piston.element;
  }
  top() {
    
    return this.piston.element;
  }
  right() {
    
    return this.piston.element;
  }
  bottom() {
    
    return this.piston.element;
  }
  x() {
    
    return this.piston.element;
  }
  y() {
    
    return this.piston.element;
  }
  color() {
    
    return this.piston.element;
  }
  style() {
    
    return this.piston.element;
  }
  radius() {
    
    return this.piston.element;
  }
  width() {
    
    return this.piston.element;
  }
  collapse() {
    
    return this.piston.element;
  }
  spacing() {
    
    return this.piston.element;
  }
  image() {
    
    return this.piston.element;
  }
}
