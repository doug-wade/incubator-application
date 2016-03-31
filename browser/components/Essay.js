import React from "react"
import { connect } from 'react-redux'
import { updateEssay } from "../actions"

function normalizePrompt(prompt) {
  return prompt.replace(/\s/gi, '-').replace(/\?/gi, '').toLowerCase();
}

function mapStateToProps(state, ownProps) {
  return {
    answer: state[normalizePrompt(ownProps.prompt)]
  };
}

let Essay = ({ prompt, elementId, answer, dispatch }) => {
  let input
  return (
    <div>
      <h2>{prompt}</h2>
      <textarea
        id={elementId}
        placeholder='Compose response'
        className="essay form-group"
        ref={node => {
          input = node
        }}
        defaultValue={answer}
        onBlur={() => dispatch(updateEssay({ prompt: normalizePrompt(prompt), response: input.value }))}>
      </textarea>
    </div>
  );
}

Essay.propTypes = {
  prompt: React.PropTypes.string.isRequired,
  elementId: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  answer: React.PropTypes.string.isRequired
};

Essay = connect(mapStateToProps)(Essay);

export default Essay;
