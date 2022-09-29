import { Component } from "../Core/AbstractComponent";
import { ComponentFactory } from "../Core/ComponentFactory";
import { ComponentFrame } from "../Core/ComponentFrame";

export class HelloWorld extends Component {
  hello_world_container: ComponentFrame | null = null;
  duck_nozzle_up: ComponentFrame | null = null;
  duck_nozzle_down: ComponentFrame | null = null;
  duck_eye_container: ComponentFrame | null = null;
  duck_right_eye: ComponentFrame | null = null;
  constructor(componen_factory: ComponentFactory) {
    super(componen_factory);
    this.mount();
    this.preRender();
  }

  private styling_container() {
    this.hello_world_container
      ?.stylize("width")("280px")
      .stylize("height")("260px")
      .stylize("borderRadius")("9999px")
      .stylize("backgroundImage")("linear-gradient(#ecb33d, #FED55F)")
      .stylize("display")("flex")
      .stylize("justifyContent")("center")
      .stylize("alignItems")("center")
      .stylize("fontSize")("23pt")
      .stylize("color")("#FF9956")
      .stylize("position")("relative");
  }

  private styling_duck_nozzle() {
    this.duck_nozzle_up
      ?.stylize("backgroundImage")("linear-gradient(#FF9956, #FF9956, #dd7734)")
      .stylize("borderRadius")("100% 100% 100% 100%")
      .stylize("width")("50%")
      .stylize("height")("20%")
      .stylize("position")("absolute")
      .stylize("bottom")("20%");

    this.duck_nozzle_down
      ?.stylize("backgroundImage")("linear-gradient(#FF9956, #FF9956, #cc5534)")
      .stylize("borderRadius")("100% 100% 100% 100%")
      .stylize("width")("80%")
      .stylize("height")("20%")
      .stylize("position")("absolute")
      .stylize("bottom")("12%")
  }

  private duckeye_styling() {
    const r_eye = this.comp_factory.make("div", "r_eye");
    const l_eye = this.comp_factory.make("div", "l_eye");

    const duck__eye = (eye: ComponentFrame) => eye
      ?.stylize("backgroundColor")("white")
      .stylize("width")("46px")
      .stylize("height")("44px")
      .stylize("borderRadius")("100% 100% 50% 50%")
      .stylize("border")("solid 2px #00BEEB");

    this.duck_eye_container?.stylize("display")("flex").stylize("position")("absolute").stylize("top")("30%");
    
    duck__eye(r_eye)
    duck__eye(l_eye)

    this.duck_eye_container?.hug(r_eye, l_eye);
  }
  protected mount() {
    this.hello_world_container = this.comp_factory.make(
      "div",
      "container-hello-world"
    );
    this.duck_nozzle_down = this.comp_factory.make("div", "duck-nozzle");
    this.duck_nozzle_up = this.comp_factory.make("div", "duck-nozzle");
    this.duck_eye_container = this.comp_factory.make("div", "duck-nozzle");
  }

  preRender() {
    this.styling_duck_nozzle();
    this.styling_container();
    this.duckeye_styling();

    this.hello_world_container?.hug(
      this.duck_nozzle_up,
      this.duck_nozzle_down,
      this.duck_eye_container
    );
  }

  render(...args: any) {
    return this.hello_world_container;
  }

  destroy() {}
}
