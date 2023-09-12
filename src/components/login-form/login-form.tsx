import {useState, ChangeEvent, FormEvent} from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/user-process/user-process-thunkst';

export function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;
  const isValidPassword = passwordRegex.test(password);
  const isNeedDisable = !email || !isValidPassword;

  const handleChangeLogin = (evt: ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };
  const handleChangePassword = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction({
      email: email,
      password: password,
    }));
  };

  return (
    <div className="login__form">
      <form className="login-form"
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="login-form__inner-wrapper">
          <h1 className="title title--size-s login-form__title">Вход</h1>
          <div className="login-form__inputs">
            <div className="custom-input login-form__input">
              <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
              <input
                value={email}
                onChange={handleChangeLogin}
                type="email"
                id="email"
                name="email"
                placeholder="Адрес электронной почты"
                required
              />
            </div>
            <div className="custom-input login-form__input">
              <label className="custom-input__label" htmlFor="password">Пароль</label>
              <input
                value={password}
                onChange={handleChangePassword}
                type="password"
                id="password"
                name="password"
                placeholder="Пароль"
                required
              />
            </div>
          </div>
          <button
            className="btn btn--accent btn--general login-form__submit"
            type="submit"
            disabled={isNeedDisable}
          >
            Войти
          </button>
          {isNeedDisable && password !== '' && (
            <p style={{color: 'red'}}>
              Password must contain at least one number and one letter
            </p>
          )}
        </div>
        <label className="custom-checkbox login-form__checkbox">
          <input type="checkbox" id="id-order-agreement" name="user-agreement" required/>
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">
            Я&nbsp;согласен с <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>
            &nbsp;и пользовательским соглашением
          </span>
        </label>
      </form>
    </div>
  );
}
