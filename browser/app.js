import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import HelloWorld from './components/HelloWorld';
import application from './reducers';

const store = createStore(application);

function render() {
  ReactDOM.render(
    <HelloWorld
      excitement={store.getState()}
      onGetExcited={() => store.dispatch({ type: 'GET_EXCITED' })}
    />,
    document.getElementById('application-root')
  );
}

render();
store.subscribe(render);
