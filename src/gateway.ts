import { HelloCs50 } from "./Components/HelloCs50";
import { ComponentFactory } from "./Core/ComponentFactory";
import Virtual__DOOM from "./Core/V_doom";
import ColorPallete from "./Style/config/ColorPallete";
import StyleController from "./Style/StyleEngine";

new Virtual__DOOM(document);

const comp_factory = new ComponentFactory(StyleController);

const Container = comp_factory.make("main-container", "div");
const Title = comp_factory.make("main-title", "h1")

Virtual__DOOM.gateway?.insertAdjacentElement("beforeend", Container.element!);

const helloWorld = new HelloCs50(comp_factory)

helloWorld.preRender();
Container.stylize("width")("100vw")
  .stylize("height")("100vh")
  .stylize("display")("flex")
  .stylize("justifyContent")("center")
  .stylize("alignItems")("center")
  .stylize("backgroundColor")(ColorPallete.colors.background)
  .stylize("color")("white")
  .hug(
    helloWorld.render(),
    Title.type("This is CS50 !")
      .stylize("position")("absolute")
      .stylize("top")("15vh")
      .stylize("fontSize")("42pt")
  );

Virtual__DOOM.gateway!.insertAdjacentElement("beforeend", Container.element!);
