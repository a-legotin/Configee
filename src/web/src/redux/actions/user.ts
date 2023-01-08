export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SET_USER = 'SET_USER';
export const RESET_USER = 'RESET_USER';

export type User = {
  email: string;
  role: string;
};

export type Credentials = {
  username: string;
  password: string;
};

export type UserAction<T> = {
  type: string;
  payload?: T;
};

export function login(credentials: Credentials): UserAction<Credentials> {
  console.log('creds:' + credentials);
  return {
    type: LOGIN_USER,
    payload: credentials
  };
}

export function logout(): UserAction<never> {
  return {
    type: LOGOUT_USER
  };
}

export function setUser(user: User): UserAction<User> {
  console.log('setting user:' + user);
  return {
    type: SET_USER,
    payload: user
  };
}

export function resetUser(): UserAction<never> {
  return { type: RESET_USER };
}
