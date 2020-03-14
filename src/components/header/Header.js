import React, { Component } from "react";
import Logo from "../../svg/Logo";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-left-box">
                    <div className="header-logo">
                        <Logo />
                    </div>
                    <div className="header-gnb">
                        <ul>
                            <li>박스오피스</li>
                            <li>영화정보</li>
                            <li>영화사정보</li>
                            <li>영화인정보</li>
                        </ul>
                    </div>
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
            </header>
        );
    }
}

export default Header;
