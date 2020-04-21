import React from "react";

const DetailWrap = ({ movieDetail }) => {
  const style = {
    backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${movieDetail.backdrop_path}")`,
    backgroundSize: "cover",
    opacity: "50%",
  };
  return (
    <div className="movieDetail-container" style={style}>
      <div className="movieDetail">
        <div className="movieDetail-left">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            alt=""
          />
        </div>
        <div className="movieDetail-right">
          <p className="movieDetail-title">{movieDetail.title}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailWrap;
