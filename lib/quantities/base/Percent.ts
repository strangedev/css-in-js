import { Measurement } from './Measurement';

const cent = '%';

type Cent = '%';

type Percent = Measurement<number, Cent>;

export {
  cent
};
export type {
  Cent,
  Percent
};
