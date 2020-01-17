function format(data) {
  return data.toJS().props.reduce(
    (accumulator, prop) => ({
      ...accumulator,
      [prop.name]: prop.originalValue,
    }),
    {},
  );
}

module.exports = (result) => {
  const colors = format(result);
  console.log(colors);
  return JSON.stringify(format(result));
};
