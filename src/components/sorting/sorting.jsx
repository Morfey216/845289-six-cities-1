import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getActiveSortingType} from '../../reducer/data/selectors';
import {ActionCreator} from '../../reducer/data/data';
import {SORTING_TYPES} from '../../constants';

const Sorting = (props) => {
  const {activeSortingType, onSortingTypeClick, hundlerItemClick, isItemActive} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={hundlerItemClick}>
        {activeSortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isItemActive ? `places__options--opened` : ``}`}>
        {SORTING_TYPES.map((type) => {
          return (
            <li className={`places__option ${type === activeSortingType ? `places__option--active` : ``}`}
              tabIndex="0"
              key={type}
              onClick={() => onSortingTypeClick(type)}
            >
              {type}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  activeSortingType: PropTypes.string.isRequired,
  onSortingTypeClick: PropTypes.func.isRequired,
  hundlerItemClick: PropTypes.func,
  isItemActive: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeSortingType: getActiveSortingType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSortingTypeClick: (sortingType) => {
    dispatch(ActionCreator.changeActiveSortingType(sortingType));
    dispatch(ActionCreator.changeActiveOffer(null));
  },
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
