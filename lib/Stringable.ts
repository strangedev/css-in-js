interface Stringable {
  toString: () => string;
}

type Stringlike = string | Stringable;

export type {
  Stringable,
  Stringlike
};
