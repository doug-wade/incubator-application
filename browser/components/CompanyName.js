import React from "react"
import { connect } from 'react-redux'
import { updateCompanyName } from "../actions"

const mapStateToProps = (state) => {
  return {
    name: state.companyName
  }
}

let CompanyName = ({ name, dispatch }) => {
  let input
  return (
    <div className="form-group">
      <label>Company Name</label>
      <input
        type="text"
        ref={node => {
          input = node
        }}
        defaultValue={name}
        onBlur={() => dispatch(updateCompanyName({ name: input.value }))}>
      </input>
    </div>
  );
}

CompanyName.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired
};

CompanyName = connect(mapStateToProps)(CompanyName);

export default CompanyName;
