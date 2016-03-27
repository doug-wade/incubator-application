import React from "react";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    showPopover: state.popover
  }
}

let Popover = ({ showPopover }) => {
  const classes = showPopover ? "popover" : "hidden";
  return (
    <div hidden={!showPopover} className={classes}>
      <p className="centered">You have successfully submitted your application for the Cornish Incubator program.  We will contact you by August 1st with more details.</p>
    </div>
  );
}

Popover = connect(mapStateToProps)(Popover);

Popover.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  showPopover: React.PropTypes.bool.isRequired
}

export default Popover;
