import http from 'http';

function upsertState(state) {
  var postData = JSON.stringify(state);

  var options = {
    hostname: 'localhost',
    port: 3000,
    path: '/application',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': postData.length
    }
  };

  var req = http.request(options, (res) => {
    /* eslint no-console: 0 */
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.')
    })
  });

  req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
  });
  /* eslint no-console: 0 */

  // write data to request body
  req.write(postData);
  req.end();
}

export default function application(state = { excitement: 0, poc: { name: '', email: '' } }, action) {
  switch (action.type) {
    case 'GET_EXCITED': {
      return Object.assign({}, state, {
        excitement: state.excitement+= 1
      });
    }
    case 'UPDATE_POC': {
      state.poc.name = action.name || state.poc.name;
      state.poc.email = action.email || state.poc.email;
      return state;
    }
    case 'PERSIST_STATE': {
      upsertState(state);
      return state;
    }
    case 'UPDATE_ESSAY': {
      return Object.assign({}, state, {
        [action.prompt]: action.response
      });
    }
    default: {
      return state;
    }
  }
}
