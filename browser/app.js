import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import Essay from './components/Essay';

ReactDOM.render(
  <div>
    <HelloWorld />
    <Essay prompt="What are you doing?" elementId="q1" />
    <Essay prompt="Who is your target audience?" elementId="q2" />
    <Essay prompt="How will you make money or sustain your business?" elementId="q3" />
    <Essay prompt="What do you expect to get out of the Cornish Incubator program?" elementId="q4" />
    <Essay prompt="How will you further the Cornish mission of Artist, Citizen, Innovator?" elementId="q5" />
    <Essay prompt="Why this why now?" elementId="q6" />
  </div>,
  document.getElementById('application-root')
);
