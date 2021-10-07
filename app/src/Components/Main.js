import React, {Component} from 'react';
import $ from 'jquery';
import logo from './images/logo.svg'
import '../css/Main.css';
import '../css/loginForm.css'
import '../css/footer.css'

class Main extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    loginFunc=()=>{
        alert('로그인')
        this.props.history.push('/totalFeed')
    }
    componentDidMount(){
        var totalWidth=0;
        $(window).resize(function(){
            totalWidth= $(window).width();
        })
    }
    render(){
        return(
          <div id="main">
          <header id="header">
  
            <div id="header-main">
              <div id="logo">
                <img src={logo}></img>
                <h1>Facebook에서 전세계에 있는<br /> 친구, 가족들과 이야기를 나눠보세요.</h1>
              </div>
  
              <div id="login-area">
                <form id="login-form">
                  <input type="text" placeholder="이메일 또는 전화번호"></input><br />
                  <input type="text" placeholder="비밀번호"></input><br />
                  <button onClick={this.loginFunc} id="login-btn">로그인</button>
                  <h1>비밀번호를 잊으셨나요?</h1>
                  <span className="line"></span>
                  <button onClick={this.loginFunc} id="new-acc-btn">새계정 만들기</button>
                </form>
                <h2>유명인, 밴드, 비즈니스를 위한 <a href="#">페이지 만들기</a></h2>
              </div>
            </div>
  
  
          </header>
          <footer id="footer">
  
            <div id="footer-page">
              <div id="bottom-menu1">
                <ul>
                  <li>한국어</li>
                  <li><a href="#">English (US)</a></li>
                  <li><a href="#">Tiếng Việt</a></li>
                  <li><a href="#">Bahasa Indonesia</a></li>
                  <li><a href="#">ภาษาไทย</a></li>
                  <li><a href="#">Español</a></li>
                  <li><a href="#">中文(简体)</a></li>
                  <li><a href="#">日本語</a></li>
                  <li><a href="#">Português (Brasil)</a></li>
                  <li><a href="#">Français (France)</a></li>
                  <li><a href="#">Deutsch</a></li>
                </ul>
              </div>
  
              <div id="bottom-menu2">
                <ul id="bottom-menu2">
                  <li><a href="#">가입하기</a></li>
                  <li><a href="#">로그인</a></li>
                  <li><a href="#">Messenger</a></li>
                  <li><a href="#">Facebook Lite</a></li>
                  <li><a href="#">Watch</a></li>
                  <li><a href="#">장소</a></li>
                  <li><a href="#">게임</a></li>
                  <li><a href="#">Marketplace</a></li>
                  <li><a href="#">Facebook Pay</a></li>
                  <li><a href="#">채용 정보</a></li>
                  <li><a href="#">Oculus</a></li>
                  <li><a href="#">Portal</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">지역</a></li>
                </ul>
              </div>
  
              <h1 className="footer-line"></h1>
  
              <div id="bottom-menu3">
                <ul>
                  <li><a href="#">기부 캠페인</a></li>
                  <li><a href="#">서비스</a></li>
                  <li><a href="#">투표 정보 센터</a></li>
                  <li><a href="#">정보</a></li>
                  <li><a href="#">광고 만들기</a></li>
                  <li><a href="#">페이지 만들기</a></li>
                  <li><a href="#">개발자</a></li>
                  <li><a href="#">채용 정보</a></li>
                  <li><a href="#">개인정보처리방침</a></li>
                  <li><a href="#">쿠키</a></li>
                  <li><a href="#">AdChoices</a></li>
                  <li><a href="#">이용 약관</a></li>
                  <li><a href="#">고객 센터</a></li>
                </ul>
              </div>
  
              <div id="copyright">
              <ul>
                  <li><a href="#">Facebook © 2021</a></li>
              </ul>
              </div>
            </div>
  
          </footer>
  
        </div>
        )
    }

}

export default Main;