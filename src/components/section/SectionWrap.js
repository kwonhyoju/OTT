import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import currentimg from "../../img/우리집.png";

@inject("apiStore")
@observer
class SectionWrap extends Component {
    render() {
        console.log(":::A:::", this.props.apiStore.test);
        console.log(":::B:::", this.props.apiStore.act());
        return (
            <section className="section-wrap">
                <div className="section-main_roll">
                    <ul>
                        <li>
                            <p>
                                <span className="main-roll-title">
                                    터미네이터 다크페이트
                                </span>
                                <br />
                                심판의 날 그 후, 뒤바뀐 미래 새로운 인류의 희망
                                ‘대니’(나탈리아 레이즈)를 지키기 위해 슈퍼 솔져
                                ‘그레이스’(맥켄지 데이비스)가 미래에서 찾아오고,
                                ‘대니’를 제거하기 위한 터미네이터
                                ‘Rev-9’(가브리엘 루나)의 추격이 시작된다. <br />
                                <span className="main-roll-playbtn">
                                    Play Now
                                </span>
                                <span className="main-roll-addbtn">
                                    Add to favourites
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className="main-roll-title">
                                    터미네이터 다크페이트
                                </span>
                                <br />
                                심판의 날 그 후, 뒤바뀐 미래 새로운 인류의 희망
                                ‘대니’(나탈리아 레이즈)를 지키기 위해 슈퍼 솔져
                                ‘그레이스’(맥켄지 데이비스)가 미래에서 찾아오고,
                                ‘대니’를 제거하기 위한 터미네이터
                                ‘Rev-9’(가브리엘 루나)의 추격이 시작된다. <br />
                                <span className="main-roll-playbtn">
                                    Play Now
                                </span>
                                <span className="main-roll-addbtn">
                                    Add to favourites
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className="main-roll-title">
                                    터미네이터 다크페이트
                                </span>
                                <br />
                                심판의 날 그 후, 뒤바뀐 미래 새로운 인류의 희망
                                ‘대니’(나탈리아 레이즈)를 지키기 위해 슈퍼 솔져
                                ‘그레이스’(맥켄지 데이비스)가 미래에서 찾아오고,
                                ‘대니’를 제거하기 위한 터미네이터
                                ‘Rev-9’(가브리엘 루나)의 추격이 시작된다. <br />
                                <span className="main-roll-playbtn">
                                    Play Now
                                </span>
                                <span className="main-roll-addbtn">
                                    Add to favourites
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="section-current-movies">
                    <p>현재상영작</p>
                    <div className="section-current-roll">
                        <div>
                            <img src="../../img/우리집.png" alt="" />
                            <div className="current-text">text</div>
                        </div>
                        <div>
                            <img src={currentimg} alt="" />
                            <div className="current-text">text</div>
                        </div>
                        <div>
                            <img src={currentimg} alt="" />
                            <div className="current-text">text</div>
                        </div>
                        <div>
                            <img src={currentimg} alt="" />
                            <div className="current-text">text</div>
                        </div>
                        <div>
                            <img src={currentimg} alt="" />
                            <div className="current-text">text</div>
                        </div>
                    </div>
                </div>
                <div className="section-schedule-movies">
                    <p>개봉예정작</p>
                    <div className="section-schedule-roll">
                        <div>
                            <div className="schedule-text">text</div>
                        </div>
                        <div>
                            <div className="schedule-text">text</div>
                        </div>
                        <div>
                            <div className="schedule-text">text</div>
                        </div>
                        <div>
                            <div className="schedule-text">text</div>
                        </div>
                        <div>
                            <div className="schedule-text">text</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionWrap;
