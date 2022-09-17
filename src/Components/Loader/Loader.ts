import { Component } from "../core/AbstractComponent";
import { ComponentFactory } from "../core/ComponentFactory";
import { ComponentFrame } from "../core/ComponentFrame";

export class Logo extends Component {
  constructor(factory: ComponentFactory) {
    super(factory);
  }

  initialDimension = 352;
  circles: (null | ComponentFrame)[] = [];
  redDot: null | ComponentFrame = null;
  orangeLine: null | ComponentFrame = null;

  preRender(
    callback: () => void = () => {
      return;
    }
  ) {
    this.circles.push(this.comp_factory.make("circle-1", "div"));
    this.circles.push(this.comp_factory.make("circle-2", "div"));
    this.circles.push(this.comp_factory.make("circle-3", "div"));
    this.circles.push(this.comp_factory.make("circle-4", "div"));
    this.redDot = this.comp_factory.make("red-dot", "div");
    this.orangeLine = this.comp_factory.make("orange-line", "div");
    callback();
    return this;
  }

  private stylingCircles() {
    this.circles.forEach((circle, ix) => {
      circle
        ?.measurement([this.initialDimension, this.initialDimension])
        .align("center")
        .display("flex")
        .justify("center")
        .fontColor("white")
        .bgColor(ix % 2 ? "background" : "background2")
        .border("solid", !ix ? 4 : 1, "cold_1")
        .fashion("borderRadius")("8888px")
        .fashion("margin-inline-start")(`auto`)
        .fashion("margin-bottom")("16px");
      this.initialDimension -= 88;
    });
  }

  private stylingRedDot() {
    this.redDot
      ?.measurement([8, 8])
      .bgColor("warm_1")
      .fashion("borderRadius")("9999px")
      .display("flex")
      .fashion("font-size")("48px")
      .type("Igor M P Delgado")
      .align("center")
      .fashion("position")("relative")
      .fashion("white-space")("nowrap")

  }

  private stylingOrangeLine() {
    this.orangeLine
      ?.measurement([299.5, 2])
      .bgColor("warm_2")
      .fashion("position")("absolute")
      .fashion("right")("7px")
      .fashion("text-align")("end")
      .fashion("text-align")("end")
  }

  render() {
    this.stylingOrangeLine();
    this.stylingRedDot();
    this.stylingCircles();
    this.redDot?.hug(this.orangeLine)
    this.circles[this.circles.length - 1]?.hug(this.redDot);

    this.circles.forEach((circle, ix) => {
      if (this.circles[ix + 1]) circle?.hug(this.circles[ix + 1]);
    });

    return this.circles[0];
  }
}
