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

    insertElement(elements: (HTMLElement | null | undefined)[]) {
        elements?.forEach((e) => this.element?.insertAdjacentElement('beforeend', e!))
        return this
    }

    insertedIn(element: Element) {
        element?.insertAdjacentElement('beforeend', element)
        return this
    }

    type(text: string){
        this.element?.insertAdjacentText('beforeend', text)
        return this
    }
}

export default ComponentFrame