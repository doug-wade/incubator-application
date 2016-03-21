export const updatePointOfContact = ({ name, email }) => {
  return {
    type: 'UPDATE_POC',
    name,
    email
  }
}
