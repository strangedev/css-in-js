import { assert } from 'assertthat';
import { Duration, ms, s } from '../../lib/quantities/Duration';

suite('Duration', (): void => {
  test('can be initialized with seconds.', async (): Promise<void> => {
    const duration = Duration.new(1, s);

    assert.that(duration.value).is.equalTo(1_000);
    assert.that(duration.sign).is.equalTo('ms');
  });
  test('can be initialized with milliseconds.', async (): Promise<void> => {
    const duration = Duration.new(1, ms);

    assert.that(duration.value).is.equalTo(1);
    assert.that(duration.sign).is.equalTo('ms');
  });
  test('can be added immutably.', async (): Promise<void> => {
    const left = Duration.new(1, s);
    const right = Duration.new(300, ms);
    const added = left.add(right);

    assert.that(left.value).is.equalTo(1_000);
    assert.that(right.value).is.equalTo(300);
    assert.that(added.value).is.equalTo(1_300);
  });
  test('can be subtracted immutably.', async (): Promise<void> => {
    const left = Duration.new(1, s);
    const right = Duration.new(300, ms);
    const subtracted = left.sub(right);

    assert.that(left.value).is.equalTo(1_000);
    assert.that(right.value).is.equalTo(300);
    assert.that(subtracted.value).is.equalTo(700);
  });
  test('can be multiplied immutably.', async (): Promise<void> => {
    const left = Duration.new(1, s);
    const multiplied = left.mul(2);

    assert.that(left.value).is.equalTo(1_000);
    assert.that(multiplied.value).is.equalTo(2_000);
  });
  test('can be divided immutably.', async (): Promise<void> => {
    const left = Duration.new(1, s);
    const divided = left.div(2);

    assert.that(left.value).is.equalTo(1_000);
    assert.that(divided.value).is.equalTo(500);
  });
  test('can be modified immutably by applying a function.', async (): Promise<void> => {
    const left = Duration.new(1, s);
    const modified = left.apply((value): number => value + 337);

    assert.that(left.value).is.equalTo(1_000);
    assert.that(modified.value).is.equalTo(1_337);
  });
  test('can be set immutably.', async (): Promise<void> => {
    const initial = Duration.new(1, s);
    const set = initial.setValue(2_000);

    assert.that(initial.value).is.equalTo(1_000);
    assert.that(set.value).is.equalTo(2_000);
  });
  test('can be converted to string.', async (): Promise<void> => {
    const duration = Duration.new(1.33, s);

    assert.that(`${duration}`).is.equalTo('1330ms');
  });
});
