import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getActiveOffer, getNearOffersData} from '../../reducer/data/selectors';
import {Operation} from '../../reducer/data/data';
import Header from '../header/header';
import ReviewsList from '../reviews-list/reviews-list';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import {RATING_MULTIPLIER, MAX_PREVIEW_IMAGES, MAX_NEAR_OFFERS_QUANTITY} from '../../constants';

const OfferDetailed = (props) => {
  const {id, images, title, isPremium, isFavorite, rating, bedrooms, maxAdults, price, goods, host, description} = props.activeOffer;
  const {nearOffersData} = props;

  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, MAX_PREVIEW_IMAGES).map((imageSrc) => {
                return (
                  <div className="property__image-wrapper" key={`img-${imageSrc}`}>
                    <img className="property__image" src={imageSrc} alt="Photo studio"/>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">

              {isPremium ? (<div className="property__mark"><span>Premium</span></div>) : ``}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(rating) * RATING_MULTIPLIER}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{Math.round(rating)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  Entire place
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">

                  {goods.map((item) => {
                    return (
                      <li className="property__inside-item" key={`inside-${item}`}>
                        {item}
                      </li>
                    );
                  })}

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${host.isPro ? `property__avatar-wrapper--pro` : ``}`}>
                    <img className="property__avatar user__avatar" src={`${host.avatarUrl}`} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro ? (<span className="property__user-status">Pro</span>) : ``}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsList activeOfferId={id}/>
            </div>
          </div>
          <Map currentOffersData={nearOffersData} mapClassName={`property__map`}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={nearOffersData} articleClassName={`near-places__card`}/>
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

OfferDetailed.propTypes = {
  activeOffer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    goods: PropTypes.array.isRequired,
    host: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,

  }),
  nearOffersData: PropTypes.array,
  changeFavoriteStatus: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeOffer: getActiveOffer(state),
  nearOffersData: getNearOffersData(state).slice(0, MAX_NEAR_OFFERS_QUANTITY),
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteStatus: (id, status) => {
    dispatch(Operation.changeFavoriteStatus(id, status));
  },
});

export {OfferDetailed};
export default connect(mapStateToProps, mapDispatchToProps)(OfferDetailed);
