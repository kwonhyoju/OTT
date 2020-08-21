import React from "react";

const SearchWrap = ({ searchData, keyword }) => {
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
                        <div>검색 결과 20건</div>
                    </div>
                    <div className="info-section">
                        <div className="info-movie-lists">
                            <div>
                                <div>
                                    <p className="title">title</p>
                                    <p className="genre">genre</p>
                                    <div className="line"></div>
                                    <div className="movie-image">
                                        <img
                                            src="http://placehold.it/200x100"
                                            alt="photo"
                                        />
                                    </div>
                                    <p className="subtext">
                                        this is sub text.this is sub text.this
                                        is sub text.
                                    </p>
                                    <div className="movie-btn">
                                        <p>movie more</p>
                                    </div>
                                </div>
                            </div>
                            {/* 1개 */}
                            <div>
                                <div>
                                    <p className="title">title</p>
                                    <p className="genre">genre</p>
                                    <div className="line"></div>
                                    <div className="movie-image">
                                        <img
                                            src="http://placehold.it/200x100"
                                            alt="photo"
                                        />
                                    </div>
                                    <p className="subtext">
                                        this is sub text.this is sub text.this
                                        is sub text.
                                    </p>
                                    <div className="movie-btn">
                                        <p>movie more</p>
                                    </div>
                                </div>
                            </div>
                            {/* 1개 */}
                            <div>
                                <div>
                                    <p className="title">title</p>
                                    <p className="genre">genre</p>
                                    <div className="line"></div>
                                    <div className="movie-image">
                                        <img
                                            src="http://placehold.it/200x100"
                                            alt="photo"
                                        />
                                    </div>
                                    <p className="subtext">
                                        this is sub text.this is sub text.this
                                        is sub text.
                                    </p>
                                    <div className="movie-btn">
                                        <p>movie more</p>
                                    </div>
                                </div>
                            </div>
                            {/* 1개 */}
                            <div>
                                <div>
                                    <p className="title">title</p>
                                    <p className="genre">genre</p>
                                    <div className="line"></div>
                                    <div className="movie-image">
                                        <img
                                            src="http://placehold.it/200x100"
                                            alt="photo"
                                        />
                                    </div>
                                    <p className="subtext">
                                        this is sub text.this is sub text.this
                                        is sub text.
                                    </p>
                                    <div className="movie-btn">
                                        <p>movie more</p>
                                    </div>
                                </div>
                            </div>
                            {/* 1개 */}
                            <div>
                                <div>
                                    <p className="title">title</p>
                                    <p className="genre">genre</p>
                                    <div className="line"></div>
                                    <div className="movie-image">
                                        <img
                                            src="http://placehold.it/200x100"
                                            alt="photo"
                                        />
                                    </div>
                                    <p className="subtext">
                                        this is sub text.this is sub text.this
                                        is sub text.
                                    </p>
                                    <div className="movie-btn">
                                        <p>movie more</p>
                                    </div>
                                </div>
                            </div>
                            {/* 1개 */}
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
