import React from "react"
import { connect } from 'react-redux'
import { updateCompanyType } from "../actions"

const mapStateToProps = (state) => {
  return {
    type: state.companyType
  }
}

let CompanyType = ({ dispatch, type }) => {
  let input
  return (
    <div>
      <h2>Company Type</h2>
      <select
        onClick={() => dispatch(updateCompanyType({ type: input.value }))}
        ref={node => { input = node }}
        defaultValue={type}>
          <option>Dance</option>
          <option>Technology</option>
          <option>Theater</option>
      </select>
    </div>
  );
}

CompanyType.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  type: React.PropTypes.string.isRequired
};

CompanyType = connect(mapStateToProps)(CompanyType);

export default CompanyType;
