export class ColorPallete {
  colors = {
    "yellow-1": "#ecb33d",
    "yellow-2": "#FED55F",
    "orange-1": "#FF9956",
    "orange-2": "#dd7734",
    "blue-eyes": "#00BEEB",
    background: "#020009",
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
