import React from 'react';
import wallpaper from '../assets/images/body-bg.svg';
import skyBG from '../assets/images/sky-bg.jpg';
import HeaderParallax from './HeaderParallax';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      navOpacityFull: false
    };
  }
  render(){
    return (
      <div className="header-and-nav">
        <style jsx>{`
          .header-and-nav {
            height: 100vh;
          }
          .header-container {
            height: 100%;
            background-color: white;
            position: relative;
            z-index: 2;
            -webkit-animation: color-change 14s linear infinite;
                    animation: color-change 14s linear infinite;
          }
          @-webkit-keyframes color-change {
            0% {
              background-color: #8bd8fb;
            }
            50% {
              background-color: white;
            }
            100% {
              background-color: #8bd8fb;
            }
          }
          @keyframes color-change {
            0% {
              background-color: #8bd8fb;
            }
            50% {
              background-color: white;
            }
            100% {
              background-color: #8bd8fb;
            }
          }
          .wallpaper-div {
            background-image: url(${wallpaper});
            height: 100%;
            background-repeat: repeat-y;
            background-size: cover;
            background-position: bottom;
            position: -webkit-sticky;
            position: sticky;
            top: -525px;
          }
          .background-img2 {
            background-image: url(${skyBG});
            background-size: 25%;
            background-position: 50% 50%;
            position: absolute;
            top: 0%;
            left: 0%;
            height: 100%;
            width: 100%;
          }
          .background-img {
            height: 100%;
            width: 100%;
            background-image: url(${skyBG});
            background-size: 10%;
            background-position: center;
            opacity: .1;
            -webkit-animation: opacity-change 1.5s ease-in;
                    animation: opacity-change 1.5s ease-in;
            position: absolute;
            top: 0%;
            bottom: 0%;
          }
          @-webkit-keyframes opacity-change {
            0% {
              opacity: .5;
              background-size: 33%;
            }

            100% {
              opacity: .1;
              background-size: 10%;
            }
          }
          @keyframes opacity-change {
            0% {
              opacity: .5;
              background-size: 33%;
            }

            100% {
              opacity: .1;
              background-size: 10%;
            }
          }
          .header-overlay {
            background: -webkit-linear-gradient(233deg,rgba(33, 150, 243, 0.33),rgba(255,0,0,0) 70.71%), -webkit-linear-gradient(305deg,rgba(0, 67, 255, 0),rgba(0,255,0,0) 70.71%), -webkit-linear-gradient(114deg,rgba(161, 170, 197, 0),rgba(0,0,255,0) 70.71%);
            background: -o-linear-gradient(233deg,rgba(33, 150, 243, 0.33),rgba(255,0,0,0) 70.71%), -o-linear-gradient(305deg,rgba(0, 67, 255, 0),rgba(0,255,0,0) 70.71%), -o-linear-gradient(114deg,rgba(161, 170, 197, 0),rgba(0,0,255,0) 70.71%);
            background: linear-gradient(217deg,rgba(33, 150, 243, 0.33),rgba(255,0,0,0) 70.71%), linear-gradient(145deg,rgba(0, 67, 255, 0),rgba(0,255,0,0) 70.71%), linear-gradient(336deg,rgba(161, 170, 197, 0),rgba(0,0,255,0) 70.71%);
            height: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            z-index: 3;
          }
            `}</style>
          <div className="header-container">
            <div className="background-img2"></div>
            <div className="wallpaper-div">
              <div className="background-img">
              </div>
              <div className="header-overlay">
                <HeaderParallax />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Header;
