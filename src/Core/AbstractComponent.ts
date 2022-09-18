import { ComponentFactory } from "./ComponentFactory";

export abstract class Component {
  protected comp_factory: ComponentFactory;
  constructor(factory: ComponentFactory) {
    this.comp_factory = factory;
  }
  preRender(callback?: () => void) {}
  render() {}
  destroy() {}
}
