import React from 'react';
import { connect } from 'react-redux'
import Person from './Person';
import { updateContributor, removeContributor } from '../actions'
import uuid from 'node-uuid'

const mapStateToProps = (state) => {
  return {
    contributors: state.contributors
  }
}

let Contributors = ({ contributors, dispatch }) => {
  let people = [];
  contributors.forEach((contributor) => {
    people.push(
      <Person
        onUpdate={ (hash) => { dispatch(updateContributor(contributor.id, hash)) }}
        name={contributor.name}
        email={contributor.email}
      />
    )
  });
  const addPerson = () => {
    dispatch(updateContributor(uuid.v4(), { name: '', email: '' }))
  }
  const removePerson = () => {
    dispatch(removeContributor())
  }
  let removeButton = people.length ? <button className="secondary" onClick={removePerson}>Remove Contributor</button> : null;
  return (
    <div>
      <h2>Contributors </h2>
      <p className="subtext">You are much more likely to be accepted with at least one contributor. Add another below.</p>
      {people}
      <button className="secondary" onClick={addPerson}>Add Contributor</button>
      {removeButton}
    </div>
  );
}

Contributors.propTypes = {
  contributors: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    email: React.PropTypes.string,
    id: React.PropTypes.string
  })),
  dispatch: React.PropTypes.func
}

Contributors = connect(mapStateToProps)(Contributors);

export default Contributors;
