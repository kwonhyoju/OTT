import React,{Component} from "react";
import Logo from "../../svg/Logo";

class Footer extends Component{
    render(){
        return<footer className="footer">
            <div className="footer-wrap">
                <Logo/>
                <p>이용약관 개인정보처리방침 책임의 한계와 법적고지 영화 고객센터<br/>본 콘텐츠의 저작권은 저작권자 또는 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적 책임을 질 수 있습니다.<span>MovieOn Copyright © MovieOn Corp. All Rights Reserved.</span></p>
            </div>
        </footer>;
    }
}

export default Footer;