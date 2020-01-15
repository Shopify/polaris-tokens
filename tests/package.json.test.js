describe('package.json', () => {
  it('has one dependency', () => {
    expect(Object.keys(require('../package.json').dependencies)).toHaveLength(
      1,
    );
  });
});
