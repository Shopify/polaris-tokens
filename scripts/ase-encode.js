const path = require('path');
const fs = require('fs');

const ase = require('ase-utils');

const props = require('../dist/colors.ase.json');

fs.writeFileSync(
  path.join(__dirname, '..', 'dist', 'colors.ase'),
  Buffer.from(ase.encode(props), 'utf8'),
);
