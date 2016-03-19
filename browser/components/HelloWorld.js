import React from "react"

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {exclamationCount: 0};
  }

  render() {
    return (
      <div>
        <h2>Hello, World{"!".repeat(this.props.excitement)}</h2>
        <button onClick={this.props.onGetExcited}>Get More Excited!</button>
      </div>
      );
  }
}

HelloWorld.propTypes = {
  excitement: React.PropTypes.number.isRequired,
  onGetExcited: React.PropTypes.func.isRequired,
}
