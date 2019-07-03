import React from 'react';

const widthItemActiveSwitch = (Component) => {
  class WidthItemActiveSwitch extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isItemActive: false
      };

      this._hundlerItemClick = this._hundlerItemClick.bind(this);
    }

    _changeItemStatus(isItemActive) {
      this.setState({isItemActive});
    }

    _hundlerItemClick() {
      this._changeItemStatus(!this.state.isItemActive);
    }

    render() {
      return (
        <Component
          {...this.props}
          isItemActive={this.state.isItemActive}
          hundlerItemClick={this._hundlerItemClick}
        />
      );
    }
  }

  return WidthItemActiveSwitch;

};

export default widthItemActiveSwitch;
