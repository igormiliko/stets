import Virtual__DOOM from "../Core/V_doom";

class LayoutBuilder extends Virtual__DOOM {
  first_quadrant: HTMLElement | null | undefined = null;
  second_quadrant: HTMLElement | null | undefined = null;
  third_quadrant: HTMLElement | null | undefined = null;
  fourth_quadrant: HTMLElement | null | undefined = null;
  fifth_quadrant: HTMLElement | null | undefined = null;
  sixth_quadrant: HTMLElement | null | undefined = null;
  seventh_quadrant: HTMLElement | null | undefined = null;
  eighth_quadrant: HTMLElement | null | undefined = null;
  main_nav_bar: HTMLElement | null | undefined = null;
  
  constructor(document: Document) {
    super(document);
    this.initializeLayout();
    this.assignLayout();
  }
  private buildNavBar() {
    try {
      this.$V_instance.gateway?.insertAdjacentHTML(
        "beforeend",
        '<div id="main_nav_bar">nav</div>'
      );
    } catch (error) {
      throw new Error(`Error whie build the main-nav-bar`);
    }
  }
  private build_first_quadrant() {
    try {
      this.$V_instance.gateway?.insertAdjacentHTML(
        "beforeend",
        '<div id="quadrant-1">1°)Quadrant</div>'
      );
    } catch (error) {
      throw new Error(`Error whie build the quadrant 1`);
    }
  }
  private build_second_quadrant() {
    try {
      this.$V_instance.gateway?.insertAdjacentHTML(
        "beforeend",
        '<div id="quadrant-2">2°)Quadrant</div>'
      );
    } catch (error) {
      throw new Error(`Error whie build the quadrant 2`);
    }
  }
  private build_third_quadrant() {
    try {
      this.$V_instance.gateway?.insertAdjacentHTML(
        "beforeend",
        '<div id="quadrant-3">3°)Quadrant</div>'
      );
    } catch (error) {
      throw new Error(`Error whie build the quadrant 3`);
    }
  }
  private build_fourth_quadrant() {
    try {
      this.$V_instance.gateway?.insertAdjacentHTML(
        "beforeend",
        '<div id="quadrant-4">4°)Quadrant</div>'
      );
    } catch (error) {
      throw new Error(`Error whie build the quadrant 4`);
    }
  }
  private build_fifth_quadrant() {
    try {
      this.$V_instance.gateway?.insertAdjacentHTML(
        "beforeend",
        '<div id="quadrant-5">5°)Quadrant</div>'
      );
    } catch (error) {
      throw new Error(`Error whie build the quadrant 5`);
    }
  }
  private build_sixth_quadrant() {
    try {
      this.$V_instance.gateway?.insertAdjacentHTML(
        "beforeend",
        '<div id="quadrant-6">6°)Quadrant</div>'
      );
    } catch (error) {
      throw new Error(`Error whie build the quadrant 6`);
    }
  }
  private build_seventh_quadrant() {
    try {
      this.$V_instance.gateway?.insertAdjacentHTML(
        "beforeend",
        '<div id="quadrant-7">7°)Quadrant</div>'
      );
    } catch (error) {
      throw new Error(`Error whie build the quadrant 7`);
    }
  }
  private build_eighth_quadrant() {
    try {
      this.$V_instance.gateway?.insertAdjacentHTML(
        "beforeend",
        '<div id="quadrant-8">8°)Quadrant</div>'
      );
    } catch (error) {
      throw new Error(`Error whie build the quadrant 8`);
    }
  }

  private initializeLayout() {
    try {
      this.buildNavBar();
      this.build_first_quadrant();
      this.build_second_quadrant();
      this.build_third_quadrant();
      this.build_fourth_quadrant();
      this.build_fifth_quadrant();
      this.build_sixth_quadrant();
      this.build_seventh_quadrant();
      this.build_eighth_quadrant();
    } catch (error) {
      console.error(error);
    }
  }

  private assignLayout() {
    this.first_quadrant = this.$V_instance.getElementById("quadrant-1");
    this.second_quadrant = this.$V_instance.getElementById("quadrant-2");
    this.third_quadrant = this.$V_instance.getElementById("quadrant-3");
    this.fourth_quadrant = this.$V_instance.getElementById("quadrant-4");
    this.fifth_quadrant = this.$V_instance.getElementById("quadrant-5");
    this.sixth_quadrant = this.$V_instance.getElementById("quadrant-6");
    this.seventh_quadrant = this.$V_instance.getElementById("quadrant-7");
    this.eighth_quadrant = this.$V_instance.getElementById("quadrant-8");
    this.main_nav_bar = this.$V_instance.getElementById("main_nav_bar");
  }
}

export default new LayoutBuilder(document);
