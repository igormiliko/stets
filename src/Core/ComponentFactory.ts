import { StyleController } from "../Style";
import {ComponentFrame} from "./ComponentFrame";

export class ComponentFactory {
    styler: StyleController;
    constructor(Styler: StyleController) {
        this.styler = Styler
    }
    make(tag: string, id: string) {
        return new ComponentFrame(tag, id)
    }
}

