import { ComponentFactory } from "./ComponentFactory";

export abstract class Component {
  protected comp_factory: ComponentFactory;
  constructor(factory: ComponentFactory) {
    this.comp_factory = factory;
  }
  abstract preRender(...args: any): unknown
  abstract mount(...args: any): unknown
  abstract render(...args: any): unknown
  abstract destroy(...args: any): unknown
}
