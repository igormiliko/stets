import { ComponentFactory } from "./Components/core/ComponentFactory";
import { Logo } from "./Components/Loader/Loader";
import Virtual__DOOM from "./Core/V_doom";
import StyleController from "./Style/";
import ColorPallete from "./Style/ColorPallete";
new Virtual__DOOM(document);
Virtual__DOOM.gateway!.style.backgroundColor = ColorPallete.colors.background;
StyleController.fashion("display", Virtual__DOOM.gateway)("flex");
StyleController.fashion("justifyContent", Virtual__DOOM.gateway)("center");
StyleController.fashion("alignItems", Virtual__DOOM.gateway)("center");

const comp_factoy = new ComponentFactory(StyleController);

const Container = comp_factoy.make("main-container", "div");

const logo = new Logo(comp_factoy)
logo.preRender()


Virtual__DOOM.gateway?.insertAdjacentElement("beforeend", Container.element!);


Container.display("flex").justify("center").align("center");

Container.hug(logo.render())

Virtual__DOOM.gateway!.insertAdjacentElement("beforeend", Container.element!);
