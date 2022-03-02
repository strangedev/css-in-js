import { ArithmeticQuantity } from './base/ArithmeticQuantity';
import { Stringable } from '../Stringable';

const ms = 'ms';
// eslint-disable-next-line id-length
const s = 's';

type S = 's';
type Ms = 'ms';

type DurationSign = S | Ms;

class Duration extends ArithmeticQuantity<Ms, Duration> implements Stringable {
  public static new <TSign extends DurationSign> (value: number, sign: TSign): Duration {
    return new Duration({
      value: sign === s ? value * 1_000 : value,
      sign: ms
    });
  }

  public toString (): string {
    return `${this.value}${this.sign}`;
  }

  public clone (): Duration {
    return Duration.new(this.value, this.sign);
  }
}

export {
  Duration,
  ms,
  s
};
export type {
  S,
  Ms
};
