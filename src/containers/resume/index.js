/**
 * 个人简历
 */
import React, { Component } from 'react';
import '@assets/iconfonts/iconfont.css';
import './index.less';

class Resume extends Component {
  state = {};

  render() {
    return (
      <div className="resume">
        <header>
          <div className="header-img"></div>
          <div className="title">
            <div className="banner"></div>
            <div className="title-text">个人简历</div>
          </div>
        </header>
        <article className="main">
          <div className="introduction">
            <div className="introduction-content">
              性别：男
              <br />
              籍贯：浙江金华
              <br />
              细节控，逻辑思维能力与同理心强，擅长产品设计与交互设计。
            </div>
          </div>
          <div className="qy-row">
            <div>
              <i className="iconfont"></i>
            </div>
            <div>
              <i className="iconfont"></i>
            </div>
            <div>
              <i className="iconfont"></i>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Resume;
