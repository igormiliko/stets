type TBorder_segment_ring_methods =
  | "border"
  | "left"
  | "top"
  | "right"
  | "bottom"
  | "x"
  | "y"
  | "color"
  | "style"
  | "radius"
  | "width"
  | "collapse"
  | "spacing"
  | "image";

type TBorder_styles =
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset"
  | "none"
  | "hidden";

type TBorder_width = TCustom_square<"thin" | "medium" | "thick" | TCSSmeasurementUnits>;

type TBorder_collapse = TGlobal_CSS_values | "collapse" | "separate";

type TBorder_radius = TCustom_square<TCSSmeasurementUnits>;
type TBorder_image_width = TCustom_square<TCSSmeasurementUnits | "auto">;

type TBorder_image_outset =
  | {
      values: number | [number, number?, number?, number?];
      measurement:
        | TCSSmeasurementUnits
        | [
            TCSSmeasurementUnits,
            TCSSmeasurementUnits?,
            TCSSmeasurementUnits?,
            TCSSmeasurementUnits?
          ];
    }
  | TGlobal_CSS_values;

type TBorder_image_repeat =
  | "stretch"
  | "repeat"
  | "round"
  | "space"
  | "initial"
  | "inherit";

type TBorder_image_slice =
  | [
      number | "fill",
      (number | "fill")?,
      (number | "fill")?,
      (number | "fill")?
    ]
  | TGlobal_CSS_values
  | number;

type TBorder_image_source =
  | {
      URL: string;
      gradient: {
        colors: [ColorPallete["colors"], number?][];
        to?: [TDirections, TDirections?];
        repeat?: boolean;
        deg?: number;
      };
    }
  | TGlobal_CSS_values
  | "none";

type TDirections = "top" | "left" | "right" | "bottom";

type TCustom_square<T> =
  | {
      value:
        | number
        | TGlobal_CSS_values
        | [number, number?, number?, number?]
        | [[number], [number]]
        | [[number, number], [number, number]]
        | [[number, number, number], [number, number, number]];
      measurement:
        | T
        | [T, T?, T?, T?]
        | [[T], [T]]
        | [[T, T], [T, T]]
        | [[T, T, T], [T, T, T]];
    }
  | TGlobal_CSS_values
  | number;