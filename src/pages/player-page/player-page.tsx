import Button from '../../components/button/button';
import Loader from '../../components/loader/loader';

import {
  getIsLoading,
  getFilmInfo as filmInfoState,
} from '../../store/main-film-data/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { getFilmInfo } from '../../store/api-actions';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { AppRoute } from '../../const';
import { formatRemainingTime } from '../../utils/format-remaining-time';

function PlayerPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const isLoading = useAppSelector(getIsLoading);
  const filmInfo = useAppSelector(filmInfoState);

  const handleToggleFullScreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  useEffect(() => {
    if (id && id !== filmInfo?.id) {
      dispatch(getFilmInfo(id));
    }
  }, [dispatch, id, filmInfo?.id]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  if (isLoading || !filmInfo) {
    return <Loader />;
  }

  return (
    <div className="player">
      <video
        autoPlay
        ref={videoRef}
        src={filmInfo.videoLink}
        className="player__video"
        poster={filmInfo.posterImage}
        onTimeUpdate={(evt) =>
          setCurrentTime(Math.round(evt.currentTarget.currentTime))}
        onDurationChange={(evt) =>
          setDuration(Math.round(evt.currentTarget.duration))}
      />
      <Button
        type="button"
        className="player__exit"
        onClick={() => navigate(AppRoute.Movie.replace(':id', filmInfo.id))}
      >
        Exit
      </Button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={currentTime}
              max={duration}
            />
            <div
              className="player__toggler"
              style={{
                left: `${duration ? (100 / duration) * currentTime : 0}%`,
              }}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">
            -{formatRemainingTime(filmInfo.runTime - currentTime)}
          </div>
        </div>

        <div className="player__controls-row">
          <Button
            type="button"
            className="player__play"
            onClick={() => setIsPlaying((prevState) => !prevState)}
          >
            {isPlaying ? (
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>
            )}
          </Button>

          <div className="player__name">{filmInfo.name}</div>

          <Button
            type="button"
            className="player__full-screen"
            onClick={handleToggleFullScreen}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
