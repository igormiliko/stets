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
StyleController.stylize("overflow", Virtual__DOOM.gateway)("hidden");

const comp_factory = new ComponentFactory(StyleController);

const Container = comp_factory.make("main-container", "div");

const logo = new Logo(comp_factory).render();
logo?.xs(() =>
  logo?.stylize("transform")("scale(0.3)").stylize("marginBottom")("20vh")
);

const dots_square_container = comp_factory.make("div", "dots-square-container");

const dots_dark = new SquareDots(comp_factory, "square-dots-container-dark").render("dk-grey");
const dots_light = new SquareDots(comp_factory, "square-dots-container-light").render("lh-grey")!;



Virtual__DOOM.gateway?.insertAdjacentElement("beforeend", Container.element!);

Container.display("flex").justify("center").align("center").stylize('overflow')('hidden');

await new Promise (r => {
  dots_square_container
    .hug(
      dots_dark,
      dots_light
        .stylize("position")("absolute")
        .stylize("top")("0px")
    )
    .stylize("position")("absolute")
    // .stylize("right")("152px")
    .xs(() =>
      dots_square_container
        .stylize("transform")("scale(0.4)")
        .stylize("top")("48vh")
        // .stylize("right")("0px")
    )
    ?.sm(() => dots_square_container.stylize("right")("16vw").stylize("top")("40vh"))
    ?.md(() => dots_square_container.stylize("right")("50vw"))
    ?.lg(() => dots_square_container.stylize("right")("50vw"));
    r(true)
})

var id: any = null;
function myMove() {
  var elem = dots_light?.element   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 152) {
      clearInterval(id);
    } else {
      pos++; 
      elem!.style.top = pos + 'px'; 
    }
  }
}
myMove()

Container.hug(logo, dots_square_container);

Virtual__DOOM.gateway!.insertAdjacentElement("beforeend", Container.element!);
