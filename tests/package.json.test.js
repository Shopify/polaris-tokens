describe('package.json', () => {
  it('doesn’t have any dependencies', () => {
    expect(require('../package.json').dependencies).toBeUndefined();
  });
  it('has “beta” in the version (delete test before merging to master)', () => {
    expect(require('../package.json').version).toContain('beta');
  });
});
