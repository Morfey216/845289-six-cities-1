import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import {Operation} from '../../reducer/user/user';

const SignIn = (props) => {
  const {onFormSubmit} = props;

  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--index">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={onFormSubmit} >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required={true}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required={true}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

SignIn.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onFormSubmit: (evt) => {
    evt.preventDefault();

    const authorizationData = {
      email: ``,
      password: ``,
    };

    const processForm = (formData) => {
      const createMapper = (target) => {
        return {
          'email': (value) => (target.email = value),
          'password': (value) => (target.password = value),
        };
      };

      const loginMapper = createMapper(authorizationData);

      for (const pair of formData.entries()) {
        const [property, value] = pair;

        if (loginMapper[property]) {
          loginMapper[property](value);
        }
      }
    };

    const formData = new FormData(document.querySelector(`form`));
    processForm(formData);

    dispatch(Operation.userLogin(authorizationData, () => ownProps.history.push(`/`)));
  },
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
