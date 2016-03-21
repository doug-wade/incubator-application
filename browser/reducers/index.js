export default function application(state = { excitement: 0, poc: { name: '', email: '' } }, action) {
  switch (action.type) {
    case 'GET_EXCITED':
      return Object.assign({}, state, {
        excitement: state.excitement+= 1
      });
    case 'UPDATE_POC':
      state.poc.name = action.name || state.poc.name;
      state.poc.email = action.email || state.poc.email;
      return state;
    default:
      return state;
  }
}
