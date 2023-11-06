import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import { MoviePageRoute } from '../../const';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import type { FilmData, Review } from '../../types';

type TabsProps = {
  filmData: FilmData;
  reviews: Review[];
};

function Tabs({ filmData }: TabsProps): JSX.Element {
  const [acitiveTab, setActiveTab] = useState('Overview');

  return (
    <React.Fragment>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(MoviePageRoute).map((tab) => (
            <li
              key={tab}
              className={classNames(
                'film-nav__item',
                tab === acitiveTab && 'film-nav__item--active'
              )}
              onClick={() => setActiveTab(tab)}
            >
              <div className="film-nav__link">
                <span>{tab}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      {acitiveTab === MoviePageRoute.Overview && <FilmOverview {...filmData}/>}
      {acitiveTab === MoviePageRoute.Details && <FilmDetails {...filmData} />}
      {acitiveTab === MoviePageRoute.Reviews && <FilmReviews />}
    </React.Fragment>
  );
}

export default Tabs;
