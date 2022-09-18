import { ComponentFactory } from "./Core/ComponentFactory";
import { Logo } from "./Components/Logo/Logo";
import Virtual__DOOM from "./Core/V_doom";
import StyleController from "./Style/";
import ColorPallete from "./Style/ColorPallete";
import { SquareDots } from "./Components/SquareDots";

new Virtual__DOOM(document);
Virtual__DOOM.gateway!.style.backgroundColor = ColorPallete.colors.background;
StyleController.stylize("display", Virtual__DOOM.gateway)("flex");
StyleController.stylize("justifyContent", Virtual__DOOM.gateway)("center");
StyleController.stylize("alignItems", Virtual__DOOM.gateway)("center");

const comp_factory = new ComponentFactory(StyleController);

const Container = comp_factory.make("main-container", "div");

const logo = new Logo(comp_factory).render();
logo?.xs(() =>
  logo?.stylize("transform")("scale(0.3)").stylize("marginBottom")("20vh")
);

const dots_square_container = comp_factory.make("div", "dots-square-container");

const dots_dark = new SquareDots(comp_factory, "square-dots-container-dark");
const dots_light = new SquareDots(comp_factory, "square-dots-container-light");

Virtual__DOOM.gateway?.insertAdjacentElement("beforeend", Container.element!);

Container.display("flex").justify("center").align("center");

dots_square_container
  .hug(
    dots_dark.render("lh-grey"),
    dots_light
      .render("dk-grey")!
      .stylize("position")("absolute")
      .stylize("top")("152px")
  )
  .stylize("position")("absolute")
  .stylize("right")("152px")
  .xs(() =>
    dots_square_container
    .stylize("transform")("scale(0.4)")
    .stylize("top")("40vh")
    .stylize("right")("0px")
  );

Container.hug(logo, dots_square_container);

Virtual__DOOM.gateway!.insertAdjacentElement("beforeend", Container.element!);
