import React from "react";

// const UpdatedComponent = OriginalComponent => {

const withCounter = (WrappedComponent, incrementNumber) => {
  //  class NewComponent extends React.Component {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
      console.log("----------------------");
      console.log(this.props.type);
      return (
        <WrappedComponent
          name="Pooja"
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
