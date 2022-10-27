export class ColorPallete {
  colors = {
    absinto: "#2D2"
  };

  getColor(color_name: keyof ColorPallete["colors"]) {
    try {
      const COLOR: any = this.colors as unknown;
      return COLOR[color_name];
    } catch (error) {
      console.error(error);
    }
  }
}

export default new ColorPallete();
