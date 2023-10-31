import { forwardRef } from 'react';
import type { Player } from '../../types';

interface VideoPlayerProps extends Player {
  muted?: boolean;
  autoPlay?: boolean;
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  (
    { videoLink, muted = true, autoPlay = true }: VideoPlayerProps,
    ref: React.ForwardedRef<HTMLVideoElement>
  ): JSX.Element => (
    <video
      className="small-film-card__image"
      ref={ref}
      muted={muted}
      src={videoLink}
      autoPlay={autoPlay}
    />
  )
);

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
