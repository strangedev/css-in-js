import { ArithmeticQuantity } from './base/ArithmeticQuantity';
import { Cent } from './base/Percent';
import { Stringable } from '../Stringable';

const cm = 'cm';
const mm = 'mm';
const inch = 'in';
const px = 'px';
const pt = 'pt';
const pc = 'pc';
const em = 'em';
const ex = 'ex';
const ch = 'ch';
const rem = 'rem';
const vw = 'vw';
const vh = 'vh';
const vmin = 'vmin';
const vmax = 'vmax';

type Cm = 'cm';
type Mm = 'mm';
type In = 'in';
type Px = 'px';
type Pt = 'pt';
type Pc = 'pc';
type Em = 'em';
type Ex = 'ex';
type Ch = 'ch';
type Rem = 'rem';
type Vw = 'vw';
type Vh = 'vh';
type Vmin = 'vmin';
type Vmax = 'vmax';

type AbsoluteLengthSign = Cm | Mm | In | Px | Pt | Pc;
type RelativeLengthSign = Em | Ex | Ch | Rem | Vw | Vh | Vmin | Vmax;
type LengthSign = AbsoluteLengthSign | RelativeLengthSign | Cent;

class Length <TSign extends LengthSign = LengthSign> extends ArithmeticQuantity<TSign, Length<TSign>> implements Stringable {
  public static new <TSign extends LengthSign> (value: number, sign: TSign): Length<TSign> {
    return new Length({ value, sign });
  }

  public toString (): string {
    return `${this.value}${this.sign}`;
  }

  public clone (): Length<TSign> {
    return Length.new(this.value, this.sign);
  }
}

export {
  Length,
  cm,
  mm,
  inch,
  px,
  pt,
  pc,
  em,
  ex,
  ch,
  rem,
  vw,
  vh,
  vmin,
  vmax
};
export type {
  Cm,
  Mm,
  In,
  Px,
  Pt,
  Pc,
  Em,
  Ex,
  Ch,
  Rem,
  Vw,
  Vh,
  Vmin,
  Vmax
};
