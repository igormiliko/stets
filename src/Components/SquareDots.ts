import { Component } from "../Core/AbstractComponent";
import { ComponentFactory } from "../Core/ComponentFactory";
import { ComponentFrame } from "../Core/ComponentFrame";

class SquareDots extends Component {
    
    squareDotsContainer: ComponentFrame | null = null

    constructor(factory: ComponentFactory) {
        super(factory)
    }



    preRender(callback?: (() => void) | undefined): void {
        this.squareDotsContainer = this.comp_factory.make('div', 'square-dots-container')
    }
}