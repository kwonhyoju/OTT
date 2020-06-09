import React from "react";

const DetailWrap = ({ movieDetail }) => {
  /* backgroundImage */
  const bgImage = `https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`;

  /* 장르를 3개 이하로 뽑아내기 */
  let detailGenres = [];
  if (movieDetail.genres.length > 3) {
    for (let i = 0; i < 3; i++) detailGenres.push(movieDetail.genres[i]);
  } else {
    detailGenres = movieDetail.genres;
  }

  return (
    <div
      className="detail-container-wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
      }}
    >
      <div className="detail-bgGradient"></div>
      <div className="detail-container">
        <div className="detail-left">
          <img
            src={`https://image.tmdb.org/t/p/w342/${movieDetail.poster_path}`}
            alt="movie-poster"
          />
        </div>
        <div className="detail-right">
          <p className="detail-title">{movieDetail.title}</p>
          <div className="detail-genres">
            {detailGenres.map((genre) => (
              <p className="detail-genre" key={genre.id}>
                {genre.name}
              </p>
            ))}
          </div>
          <div className="detail-inform">
            <p>
              {movieDetail.original_language[0].toUpperCase() +
                movieDetail.original_language.substring(1)}
            </p>
            <p>{movieDetail.release_date}</p>
            <p>{movieDetail.runtime} minutes</p>
          </div>
          <div className="detail-overview">{movieDetail.overview}</div>
          <div className="detail-rates">
            <i className="far fa-heart"></i>&nbsp;
            {movieDetail.popularity.toFixed(2)}%
          </div>
          <div className="detail-buttons">
            {movieDetail.video ? (
              <a
                href={movieDetail.video}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="detail-trailer">Watch Trailer</span>
              </a>
            ) : (
              <span></span>
            )}
            {movieDetail.homepage ? (
              <a
                href={movieDetail.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="detail-homepage">Go Hompage</span>
              </a>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailWrap;
