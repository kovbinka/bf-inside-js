'use strict';

// fill in the blank to pass the assertion

const interactionValue = confirm('asdf');

console.log(typeof interactionValue, interactionValue);

console.assert(
  typeof interactionValue === 'boolean',
  'interactionValue should be boolean',
);
