import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../svg/Logo";
import moment from "moment";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeHeader: false, //모바일용으로 메뉴 바꿈
        };
    }

    //모바일용 메뉴
    setMobileMwnu = () => {
        this.setState({
            changeHeader: !this.state.changeHeader,
        });
    };

    render() {
        const today = moment().subtract(1, "days").format(`YYYYMMDD`);
        const weekly = moment().subtract(6, "days").format(`YYYYMMDD`);
        return (
            <header
                className={`header ${
                    this.state.changeHeader ? "mobile-menu-header" : ""
                }`}>
                <div>
                    <div className="header-left-box">
                        <div className="header-mo-gnb">
                            <ul>
                                <input
                                    type="checkbox"
                                    onClick={this.setMobileMwnu}></input>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        {/* moblie ver gnb */}
                        <Link to={"/"}>
                            <div className="header-logo">
                                <Logo />
                            </div>
                        </Link>
                        <div className="header-gnb">
                            <ul>
                                <li>
                                    <Link to={`/test/${today}/today`}>
                                        일별 랭킹
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/test/${weekly}/week`}>
                                        주중 랭킹
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/test/${weekly}/weekend`}>
                                        주말 랭킹
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* pc ver gnb */}
                    </div>
                    <div className="header-right-box">
                        <div className="header-search">
                            <span></span>
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="header-user">
                            <ul>
                                <li>회원가입</li>
                                <li>로그인</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="addHeader">
                    <ul>
                        <li>로그인</li>
                        <li>회원가입</li>
                        <li>박스오피스</li>
                        <li>영화정보</li>
                        <li>영화사정보</li>
                        <li>영화인정보</li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
