import React, { Component } from "react";
import { inject, observer } from "mobx-react";
// import currentimg from "../../img/우리집.png";

@inject("apiStore")
@observer
class SectionWrap extends Component {
  // main_roll
  mainRoll = () => {
    const popluar = this.props.popData.data.results;
    const genreData = this.props.genreData.data.genres;
    return (
      <ul>
        {popluar.map((pop, index) => {
          let style = {
            backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${pop.poster_path}")`,
          };
          return (
            <li key={index} style={style}>
              <p>
                <span className="main-roll-title">{pop.title}</span>
                <span className="pop-genre">
                  {genreData.map((genre) => {
                    let genreName = "";

                    if (genre.id === pop.genre_ids[0]) {
                      genreName = genre.name;
                    }

                    return genreName;
                  })}
                </span>
                <br />
                <span className="pop-subtitle">{pop.overview}</span>
                <br />
                <span className="main-roll-playbtn">More view</span>
                <span className="main-roll-addbtn">Add to favourites</span>
              </p>
            </li>
          );
        })}
      </ul>
    );
  };
  
  nowplay =()=>{
    const nowplay = this.props.nowData.data.results;
    const genreData = this.props.genreData.data.genres;
    return(
      <div className="section-current-roll">
            {nowplay.map((info, index) => {
              let genreList = info.genre_ids.slice(0,2);
              return (
                <div key={index}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
                    alt=""
                  />
                  <div className="upcoming-box">
                    <div>
                      <p className="title">{info.title}</p>
                      <p className="data-count">
                        <span>{info.release_date}</span> ⭐️
                        {info.vote_average} / 10
                      </p>
                      <div className="text">
                        <p className="genre">
                          {genreData.map((genre) => {
                            let genreName = "";

                            genreList.findIndex(element=>{
                              if(element === genre.id){
                                genreName= genre.name;
                              }
                            });

                            return genreName;
                          })}
                        </p>
                        <p className="subTitle">{info.overview}</p>
                      </div>
                      <div className="datil-view">
                        <button>more view</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
    );
  }

  upcome = () => {
    const upcomes = this.props.upcomeData.data.results;
    const genreData = this.props.genreData.data.genres;
    console.log("개봉예정::::", upcomes);
    return (
      <div className="section-schedule-roll">
        {upcomes.map((info, index) => {
          let genreList = info.genre_ids.slice(0,2);

          // console.log("::::A:::",genreTest);
          let style = {
            backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${info.poster_path}")`,
          };
          return (
            <div key={index} style={style}>
              <div className="schedule-text">
                <div>
                  <p className="title">{info.title}</p>
                  <p className="data-count">
                    <span>{info.release_date}</span> ⭐️{info.vote_average} / 10
                  </p>
                  <div className="text">
                    <p className="genre">
                      {genreData.map((genre) => {
                        let genreName = [];

                        genreList.findIndex(element=>{
                          if(element === genre.id){
                            genreName= genre.name;
                          }
                        });

                        return genreName;
                      })}
                    </p>
                    <p className="subTitle">{info.overview}</p>
                  </div>
                  <div className="datil-view">
                        <button>more view</button>
                      </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  render() {
    return (
      <section className="section-wrap">
        <div className="section-main_roll">{this.mainRoll()}</div>
        {/* main-roll */}
        <div className="section-current-movies">
          <p>현재상영작</p>
          {this.nowplay()}
        </div>
        {/* 현재 상영작 */}
        <div className="section-schedule-movies">
          <p>개봉예정작</p>
          {this.upcome()}
        </div>
        {/* 개봉 예정작 */}
      </section>
    );
  }
}

export default SectionWrap;
