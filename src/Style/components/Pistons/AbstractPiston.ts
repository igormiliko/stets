export abstract class Piston {
    protected static element: HTMLElement | null | undefined 
    constructor(element: HTMLElement | null | undefined ) {
        if(!Piston.element) {
            Piston.element = element
        }
    }
}