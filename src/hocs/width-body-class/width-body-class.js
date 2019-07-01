import React from 'react';

const withBodyClass = (Component, classArr) => {
  class WithBodyClass extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      classArr.forEach((className) => {
        document.body.classList.add(className);
      });
    }

    componentWillUnmount() {
      classArr.forEach((className) => {
        document.body.classList.remove(className);
      });
    }

    render() {
      return (<Component {...this.props}/>);
    }
  }

  return WithBodyClass;
};

export default withBodyClass;
