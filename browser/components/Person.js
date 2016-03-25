import React from "react"

let Person = ({ name, email, onUpdate }) => {
  const onBlur = () => {
    onUpdate({ name: name, email: email });
  }

  return (
    <div>
      <div>
        <label>Name:
          <input type="text" onBlur={onBlur} value={name} className="person-text" />
        </label>
      </div>
      <div>
        <label>Email address:
          <input type="email" onBlur={onBlur} value={email} className="person-text" />
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
