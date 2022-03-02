import { assert } from 'assertthat';
import { Length, px } from '../../lib/quantities/Length';

suite('Length', (): void => {
  test('can be added immutably.', async (): Promise<void> => {
    const left = Length.new(1_000, px);
    const right = Length.new(300, px);
    const added = left.add(right);

    assert.that(left.value).is.equalTo(1_000);
    assert.that(right.value).is.equalTo(300);
    assert.that(added.value).is.equalTo(1_300);
  });
  test('can be subtracted immutably.', async (): Promise<void> => {
    const left = Length.new(1_000, px);
    const right = Length.new(300, px);
    const subtracted = left.sub(right);

    assert.that(left.value).is.equalTo(1_000);
    assert.that(right.value).is.equalTo(300);
    assert.that(subtracted.value).is.equalTo(700);
  });
  test('can be multiplied immutably.', async (): Promise<void> => {
    const left = Length.new(1_000, px);
    const multiplied = left.mul(2);

    assert.that(left.value).is.equalTo(1_000);
    assert.that(multiplied.value).is.equalTo(2_000);
  });
  test('can be divided immutably.', async (): Promise<void> => {
    const left = Length.new(1_000, px);
    const divided = left.div(2);

    assert.that(left.value).is.equalTo(1_000);
    assert.that(divided.value).is.equalTo(500);
  });
  test('can be modified immutably by applying a function.', async (): Promise<void> => {
    const left = Length.new(1_000, px);
    const modified = left.apply((value): number => value + 337);

    assert.that(left.value).is.equalTo(1_000);
    assert.that(modified.value).is.equalTo(1_337);
  });
  test('can be set immutably.', async (): Promise<void> => {
    const initial = Length.new(1_000, px);
    const set = initial.setValue(2_000);

    assert.that(initial.value).is.equalTo(1_000);
    assert.that(set.value).is.equalTo(2_000);
  });
  test('can be converted to string.', async (): Promise<void> => {
    const duration = Length.new(1_330, px);

    assert.that(`${duration}`).is.equalTo('1330px');
  });
});
