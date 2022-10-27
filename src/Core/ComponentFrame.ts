import Virtual__DOOM from "./V_doom";
import { StyleController } from "../Style/StyleEngine";
import { Lines_piston } from "../Style/components/Pistons/Lines/Lines_piston";

export class ComponentFrame extends StyleController {
  id: string;
  public child_tree: {
    [key: string]: ComponentFrame;
  } = {};
  constructor(id: string, tagName: string) {
    super();
    this.id = id;
    this.element = Virtual__DOOM.document.createElement(tagName);
    this.element.setAttribute("id", id);
    this.setElement(this.element);
    this.Lines_Cilinder = new Lines_piston(this.element)
  }

  hug(...elements: ComponentFrame[]) {
    elements?.forEach((e) => {
      try {
        this.element?.insertAdjacentElement("beforeend", e?.element!);
        this.child_tree[e.id] = e;
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  }

  insertMeIn(component: ComponentFrame) {
    component?.element?.insertAdjacentElement("beforeend", this.element!);
    component.child_tree[this.id] = this;
    return this;
  }

  type(text: string) {
    this.element?.insertAdjacentText("beforeend", text);
    return this;
  }
}
