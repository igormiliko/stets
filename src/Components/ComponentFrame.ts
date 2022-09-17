import Virtual__DOOM from "../Core/V_doom";
import { StyleController } from "../Style";

class ComponentFrame extends StyleController{
    id: string;
    constructor(id: string, tagName: string, styler: StyleController) {
        super()
        this.id = id
        this.element = Virtual__DOOM.document.createElement(tagName)
        this.element.setAttribute('id', id)
        this.setElement(this.element)
    }

    hug(...elements: (ComponentFrame)[]) {
        elements?.forEach((e) => this.element?.insertAdjacentElement('beforeend', e.element!))
        return this
    }

    insertMeIn(component: ComponentFrame) {
        component.element?.insertAdjacentElement('beforeend', this.element!)
        return this
    }

    type(text: string){
        this.element?.insertAdjacentText('beforeend', text)
        return this
    }
}

export default ComponentFrame