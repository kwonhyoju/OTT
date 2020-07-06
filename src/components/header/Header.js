import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../svg/Logo";

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
    return (
      <header
        className={`header ${
          this.state.changeHeader ? "mobile-menu-header" : ""
        }`}
      >
        <div>
          <div className="header-left-box">
            <div className="header-mo-gnb">
              <ul>
                <input type="checkbox" onClick={this.setMobileMwnu}></input>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            {/* moblie ver gnb */}
            <NavLink to={"/"}>
              <div className="header-logo">
                <Logo />
              </div>
            </NavLink>
            <div className="header-gnb">
              <ul>
                <NavLink to={"/boxoffice/daily"} activeClassName="active">
                  <li>일별 랭킹</li>
                </NavLink>
                <NavLink to={"/boxoffice/week"} activeClassName="active">
                  <li>주간 랭킹</li>
                </NavLink>
                <NavLink to={"/boxoffice/weekend"} activeClassName="active">
                  <li>주말 랭킹</li>
                </NavLink>
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
            <NavLink to={"/boxoffice/daily"} activeClassName="active">
              <li>일별 랭킹</li>
            </NavLink>
            <NavLink to={"/boxoffice/week"} activeClassName="active">
              <li>주간 랭킹</li>
            </NavLink>
            <NavLink to={"/boxoffice/weekend"} activeClassName="active">
              <li>주말 랭킹</li>
            </NavLink>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
