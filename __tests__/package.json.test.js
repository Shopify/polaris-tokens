describe('package.json', () => {
  it('doesn’t have any dependencies', () => {
    expect(require('../package.json').dependencies).toBe(undefined);
  });
});
