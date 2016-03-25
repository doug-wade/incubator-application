import React from "react"

let Person = ({ name, email, onUpdate }) => {
  let nameInput
  let emailInput

  const onBlur = () => {
    onUpdate({ name: nameInput.value, email: emailInput.value })
  }

  return (
    <div>
      <div>
        <label>Name:
          <input
            type="text"
            onBlur={onBlur}
            defaultValue={name}
            ref={node => { nameInput = node }}
            className="person-text"
          />
        </label>
      </div>
      <div>
        <label>Email address:
          <input
            type="email"
            onBlur={onBlur}
            defaultValue={email}
            ref={node => { emailInput = node }}
            className="person-text"
          />
        </label>
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
