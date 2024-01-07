import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import PrivateRoute from './private-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { NameSpace } from '../../const';
import { AuthorizationStatus } from '../../const';

describe('PrivateRoute', () => {
  const mockStore = configureMockStore([]);

  it('should render component for public route when user is not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="/login" element={<span>{expectedText}</span>} />
            <Route
              path="/private"
              element={
                <PrivateRoute>
                  <span>{notExpectedText}</span>
                </PrivateRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const expectedText = 'private route';
    const notExpectedText = 'public route';
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/private']}>
          <Routes>
            <Route path="/login" element={<span>{notExpectedText}</span>} />
            <Route
              path="/private"
              element={
                <PrivateRoute>
                  <span>{expectedText}</span>
                </PrivateRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
