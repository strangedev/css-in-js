import { Measurement } from './Measurement';

abstract class Quantity <TValue, TSign extends string, TImpl extends Quantity<TValue, TSign, any>> implements Measurement<TValue, TSign> {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  private _value: TValue;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  private readonly _sign: TSign;

  public constructor ({ value, sign }: Measurement<TValue, TSign>) {
    // eslint-disable-next-line no-underscore-dangle
    this._value = value;
    // eslint-disable-next-line no-underscore-dangle
    this._sign = sign;
  }

  public abstract clone (): TImpl;

  public get value (): TValue {
    // eslint-disable-next-line no-underscore-dangle
    return this._value;
  }

  protected set value (newValue: TValue) {
    // eslint-disable-next-line no-underscore-dangle
    this._value = newValue;
  }

  public setValue (value: TValue): TImpl {
    const clonedQuantity = this.clone();

    clonedQuantity.value = value;

    return clonedQuantity;
  }

  public get sign (): TSign {
    // eslint-disable-next-line no-underscore-dangle
    return this._sign;
  }
}

export {
  Quantity
};
