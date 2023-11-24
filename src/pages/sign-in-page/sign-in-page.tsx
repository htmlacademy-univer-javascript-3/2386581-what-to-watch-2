import BaseInput from '../../components/base-input/base-input';
import Button from '../../components/button/button';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function SignInPage() {
  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <BaseInput
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
            <Button className="sign-in__btn" type="submit">
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
