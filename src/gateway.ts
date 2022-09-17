import ComponentFrame from "./Components/ComponentFrame";
import Virtual__DOOM from "./Core/V_doom";
import StyleController from "./Style/";
import ColorPallete from "./Style/ColorPallete";
new Virtual__DOOM(document);

const Container = new ComponentFrame("main-container", "div", StyleController);

Virtual__DOOM.gateway!.style.backgroundColor = ColorPallete.colors.background;
Virtual__DOOM.gateway?.insertAdjacentElement("beforeend", Container.element!);

StyleController.fashion("display", Virtual__DOOM.gateway)("flex");
StyleController.fashion("justifyContent", Virtual__DOOM.gateway)("center");
StyleController.fashion("alignItems", Virtual__DOOM.gateway)("center");

Container.measurement([250, 500])
  .bgColor("cold_1")
  .fashion("borderRadius")("9999px")
  .display("flex")
  .align("center")
  .justify("center")
  .fontColor("white")
  .type("Hello wold");

Container.insertedIn(Virtual__DOOM.gateway!);
