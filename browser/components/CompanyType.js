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
          <option>Art</option>
          <option>Comics</option>
          <option>Crafts</option>
          <option>Dance</option>
          <option>Design</option>
          <option>Fashion</option>
          <option>Film & Media</option>
          <option>Games</option>
          <option>Journalism</option>
          <option>Music</option>
          <option>Performance</option>
          <option>Photography</option>
          <option>Publishing</option>
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
