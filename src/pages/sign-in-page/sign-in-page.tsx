import BaseInput from '../../components/base-input/base-input';
import Button from '../../components/button/button';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

import { useRef, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { loginAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

function SignInPage() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      const loginData = loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(loginData);
    }
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authorizationStatus, navigate]);

  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <form action="" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <BaseInput
                ref={loginRef}
                classNameInput="sign-in__input"
                classNameLabel="sign-in__label visually-hidden"
                type="email"
                id="user-email"
                label="Email address"
                placeholder="Email address"
              />
            </div>
            <div className="sign-in__field">
              <BaseInput
                ref={passwordRef}
                classNameInput="sign-in__input"
                classNameLabel="sign-in__label visually-hidden"
                type="password"
                id="user-password"
                label="Password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="sign-in__submit">
            <Button
              className="sign-in__btn"
              type="submit"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignInPage;
