export const updatePointOfContact = ({ name, email }) => {
  return {
    type: 'UPDATE_POC',
    name,
    email
  }
}

export const persistState = () => {
  return {
    type: 'PERSIST_STATE'
  }
}
