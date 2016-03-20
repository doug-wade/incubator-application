import React from "react"

export default class Essay extends React.Component {
  constructor(props) {
    super(props);
  }

	render() {
		return (
			<div>
				<h2>{this.props.prompt}</h2>
				<textarea id={this.props.elementId} placeholder='Type text here'></textarea>
			</div>
			);
	}
}
Essay.propTypes = {prompt: React.PropTypes.string.isRequired, elementId: React.PropTypes.string.isRequired};
