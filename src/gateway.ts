import { ComponentFactory } from "./Core/ComponentFactory";
import { Logo } from "./Components/Logo/Logo";
import Virtual__DOOM from "./Core/V_doom";
import StyleController from "./Style/StyleEngine";
import ColorPallete from "./Style/config/ColorPallete";
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

const dots_square_container = comp_factory.make("dots-square-container", "div");

const dots_dark = new SquareDots(comp_factory, "square-dots-container-dark").render("dk-grey");
const dots_light = new SquareDots(comp_factory, "square-dots-container-light").render("lh-grey")!;

Virtual__DOOM.gateway?.insertAdjacentElement("beforeend", Container.element!);

Container.display("flex").justify("center").align("center")

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
        .stylize("transform")("scale(0.3)")
        .stylize("top")("48vh")
        // .stylize("right")("0px")
    )
    ?.sm(() => dots_square_container.stylize("right")("16vw").stylize("top")("40vh").stylize("transform")("scale(0.4)"))
    ?.md(() => dots_square_container.stylize("right")("50vw").stylize("transform")("scale(0.4)").stylize("top")("40vh"))
    ?.lg(() => dots_square_container.stylize("top")("50vh")?.stylize('right')('20vw').stylize('transform')('scale(0.6)'))
    ?.xl(() => dots_square_container.stylize("top")("50vh")?.stylize('right')('25vw').stylize('transform')('scale(0.8)'));
    r(true)
})
//  component?.right('')
let id: any = null;
function moveDown() {
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 152) {
      clearInterval(id);
    } else {
      pos++; 
      dots_light!.element!.style.top = pos + 'px'; 
    }
  }
}
moveDown()

Container.hug(logo, dots_square_container);

Virtual__DOOM.gateway!.insertAdjacentElement("beforeend", Container.element!);
