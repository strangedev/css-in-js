import { assert } from 'assertthat';
import { CssBuilder } from '../../lib/CssBuilder';
import { stripIndent } from 'common-tags';

suite('CssBuilder', (): void => {
  test('chains together Stringable clauses.', async (): Promise<void> => {
    const result = CssBuilder.
      new().
      add('border-width', '1px').
      add('border-style', { toString: (): string => 'solid' }).
      toString();

    assert.that(result).is.equalTo(stripIndent`
      border-width: 1px;
      border-style: solid;
    `);
  });
  test('is immutable.', async (): Promise<void> => {
    const newBuilder = CssBuilder.new();
    const builderWithOneClause = newBuilder.add('padding-left', '1px');
    const builderWithTwoClauses = builderWithOneClause.add('padding-right', '3px');

    assert.that(newBuilder.toString()).is.equalTo('');
    assert.that(builderWithOneClause.toString()).is.equalTo(stripIndent`
      padding-left: 1px;
    `);
    assert.that(builderWithTwoClauses.toString()).is.equalTo(stripIndent`
      padding-left: 1px;
      padding-right: 3px;
    `);
  });
});
