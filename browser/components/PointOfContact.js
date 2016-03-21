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

let PointOfContact = ({ name, email }) => {
  return (
    <div>
      <h3>Point of Contact: </h3>
      <Person onUpdate={updatePointOfContact} name={name} email={email} />
    </div>
  );
}

PointOfContact.propTypes = {
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired
}

PointOfContact = connect(mapStateToProps)(PointOfContact);

export default PointOfContact;
