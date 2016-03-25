import React from "react";
import { connect } from 'react-redux'
import { persistState } from "../actions"

let Submit = ({ dispatch }) => {
  return (
    <div>
      <button onClick={() => dispatch(persistState())}>Submit</button>
    </div>
  );
}

Submit = connect()(Submit);

Submit.propTypes = {
  dispatch: React.PropTypes.func.isRequired
}

export default Submit;
