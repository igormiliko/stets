import { Component } from "../Core/AbstractComponent";
import { ComponentFactory } from "../Core/ComponentFactory";
import { ComponentFrame } from "../Core/ComponentFrame";
import { ColorPallete } from "../Style/ColorPallete";

export class SquareDots extends Component {
  squaresDotsContainer: ComponentFrame | null = null;

  constructor(factory: ComponentFactory, id: string) {
    super(factory);
    this.preRender(() => {}, id);
  }

  preRender(
    callback: (scope: this) => void = () => {
      return;
    },
    id: string
  ) {
    this.squaresDotsContainer = this.comp_factory.make(
      "div",
      id
    );
    callback(this);
    return this;
  }

  private stylingDots(
    dot: ComponentFrame,
    color: keyof ColorPallete["colors"]
  ) {
    dot
      .stylize("borderRadius")("8888px")
      .measurement([8, 8], "px")
      .bgColor(color);

    return dot;
  }

  private stylingSquaresDotsContainer() {
    const cells = "24px 24px 24px 24px 24px 24px 24px 24px";
    this.squaresDotsContainer?.xs(() =>
      this.squaresDotsContainer
        ?.display("grid")
        .stylize("grid-template-columns")(cells)
        .stylize("grid-template-rows")(cells)
        .stylize("transform")("rotate(45deg)")
    );
  }

  mount() {
    return 
  }

  render(dotsColor: keyof ColorPallete['colors']) {
    this.stylingSquaresDotsContainer();
    const dots = [...Array(64).keys()].map((dot, ix) => {
      return this.stylingDots(
        this.comp_factory.make("div", `square-dot-${ix}`),
        dotsColor
      );
    });
    this.squaresDotsContainer?.hug(...dots);
    return this.squaresDotsContainer;
  }

  destroy() {
    return 
  }
}
