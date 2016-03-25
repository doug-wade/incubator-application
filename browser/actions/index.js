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

export const updateEssay = ({ prompt, response }) => {
  return {
    type: 'UPDATE_ESSAY',
    prompt: prompt.replace(/\s/gi, '-').replace(/\?/gi, '').toLowerCase(),
    response
  }
}

export const updateContributor = ({ name, email, id }) => {
  return {
    type: 'UPDATE_CONTRIBUTOR',
    name,
    email,
    id
  }
}
