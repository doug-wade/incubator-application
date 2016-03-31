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

let defaultState = {
  excitement: 0,
  poc: { name: '', email: '' },
  contributors: [],
  popover: false
};

let savedState = JSON.parse(localStorage.getItem('appState'));

console.info('defaultState', defaultState)

export default function application(state = savedState || defaultState, action) {
  let newState
  switch (action.type) {
    case 'GET_EXCITED': {
      newState = Object.assign({}, state, {
        excitement: state.excitement += 1
      });
      break;
    }
    case 'UPDATE_POC': {
      newState = Object.assign({}, state, {
        poc: {
          name: action.name,
          email: action.email
        }
      });
      break;
    }
    case 'PERSIST_STATE': {
      upsertState(state);
      newState = state;
      break;
    }
    case 'SHOW_POPOVER': {
      newState = Object.assign({}, state, {
        popover: true
      });
      break;
    }
    case 'UPDATE_ESSAY': {
      newState = Object.assign({}, state, {
        [action.prompt]: action.response
      });
      break;
    }
    case 'UPDATE_COMPANY_NAME': {
      newState = Object.assign({}, state, {
        companyName: action.name
      });
      break;
    }
    case 'UPDATE_COMPANY_TYPE': {
      newState = Object.assign({}, state, {
        companyType: action.type
      });
      break;
    }
    case 'REMOVE_CONTRIBUTOR': {
      const contributors = state.contributors.slice(0, state.contributors.length - 1)
      newState = Object.assign({}, state, {
        contributors: contributors
      });
      break;
    }
    case 'UPDATE_CONTRIBUTOR': {
      let updated = false;
      const contributors = state.contributors.map((contributor) => {
        if (contributor.id === action.id) {
          updated = true;
          return {
            id: contributor.id,
            name: action.name,
            email: action.email
          }
        } else {
          return contributor;
        }
      });
      if (!updated) {
        contributors.push({ id: action.id, name: action.name, email: action.email });
      }
      newState = Object.assign({}, state, {
        contributors: contributors
      });
      break;
    }
    default: {
      newState = state;
    }
  }
  localStorage.setItem('appState', JSON.stringify(newState))
  return newState;
}
