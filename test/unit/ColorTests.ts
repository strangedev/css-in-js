import { assert } from 'assertthat';
import { Color, ColorHex, ColorRgb, ColorRgba } from '../../lib/quantities/Color';

suite('Color', (): void => {
  suite('Hex', (): void => {
    test('can be initialized.', async (): Promise<void> => {
      const color = ColorHex.new('#008080');

      assert.that(color).is.instanceOf(Color);
    });
    test('can be converted to string.', async (): Promise<void> => {
      const color = ColorHex.new('#008080');

      assert.that(`${color}`).is.equalTo('#008080');
    });
    test('can be negated, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorHex.new('#008080');
      const expected = ColorRgba.new(255, 127, 127, 1);

      assert.that(color.negate()).is.equalTo(expected);
    });
    test('can be lightened, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorHex.new('#008080');
      const expected = ColorRgba.new(0, 153.599_999_999_999_97, 153.6, 1);

      assert.that(color.lighten(0.2)).is.equalTo(expected);
    });
    test('can be darkened, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorHex.new('#008080');
      const expected = ColorRgba.new(0, 97.279_999_999_999_97, 97.28, 1);

      assert.that(color.darken(0.24)).is.equalTo(expected);
    });
    test('can be saturated, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorHex.new('#008080');
      const expected = ColorRgba.new(0, 140.799_999_999_999_98, 140.8, 1);

      assert.that(color.saturate(0.2)).is.equalTo(expected);
    });
    test('can be desaturated, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorHex.new('#008080');
      const expected = ColorRgba.new(12.799_999_999_999_994, 115.199_999_999_999_97, 115.2, 1);

      assert.that(color.desaturate(0.2)).is.equalTo(expected);
    });
    test('can be grayscaled, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorHex.new('#008080');
      const expected = ColorRgba.new(89.6, 89.6, 89.6, 1);

      assert.that(color.grayscale()).is.equalTo(expected);
    });
    test('can be tested to see if its dark.', async (): Promise<void> => {
      const dark = ColorHex.new('#008080');
      const light = ColorHex.new('#eeeeee');

      assert.that(dark.isDark()).is.true();
      assert.that(light.isDark()).is.false();
    });
    test('can be tested to see if its light.', async (): Promise<void> => {
      const dark = ColorHex.new('#008080');
      const light = ColorHex.new('#eeeeee');

      assert.that(dark.isLight()).is.false();
      assert.that(light.isLight()).is.true();
    });
    test('can be faded, yielding an RGBA color.', async (): Promise<void> => {
      const original = ColorHex.new('#008080');
      const expected = ColorRgba.new(0, 128, 128, 0.4);

      assert.that(original.fade(0.6)).is.equalTo(expected);
    });
    test('cant be made more opaque since it is already at maximum, yielding an RGBA color.', async (): Promise<void> => {
      const original = ColorHex.new('#008080');
      const expected = ColorRgba.new(0, 128, 128, 1);

      assert.that(original.opaquer(1)).is.equalTo(expected);
    });
  });
  suite('Rgb', (): void => {
    test('can be initialized.', async (): Promise<void> => {
      const color = ColorRgb.new(0, 128, 128);

      assert.that(color).is.instanceOf(Color);
    });
    test('can be converted to string.', async (): Promise<void> => {
      const color = ColorRgb.new(0, 128, 128);

      assert.that(`${color}`).is.equalTo('rgb(0,128,128)');
    });
    test('can be negated, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorRgb.new(0, 128, 128);
      const expected = ColorRgba.new(255, 127, 127, 1);

      assert.that(color.negate()).is.equalTo(expected);
    });
    test('can be lightened, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorRgb.new(0, 128, 128);
      const expected = ColorRgba.new(0, 153.599_999_999_999_97, 153.6, 1);

      assert.that(color.lighten(0.2)).is.equalTo(expected);
    });
    test('can be darkened, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorRgb.new(0, 128, 128);
      const expected = ColorRgba.new(0, 97.279_999_999_999_97, 97.28, 1);

      assert.that(color.darken(0.24)).is.equalTo(expected);
    });
    test('can be saturated, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorRgb.new(0, 128, 128);
      const expected = ColorRgba.new(0, 140.799_999_999_999_98, 140.8, 1);

      assert.that(color.saturate(0.2)).is.equalTo(expected);
    });
    test('can be desaturated, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorRgb.new(0, 128, 128);
      const expected = ColorRgba.new(12.799_999_999_999_994, 115.199_999_999_999_97, 115.2, 1);

      assert.that(color.desaturate(0.2)).is.equalTo(expected);
    });
    test('can be grayscaled, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorRgb.new(0, 128, 128);
      const expected = ColorRgba.new(89.6, 89.6, 89.6, 1);

      assert.that(color.grayscale()).is.equalTo(expected);
    });
    test('can be tested to see if its dark.', async (): Promise<void> => {
      const dark = ColorRgb.new(0, 128, 128);
      const light = ColorRgb.new(222, 222, 222);

      assert.that(dark.isDark()).is.true();
      assert.that(light.isDark()).is.false();
    });
    test('can be tested to see if its light.', async (): Promise<void> => {
      const dark = ColorRgb.new(0, 128, 128);
      const light = ColorRgb.new(222, 222, 222);

      assert.that(dark.isLight()).is.false();
      assert.that(light.isLight()).is.true();
    });
    test('can be faded, yielding an RGBA color.', async (): Promise<void> => {
      const original = ColorRgb.new(0, 128, 128);
      const expected = ColorRgba.new(0, 128, 128, 0.4);

      assert.that(original.fade(0.6)).is.equalTo(expected);
    });
    test('cant be made more opaque since it is already at maximum, yielding an RGBA color.', async (): Promise<void> => {
      const original = ColorRgb.new(0, 128, 128);
      const expected = ColorRgba.new(0, 128, 128, 1);

      assert.that(original.opaquer(1)).is.equalTo(expected);
    });
  });
  suite('Rgba', (): void => {
    test('can be initialized.', async (): Promise<void> => {
      const color = ColorRgba.new(0, 128, 128, 1);

      assert.that(color).is.instanceOf(Color);
    });
    test('can be converted to string.', async (): Promise<void> => {
      const color = ColorRgba.new(0, 128, 128, 1);

      assert.that(`${color}`).is.equalTo('rgba(0,128,128,1)');
    });
    test('can be negated, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorRgba.new(0, 128, 128, 1);
      const expected = ColorRgba.new(255, 127, 127, 1);

      assert.that(color.negate()).is.equalTo(expected);
    });
    test('can be lightened, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorRgba.new(0, 128, 128, 1);
      const expected = ColorRgba.new(0, 153.599_999_999_999_97, 153.6, 1);

      assert.that(color.lighten(0.2)).is.equalTo(expected);
    });
    test('can be darkened, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorRgba.new(0, 128, 128, 1);
      const expected = ColorRgba.new(0, 97.279_999_999_999_97, 97.28, 1);

      assert.that(color.darken(0.24)).is.equalTo(expected);
    });
    test('can be saturated, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorRgba.new(0, 128, 128, 1);
      const expected = ColorRgba.new(0, 140.799_999_999_999_98, 140.8, 1);

      assert.that(color.saturate(0.2)).is.equalTo(expected);
    });
    test('can be desaturated, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorRgba.new(0, 128, 128, 1);
      const expected = ColorRgba.new(12.799_999_999_999_994, 115.199_999_999_999_97, 115.2, 1);

      assert.that(color.desaturate(0.2)).is.equalTo(expected);
    });
    test('can be grayscaled, yielding an RGBA color.', async (): Promise<void> => {
      const color = ColorRgba.new(0, 128, 128, 1);
      const expected = ColorRgba.new(89.6, 89.6, 89.6, 1);

      assert.that(color.grayscale()).is.equalTo(expected);
    });
    test('can be tested to see if its dark.', async (): Promise<void> => {
      const dark = ColorRgba.new(0, 128, 128, 1);
      const light = ColorRgba.new(222, 222, 222, 1);

      assert.that(dark.isDark()).is.true();
      assert.that(light.isDark()).is.false();
    });
    test('can be tested to see if its light.', async (): Promise<void> => {
      const dark = ColorRgba.new(0, 128, 128, 1);
      const light = ColorRgba.new(222, 222, 222, 1);

      assert.that(dark.isLight()).is.false();
      assert.that(light.isLight()).is.true();
    });
    test('can be faded, yielding an RGBA color.', async (): Promise<void> => {
      const original = ColorRgba.new(0, 128, 128, 0.5);
      const expected = ColorRgba.new(0, 128, 128, 0.25);

      assert.that(original.fade(0.5)).is.equalTo(expected);
    });
    test('can be made more opaque, yielding an RGBA color.', async (): Promise<void> => {
      const original = ColorRgba.new(0, 128, 128, 0.5);
      const expected = ColorRgba.new(0, 128, 128, 0.75);

      assert.that(original.opaquer(0.5)).is.equalTo(expected);
    });
  });
});
