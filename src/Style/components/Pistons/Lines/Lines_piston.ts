import { Piston } from "../AbstractPiston";
import { Border_segment_ring } from "./Border_segment_ring/Border_segment_ring";

export class Lines_piston extends Piston {
  constructor(element: HTMLElement | null | undefined) {
    super(element);
  }

  Border_segment_ring() {
    return new Border_segment_ring(this);
  }
}
