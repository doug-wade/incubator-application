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

export const showPopover = () => {
  return {
    type: 'SHOW_POPOVER'
  }
}

export const updateEssay = ({ prompt, response }) => {
  return {
    type: 'UPDATE_ESSAY',
    prompt: prompt,
    response
  }
}

export const updateCompanyName = ({ name }) => {
  return {
    type: 'UPDATE_COMPANY_NAME',
    name
  }
}

export const updateCompanyType = ({ type }) => {
  return {
    type: 'UPDATE_COMPANY_TYPE',
    companyType: type
  }
}

export const removeContributor = () => {
  return {
    type: 'REMOVE_CONTRIBUTOR'
  }
}

export const updateContributor = (id, { name, email }) => {
  return {
    type: 'UPDATE_CONTRIBUTOR',
    name,
    email,
    id
  }
}
