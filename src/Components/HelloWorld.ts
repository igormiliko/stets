import { Component } from "../Core/AbstractComponent";
import { ComponentFactory } from "../Core/ComponentFactory";
import { ComponentFrame } from "../Core/ComponentFrame";

export class HelloWorld extends Component {
    
    hello_world_container: ComponentFrame | null = null
    constructor(componen_factory: ComponentFactory) {
        super(componen_factory);
        this.preRender();
        this.mount();
    }

  protected preRender() {
    this.hello_world_container = this.comp_factory.make(
        "div",
        "container-hello-world"
    );
  }

  protected mount() {

  }

  render(...args: any) {
    this.hello_world_container?.stylize("width")("300px")
    .stylize("height")("300px")
    .stylize("borderRadius")("9999px")
    .stylize("backgroundColor")(this.color_pallete.getColor('cold_1'))
    .stylize("display")("flex")
    .stylize("justifyContent")("center")
    .stylize("alignItems")("center")
    .stylize("fontSize")("2pt")
    .stylize("color")("#bbb")
    .type("Hello CS50")

    return this.hello_world_container
  }

  destroy() {}
}
