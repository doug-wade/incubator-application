import React from 'react';
import { connect } from 'react-redux'
import Person from './Person';
import { updateContributor } from '../actions'
import uuid from 'node-uuid'

const mapStateToProps = (state) => {
  return {
    contributors: state.contributors
  }
}

let Contributors = ({ contributors, dispatch }) => {
  const people = [];
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
  return (
    <div>
      <h3>Contributors: </h3>
      {people}
      <button onClick={addPerson}>Add Contributor</button>
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
