import React from "react";
import { connect } from 'react-redux'
import Person from "./Person";
import { updatePointOfContact } from "../actions"

const mapStateToProps = (state) => {
  return {
    name: state.poc.name,
    email: state.poc.email
  }
}

let PointOfContact = ({ name, email, dispatch }) => {
  return (
    <div>
      <h2>Point of Contact: </h2>
      <Person onUpdate={(hash) => dispatch(updatePointOfContact(hash))} name={name} email={email} />
    </div>
  );
}

PointOfContact.propTypes = {
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired
}

PointOfContact = connect(mapStateToProps)(PointOfContact);

export default PointOfContact;
