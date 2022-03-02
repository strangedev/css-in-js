import { Quantity } from './Quantity';

abstract class ArithmeticQuantity <TSign extends string, TImpl extends ArithmeticQuantity<TSign, any>> extends Quantity<number, TSign, TImpl> {
  public apply (fn: (value: number) => number): TImpl {
    const clonedQuantity = this.clone();

    clonedQuantity.value = fn(this.value);

    return clonedQuantity;
  }

  public add (other: TImpl): TImpl {
    return this.apply((value): number => value + other.value);
  }

  public sub (other: TImpl): TImpl {
    return this.apply((value): number => value - other.value);
  }

  public mul (scalar: number): TImpl {
    return this.apply((value): number => value * scalar);
  }

  public div (scalar: number): TImpl {
    return this.apply((value): number => value / scalar);
  }

  public neg (): TImpl {
    return this.apply((value): number => -value);
  }
}

export {
  ArithmeticQuantity
};
