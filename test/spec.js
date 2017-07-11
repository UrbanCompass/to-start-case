import toStartCaseStr from 'public/uc/toStartCaseStr.js';

describe('uc.toStartCaseStr', () => {
  it('should convert strings to sentence case', () => {
    expect(toStartCaseStr('Management')).toBe('Management');
    expect(toStartCaseStr('management')).toBe('Management');
    expect(toStartCaseStr('managementCompanies')).toBe('Management Companies');
    expect(toStartCaseStr('management_companies')).toBe('Management Companies');
  });

  it('should handle correctly with single quote and dash', () => {
    expect(toStartCaseStr('hell\'s kitchen')).toBe('Hell\'s Kitchen');
    expect(toStartCaseStr('nice-to-have')).toBe('Nice-to-have');
  });
});
