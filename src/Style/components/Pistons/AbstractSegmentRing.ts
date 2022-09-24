export class Abstract_segment_ring {
  protected TREAT_TCustom_square(
    custom_square: TCustom_square<any, TCSSmeasurementUnits>
  ) {
    try {
      let buffer_ = custom_square;
      buffer_ = Object.keys(custom_square).map((key) => {
        return Array.isArray(buffer_.value)
          ? custom_square[key].flatMap((a: any) => a)
          : custom_square[key];
      });

      buffer_ = buffer_.map((flat: any) =>
        Array.isArray(flat)
          ? flat.map((inner: any, ix: number) => {
              return inner + (buffer_[1][ix] ? buffer_[1][ix] : buffer_[1][0]);
            })
          : flat
      );

      buffer_ = Array.isArray(buffer_[0])
        ? buffer_[0].join(" ")
        : buffer_.join("");

      return buffer_;
    } catch (error) {
      console.error("Error whiling transforming the easurements => ", error);
    }
  }
}
