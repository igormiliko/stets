export class ColorPallete {
  colors = {
    cold_1: "#6100FF",
    warm_1: "#CC0000",
    warm_2: "#FF8A00",
    background: "#020009",
    background2: "#121212",
    white: "#fcfcfc",
    'lh-grey': "#D9D9D9",
    'md-grey': "#888",
    'dk-grey': "#373737"
  };

  getColor(color_name: string) {
    try {
      const COLOR: any = this.colors as unknown
      return COLOR[color_name]
    } catch (error) {
      console.error(error)
    }
  }
}

export default new ColorPallete();
