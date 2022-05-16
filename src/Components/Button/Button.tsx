// @ts-ignore
import React from "react";

export class Button extends React.Component<{}, { count: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    // @ts-ignore
    // this.textInput.focus();
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  shouldComponentUpdate() {
    console.log("SCU");
    return true;
  }
  componentDidMount() {
    console.log("CDM");
  }

  componentDidUpdate() {
    console.log("CDU");
  }

  componentWillUnmount() {
    console.log("CWU");
  }

  render() {
    return (
      <>
        {/* @ts-ignore */}
        {/* <input ref={(input) => (this.textInput = input)} /> */}
        <button onClick={this.handleClick}>Whatever</button>;
      </>
    );
  }
}
