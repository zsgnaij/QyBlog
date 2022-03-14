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
          <div className="header-img" />
          <div className="title">
            <div className="banner" />
            <div className="title-text text-4xl font-semibold sm:text-2xl sm:font-medium">
              个人简历
            </div>
          </div>
        </header>
        <article className="main">
          <div className="introduction">
            <div className="introduction-content">
              性别：男
              <br />
              籍贯：浙江金华
              <br />
              细节控，逻辑思维能力与同理心强。
            </div>
          </div>
          <div className="qy-row">
            <div className="w-1/3 sm:w-full">
              <i className="iconfont icon-phone text-2xl" />
            </div>
            <div className="w-1/3 sm:w-full">
              <i className="iconfont icon-wechat text-2xl" />
            </div>
            <div className="w-1/3 sm:w-full">
              <i className="iconfont icon-email text-2xl" />
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Resume;
