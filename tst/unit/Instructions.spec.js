import ReactTestRenderer from 'react-test-renderer';
import Instructions from '../../browser/components/Instructions';
import React from 'react';

test('Instructions has site instructions', () => {
  const renderer = ReactTestRenderer.create(
    <Instructions />
  );

  expect(renderer.toJSON().children[0].children[0]).toBe('Applications are due by June 1st, and will not be accepted after that (though the form may still be available). Applications will be reviewed, and the point of contact will be notified by August 1st.  Note that applications are saved in your browser when you close the page, so you must complete the application from only this browser.');
});
