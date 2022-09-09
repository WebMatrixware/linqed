'use strict';

const Linqed = require('../src/index.js');
const test = require('ava');

test.beforeEach((t) => {

  t.context.basic = Linqed([]);
  t.context.basic[1] = 2;
  t.context.basic[2] = 3;
  t.context.basic[3] = 4;
  t.context.basic[4] = 'Hi';
  t.context.basic[5] = false;
  t.context.basic[6] = 'Bye';

  t.context.number = Linqed([1, 1, 1, 1]);
  t.context.string = Linqed(['hi', 'hi', 'hi', 'hi']);
  t.context.boolean = Linqed([true, true, true, true]);

  t.context.advanced = Linqed([
    { name: 'Ben', id: 1, role: 'Engineer' },
    { name: 'Rob', id: 2, role: 'CSR' },
    { name: 'Bill', id: 3, role: 'Service Tech' },
    { name: 'Tom', role: 'Owner' },
    { name: 'Stan', id: 4 },
    { name: 'Rick', id: 5, role: 'Service Manager' },
    { name: 'Keith', id: 5, role: 'Owner' }
  ]);
});

test('.asc() exists', (t) => {

  t.truthy(t.context.basic.hasOwnProperty('asc'));
});

test('.asc() is not enumerable', (t) => {

  t.falsy(t.context.basic.propertyIsEnumerable('asc'));
});

test('.asc() returns an array', (t) => {

  t.truthy(Array.isArray(t.context.basic.asc()));
});

test('.asc() returns an array of elements sorted by native value with no filter', (t) => {

  t.is(t.context.basic.asc().length, 6);
  t.is(t.context.basic.asc()[0], false);
  t.is(t.context.basic.asc()[3], 4);
  t.is(t.context.basic.asc()[4], 'Bye');
});

test('.asc() returns an array of elements sorted based on their property of the provided string name', (t) => {

  t.deepEqual(t.context.advanced.asc('name')[1], { id: 3, name: 'Bill', role: 'Service Tech' });
});

test('.asc() returns an array of elements sorted based on their property provided by a filter function', (t) => {

  t.deepEqual(t.context.advanced.asc((item) => {
    return item.name;
  })[1], { id: 3, name: 'Bill', role: 'Service Tech' });
});
