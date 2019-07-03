import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import {Link} from 'react-router-dom';
import OffersList from '../offers-list/offers-list';
import {getFavoritesData, getFavoritesCitiesData} from '../../reducer/data/selectors';

const Favorites = (props) => {
  const {favoritesData, favoritesCitiesData} = props;

  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesCitiesData.map((currentCity) => {
                return (
                  <li className="favorites__locations-items" key={currentCity.name}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{currentCity.name}</span>
                        </a>
                      </div>
                    </div>
                    <OffersList offers={favoritesData.filter((it) => it.city.name === currentCity.name)}
                      divClassName={`favorites__places`}
                      articleClassName={`favorites__card`}
                      imageWrapperClassName={`favorites__image-wrapper`}
                      placeCardInfoClassName={`favorites__card-info`}
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to="/" className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </React.Fragment>
  );
};

Favorites.propTypes = {
  favoritesData: PropTypes.array.isRequired,
  favoritesCitiesData: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  favoritesData: getFavoritesData(state),
  favoritesCitiesData: getFavoritesCitiesData(state),
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
