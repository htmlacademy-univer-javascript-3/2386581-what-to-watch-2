const AUTH_TOKEN = 'auth-token';

type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN, token);
};

export const removeToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN);
};
