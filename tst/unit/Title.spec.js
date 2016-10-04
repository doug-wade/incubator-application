import ReactTestRenderer from 'react-test-renderer';
import Title from '../../browser/components/Title';
import React from 'react';

test('Title has site title', () => {
  const renderer = ReactTestRenderer.create(
    <Title />
  );

  expect(renderer.toJSON().children[0].children[0]).toBe('Cornish Incubator Application');
});
