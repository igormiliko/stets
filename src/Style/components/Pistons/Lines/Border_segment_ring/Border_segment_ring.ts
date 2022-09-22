import ColorPallete from "../../../../config/ColorPallete";
import { Lines_piston } from "../Lines_piston";
import { Border, IBorder_config } from "./Border";

export class Border_segment_ring {
  private piston: Lines_piston;
  constructor(piston: Lines_piston) {
    this.piston = piston;
  }

  getBORDER_CONFIG(border_config: IBorder_config) {
    return new Border(border_config.border);
  }

  border(config: IBorder_config) {
    const _border = this.getBORDER_CONFIG(config);

    _border.border[2] = ColorPallete.getColor(_border.border[2])

    if (this.piston.element) {

      console.log('Aion', _border?.border.join(" ").replace(",", ""))
      this.piston.element.style.border = _border?.border.join(" ").replace(",", "")
      this.piston.element.style['borderRadius'] = '9999px'
    }
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
