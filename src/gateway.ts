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
    // radius: {
    //   value: 777,
    //   measurement: "ch",
    // },
    // bottom: ["dotted", [65, "px"], "warm_2"],
    // left: ["dotted", [20, "px"], "cold_1"],
    // right: ["groove", [200, "px"], "dk-grey"],
    // top: ["double", [100, "px"], "warm_1"],
    // border: ["groove", [200, "px"]],
    // collapse: "collapse",
    // color: "cold_1",
    // color: ["cold_1", "lh-grey", "warm_1", "warm_2"],
    // x: ["solid", [200, "px"], "background2"],
    // y: ["solid", [20, "px"], "warm_2"],
    // spacing: "revert",
    // style: ["solid", "dashed", "double", "dotted"],
    width: {
      value: 66,
      measurement: "px",
    },
    image: {
      width: {
        value: [9, 9, 9, 9],
        measurement: ["px", "pt", "%", "cm"],
      },
      outset: {
        values: [9, 9, 9, 9],
        measurement: "mm",
      },
      repeat: "round",
      slice: {
        values: ["fill", "fill", 34, 22],
        percent: true,
      },
      source: 
      // "/vite.svg",
      {
        colors: [["lh-grey", 12], ["background2", 555]],
        to: ["bottom", "left"],
        deg: -98,
        repeat: true
      }
    },
  });

Virtual__DOOM.gateway!.insertAdjacentElement("beforeend", Container.element!);
