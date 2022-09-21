import { ComponentFactory } from "./Core/ComponentFactory";
import Virtual__DOOM from "./Core/V_doom";
import StyleController from "./Style/StyleEngine";
import ColorPallete from "./Style/config/ColorPallete";

new Virtual__DOOM(document);
Virtual__DOOM.gateway!.style.backgroundColor = ColorPallete.colors.background;

StyleController.stylize("display", Virtual__DOOM.gateway)("flex");
StyleController.stylize("justifyContent", Virtual__DOOM.gateway)("center");
StyleController.stylize("alignItems", Virtual__DOOM.gateway)("center");
StyleController.stylize("overflow", Virtual__DOOM.gateway)("hidden");

const comp_factory = new ComponentFactory(StyleController);

const Container = comp_factory.make("main-container", "div");

Virtual__DOOM.gateway?.insertAdjacentElement("beforeend", Container.element!);

Container.stylize("width")("100px")
  .stylize("height")("100px")
  .stylize("backgroundColor")("#ccc")
  .border({
    border: ["groove", [200, "px"], "warm_1"],
    radius: {
        value: 9999,
        measurement: 'px'
    }
  });

Virtual__DOOM.gateway!.insertAdjacentElement("beforeend", Container.element!);
