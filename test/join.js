'use strict';

const Linqed = require('../src/index.js');
const test = require('ava');

test.beforeEach((t) => {
  
  t.context.inner = Linqed([
    { name: 'Ben', id: 1, car: 'Versa Note' },
    { name: 'Dale', id: 2, car: 'Versa' },
    { name: 'Bill', id: 3, car: 'Versa Note' },
    { name: 'Rob', id: 4 }
  ]);
  
  t.context.outer = [
    { id: 1, department: 'Installation' },
    { id: 3, department: 'Service' },
    { id: 4, department: 'CSR' }
  ];
});

test('.join() exists', (t) => {
  
  t.truthy(t.context.inner.hasOwnProperty('join'));
});

test('.join() returns the array unaltered if there is no outer array or filter provided', (t) => {
  
  t.is(t.context.inner.join().length, t.context.inner.length);
  t.is(t.context.inner.join(t.context.outer).length, t.context.inner.length);
  t.is(t.context.inner.join(t.context.outer, null).length, t.context.inner.length);
  
  t.is(t.context.inner.join(t.context.outer, () => {}).length, t.context.inner.length);
});