import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import UserBlock from './user-block';
import { AuthorizationStatus, NameSpace } from '../../const';

const mockStore = configureMockStore();

describe('UserBlock Component', () => {
  it('should render user-block with the correct elements when user is unauthorized', () => {
    const store = mockStore({
      [NameSpace.User]: {
        isLoading: false,
        error: null,
        id: 0,
        avatarUrl: '',
        email: '',
        name: '',
        token: '',
        login: '',
        password: '',
        favoriteFilms: [],
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    });

    render(
      <MemoryRouter>
        <Provider store={store}>
          <UserBlock />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.queryByText('Sign out')).not.toBeInTheDocument();
  });

  it('should render user avatar when user is authorized', () => {
    const store = mockStore({
      [NameSpace.User]: {
        isLoading: false,
        error: null,
        id: 0,
        avatarUrl: 'test-url',
        email: '',
        name: 'Test Name',
        token: '',
        login: '',
        password: '',
        favoriteFilms: [],
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <UserBlock />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByAltText('User avatar')).toBeInTheDocument();
  });
});
