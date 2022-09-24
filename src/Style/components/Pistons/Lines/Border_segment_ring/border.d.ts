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

type TBorder_styles_possibilities =
  | TBorder_styles
  | [TBorder_styles, TBorder_styles?, TBorder_styles?, TBorder_styles?];

type TBorder_width = TCustom_square<
  "thin" | "medium" | "thick",
  TCSSmeasurementUnits
>;

type TBorder_spacing =
  | TGlobal_CSS_values
  | number
  | {
      value: number | [number, number];
      measuerement:
        | TCSSmeasurementUnits
        | [TCSSmeasurementUnits, TCSSmeasurementUnits];
    };

type TBorder_collapse = TGlobal_CSS_values | "collapse" | "separate";

type TBorder_radius = TCustom_square<number, TCSSmeasurementUnits>;

type TBorder_image_width = TCustom_square<
  number,
  TCSSmeasurementUnits | "auto"
>;

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
  | {
      values: [
        number | "fill",
        (number | "fill")?,
        (number | "fill")?,
        (number | "fill")?
      ];
      percent: boolean;
    }
  | TGlobal_CSS_values
  | number;

type TDirections = "top" | "left" | "right" | "bottom";

type TCustom_square<V, M> =
  | {
      value:
        | (V | number)
        | TGlobal_CSS_values
        | [V | number, (V | number)?, (V | number)?, (V | number)?]
        | [
            [V | number, (V | number)?, (V | number)?, (V | number)?],
            [V | number, (V | number)?, (V | number)?, (V | number)?]
          ];
      measurement: M | [M, M?, M?, M?] | [[M, M?, M?, M?], [M, M?, M?, M?]];
    }
  | TGlobal_CSS_values
  | (V | number);
