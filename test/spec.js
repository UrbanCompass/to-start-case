import assert from 'assert';
import toStartCaseStr from '../src/index.js';

describe('uc.toStartCaseStr', () => {
  it('should convert strings to sentence case', () => {
    assert.strictEqual(toStartCaseStr('Management'), 'Management');
    assert.strictEqual(toStartCaseStr('management'), 'Management');
    assert.strictEqual(toStartCaseStr('managementCompanies'), 'Management Companies');
    assert.strictEqual(toStartCaseStr('management_companies'), 'Management Companies');
  });

  it('should handle correctly with single quote and dash', () => {
    assert.strictEqual(toStartCaseStr('hell\'s kitchen'), 'Hell\'s Kitchen');
    assert.strictEqual(toStartCaseStr('nice-to-have'), 'Nice-to-have');
  });
});
