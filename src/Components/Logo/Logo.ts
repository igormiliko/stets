import { Component } from "../../Core/AbstractComponent";
import { ComponentFactory } from "../../Core/ComponentFactory";
import { ComponentFrame } from "../../Core/ComponentFrame";

export class Logo extends Component {
  constructor(factory: ComponentFactory) {
    super(factory);
    this.preRender();
  }

  initialDimension = 352;
  circles: (null | ComponentFrame)[] = [];
  redDot: null | ComponentFrame = null;
  orangeLine: null | ComponentFrame = null;
  textBox: null | ComponentFrame = null;
  logoWrapper: null | ComponentFrame = null;
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
    this.textBox = this.comp_factory.make("impd", "div");
    this.logoWrapper = this.comp_factory.make("logo-wrapper", "div");
    this.stylingOrangeLine();
    this.stylingRedDot();
    this.stylingCircles();
    this.stylingTextBox();
    this.stylingLogoWrapper();
    callback();
    return this;
  }

  private stylingLogoWrapper() {
    this.logoWrapper
      ?.stylize("width")("600px")
      ?.xs(() => this.logoWrapper?.stylize("transform")("scale(0.3)").stylize("marginBottom")("20vh"))
      ?.md(() => this.logoWrapper?.stylize("transform")("scale(0.3)"))
      ?.sm(() => this.logoWrapper?.stylize("transform")("scale(0.3)"))
      ?.lg(() => this.logoWrapper?.stylize("transform")("scale(0.8)"))
      ?.xl(() => this.logoWrapper?.stylize("transform")("scale(1)"));
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
        .stylize("borderRadius")("8888px")
        .stylize("margin-inline-start")(ix > 0 ? `auto` : "")
        .stylize("margin-bottom")(ix > 0 ? "16px" : "0px");
      this.initialDimension -= 88;
    });
  }

  private stylingRedDot() {
    this.redDot
      ?.measurement([8, 8])
      .bgColor("warm_1")
      .stylize("borderRadius")("9999px")
      .display("flex")
      .stylize("font-size")("48px")
      .align("center")
      .stylize("position")("relative")
      .stylize("white-space")("nowrap");
  }

  private stylingOrangeLine() {
    this.orangeLine
      ?.measurement([299.5, 2])
      .bgColor("warm_2")
      .stylize("position")("absolute")
      .stylize("right")("7px")
      .stylize("text-align")("end")
      .stylize("text-align")("end");
  }

  private stylingTextBox() {
    this.textBox
      ?.type("Igor M P Delgado")
      .stylize("fontWeight")("thin")
      .stylize("marginTop")("66px")
      .stylize("marginLeft")("-3.6px")
      .fontSize("lg");
  }

  mount() {
    return;
  }

  destroy() {
    return;
  }

  render() {
    this.logoWrapper?.hug(this.circles[0]);
    this.redDot?.hug(this.orangeLine, this.textBox);
    this.circles[this.circles.length - 1]?.hug(this.redDot);

    this.circles.forEach((circle, ix) => {
      if (this.circles[ix + 1]) circle?.hug(this.circles[ix + 1]);
    });

    return this.logoWrapper;
  }
}
