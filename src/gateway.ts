import { ComponentFactory } from "./Core/ComponentFactory";
import Virtual__DOOM from "./Core/V_doom";
import StyleController from "./Style/StyleEngine";
import ColorPallete from "./Style/config/ColorPallete";
import { HelloWorld } from "./Components/helloWorld";

new Virtual__DOOM(document);

const comp_factory = new ComponentFactory(StyleController);

const Container = comp_factory.make("main-container", "div");

Virtual__DOOM.gateway?.insertAdjacentElement("beforeend", Container.element!);

const helloWorld = new HelloWorld(comp_factory);

Container.stylize("width")("100vw")
  .stylize("height")("100vh")
  .stylize("display")("flex")
  .stylize("justifyContent")("center")
  .stylize("alignItems")("center")
  .stylize("backgroundColor")(ColorPallete.colors.background)
  .hug(helloWorld.render());

Virtual__DOOM.gateway!.insertAdjacentElement("beforeend", Container.element!);
