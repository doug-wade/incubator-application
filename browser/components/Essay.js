import React from "react"
import { connect } from 'react-redux'
import { updateEssay } from "../actions"

let Essay = ({ prompt, elementId, dispatch }) => {
  let input
  return (
    <div>
      <h2>{prompt}</h2>
      <textarea
        id={elementId}
        placeholder='Type text here'
        className="essay"
        ref={node => {
          input = node
        }}
        onBlur={() => dispatch(updateEssay({ prompt: prompt, response: input.value }))}>
      </textarea>
    </div>
  );
}

Essay.propTypes = {
  prompt: React.PropTypes.string.isRequired,
  elementId: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired
};

Essay = connect()(Essay);

export default Essay;
