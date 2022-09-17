class Virtual__DOOM {
  protected static $V_instance: Virtual__DOOM;
  static document: Document;
  static gateway: HTMLElement | null;

  constructor(document: Document) {
    Virtual__DOOM.document = document;
    Virtual__DOOM.gateway = document.getElementById("gateway");
    Virtual__DOOM.document.body.style.margin = "0";
    Virtual__DOOM.gateway!.style.width = "100vw";
    Virtual__DOOM.gateway!.style.height = "100vh";
    Virtual__DOOM.gateway!.style.overflow = "hidden";
  }

  get $V_instance() {
    if (!Virtual__DOOM.$V_instance) {
      Virtual__DOOM.$V_instance = new Virtual__DOOM(Virtual__DOOM.document);
      return Virtual__DOOM.$V_instance;
    }
    return Virtual__DOOM.$V_instance;
  }

  get gateway() {
    try {
      if (Virtual__DOOM.gateway) {
        return Virtual__DOOM.gateway;
      }
      throw new Error("Gateway is not initialized.");
    } catch (error) {
      console.error(error);
    }
  }

  getElementById(id: string) {
    try {
      return Virtual__DOOM.document.getElementById(id);
    } catch (error) {
      console.error(error);
    }
  }
}

export default Virtual__DOOM;
