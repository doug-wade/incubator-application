import React from "react"
import uuid from "node-uuid"

let Person = ({ name, email, onUpdate }) => {
  let nameInput
  let emailInput

  let nameInputId = uuid.v4()
  let emailInputId = uuid.v4()

  const onBlur = () => {
    onUpdate({ name: nameInput.value, email: emailInput.value })
  }

  return (
    <div>
      <div className="form-group">
        <label htmlFor={nameInputId}>Name</label>
        <input
          type="text"
          onBlur={onBlur}
          defaultValue={name}
          ref={node => { nameInput = node }}
          className="person-text"
          id={nameInputId}
        />
      </div>
      <div className="form-group">
        <label htmlFor={emailInputId}>Email address</label>
        <input
          type="email"
          onBlur={onBlur}
          defaultValue={email}
          ref={node => { emailInput = node }}
          className="person-text"
          id={emailInputId}
        />
      </div>
    </div>
  );
}

Person.propTypes = {
  onUpdate: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired
};

export default Person;
