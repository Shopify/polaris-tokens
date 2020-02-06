describe('package.json', () => {
  it('has one dependency', () => {
    expect(Object.keys(require('../package.json').dependencies)).toHaveLength(
      2,
    );
  });
  it('has “beta” in the version (delete test before merging to master)', () => {
    expect(require('../package.json').version).toContain('beta');
  });
});
