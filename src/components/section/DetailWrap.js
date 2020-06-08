import React from "react";

const DetailWrap = ({ movieDetail }) => {
  console.log(movieDetail);

  /* 장르를 3개 이하로 뽑아내기 */
  let detailGenres = [];
  if (movieDetail.genres.length > 3) {
    for (let i = 0; i < 3; i++) detailGenres.push(movieDetail.genres[i]);
  } else {
    detailGenres = movieDetail.genres;
  }

  return (
    <div className="detail-container-wrapper">
      <div className="detail-container">
        <div className="detail-left">
          <img
            src={`https://image.tmdb.org/t/p/w342/${movieDetail.poster_path}`}
            alt="movie-poster"
          />
        </div>
        <div className="detail-right">
          <p className="detail-title">{movieDetail.title}</p>
          <p className="detail-tagline">" {movieDetail.tagline} "</p>
          <div className="detail-genres">
            {detailGenres.map((genre) => (
              <p className="detail-genre">{genre.name}</p>
            ))}
          </div>
          <div className="detail-inform">
            <p>{movieDetail.original_language}</p>
            <p>{movieDetail.release_date}</p>
            <p>{movieDetail.runtime} minutes</p>
          </div>
          <div className="detail-overview">{movieDetail.overview}</div>
          <div className="detail-rates">
            <i class="far fa-heart"></i>
            {movieDetail.popularity.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailWrap;
