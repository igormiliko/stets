export abstract class Piston {
    element: HTMLElement | null | undefined 
    constructor(element: HTMLElement | null | undefined ) {
        if(!this.element) {
            this.element = element
        }
    }
}