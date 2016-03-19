export default function counter(state = 0, action) {
  switch (action.type) {
    case 'GET_EXCITED':
      return state + 1
    default:
      return state
  }
}
