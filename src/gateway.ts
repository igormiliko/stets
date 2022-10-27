import { ComponentFactory } from "./Core/ComponentFactory";
import Virtual__DOOM from "./Core/V_doom";
import StyleController from "./Style/StyleEngine";

new Virtual__DOOM(document);

const comp_factory = new ComponentFactory(StyleController);

const Container = comp_factory.make("main-container", "div").hug(
    comp_factory.make("container", "div").border({
        border: ["dashed", [2, "px"], "absinto"]
    }).type("Hello world")
);

Virtual__DOOM.gateway?.insertAdjacentElement("beforeend", Container.element!);


Virtual__DOOM.gateway!.insertAdjacentElement("beforeend", Container.element!);
