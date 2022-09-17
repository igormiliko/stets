import { ComponentFactory } from "./Components/ComponentFactory";
import Virtual__DOOM from "./Core/V_doom";
import StyleController from "./Style/";
import ColorPallete from "./Style/ColorPallete";
new Virtual__DOOM(document);

const comp_factoy = new ComponentFactory(StyleController);

const Container = comp_factoy.make("main-container", "div");
const Circle_1 = comp_factoy.make("circle-1", "div");
const Circle_2 = comp_factoy.make("circle-2", "div");
const Circle_3 = comp_factoy.make("circle-3", "div");

const circles = [Circle_1, Circle_2, Circle_3];

Virtual__DOOM.gateway!.style.backgroundColor = ColorPallete.colors.background;
Virtual__DOOM.gateway?.insertAdjacentElement("beforeend", Container.element!);

StyleController.fashion("display", Virtual__DOOM.gateway)("flex");
StyleController.fashion("justifyContent", Virtual__DOOM.gateway)("center");
StyleController.fashion("alignItems", Virtual__DOOM.gateway)("center");

Container.display("flex");

circles.forEach((circle, ix) => {
  circle
    .measurement([250, 250])
    .align("center")
    .display("flex")
    .justify("center")
    .fontColor("white")
    .type({"1": "I", "2": "M P", "3": "D" }[String(ix + 1)]!)
    .fashion("margin")("20px")
    .border("solid", 1, ix % 2 ? "warm_2" : "cold_1")
    .fashion("borderRadius")("9999px");
});

Container.hug(Circle_1, Circle_2, Circle_3);

Virtual__DOOM.gateway!.insertAdjacentElement("beforeend", Container.element!);
