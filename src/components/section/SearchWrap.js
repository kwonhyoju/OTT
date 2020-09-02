import React from "react";
import { Link } from "react-router-dom";
import noimg from "../../img/noimg.png"

/* 검색결과 영화 한개씩 띄우기 */
const printData = (item, genreData, i) => {
  console.log(":::img::::",item.poster_path);
  let changeImg = item.poster_path===null?noimg:`https://image.tmdb.org/t/p/w342/${item.poster_path}`;
  return (
    <div key={i}>
      <div>
        <p className="title">{item.title}</p>
        <div className="line"></div>
        <div className="movie-image">
          <img
            src={changeImg}
            alt="photo"
          />
        </div>
        <p className="genre">
          {genreData.map((genre) => {
            let genreName = "";
            if (item.genre_ids.length && genre.id === item.genre_ids[0])
              genreName = genre.name;
            return genreName;
          })}
        </p>
        <p className="subtext">{item.overview}</p>
        <Link to={`/movie/${item.id}`}>
          <div className="movie-btn">
            <p>more view</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

const SearchWrap = ({ searchData, genreData, keyword }) => {
  return (
    <div className="searchpage-wrap">
      <div className="searchpage-box">
        <div className="user-keyword">
          <div>
            <p>"{keyword}"에 대한 검색 결과 입니다.</p>
          </div>
        </div>
        {/* user-keyword-box end */}
        <div className="search-info">
          <div className="info-count">
            <div>검색 결과 {searchData.data.total_results}건</div>
          </div>
          <div className="info-section">
            <div className="info-movie-lists">
              {searchData.data.results.map((item, i) => {
                return printData(item, genreData, i);
              })}
            </div>
            {/* info-movie-lists */}
          </div>
        </div>
        {/* search-info end */}
      </div>
    </div>
  );
};

export default SearchWrap;
