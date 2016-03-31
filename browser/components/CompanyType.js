import React from "react"
import { connect } from 'react-redux'
import { updateCompanyType } from "../actions"

const mapStateToProps = (state) => {
  return {
    type: state.companyType
  }
}

const options = [
  'Art',
  'Comics',
  'Crafts',
  'Dance',
  'Design',
  'Fashion',
  'Film & Media',
  'Games',
  'Journalism',
  'Music',
  'Performance',
  'Photography',
  'Publishing',
  'Technology',
  'Theater'
].map(val => <option value={val} label={val}>{val}</option>);

let CompanyType = ({ dispatch, type }) => {
  let input
  return (
    <div>
      <h2>Company Type</h2>
      <select
        onChange={() => dispatch(updateCompanyType({ type: input.value }))}
        ref={node => { input = node }}
        defaultValue={type}>
          {options}
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
