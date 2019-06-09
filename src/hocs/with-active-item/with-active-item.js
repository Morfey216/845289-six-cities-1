import React from 'react';

const withActiveItem = (Component, initActiveItem = null) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: initActiveItem
      };

      this._setActiveItem = this._setActiveItem.bind(this);
    }

    _setActiveItem(activeItem) {
      this.setState({activeItem});
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          setActiveItem={this._setActiveItem}
        />
      );
    }
  }

  return WithActiveItem;

};

export default withActiveItem;
