type FilmCardPosterProps = {
  previewImage: string;
  alt: string;
  className?: string;
};

function FilmCardPoster({
  previewImage,
  alt,
  className = '',
}: FilmCardPosterProps): JSX.Element {
  return (
    <div className={`film-card__poster ${className}`}>
      <img src={previewImage} alt={alt} width="218" height="327" />
    </div>
  );
}

export default FilmCardPoster;
