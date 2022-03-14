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
            <div className="title-text text-2xl sm:text-3xl font-medium sm:font-semibold">
              个人简历
            </div>
          </div>
        </header>
        <article className="main">
          <div className="introduction">
            <div className="introduction-i" />
            <div className="introduction-content">
              性别：男
              <br />
              籍贯：浙江金华
              <br />
              细节控，逻辑思维能力与同理心强。
            </div>
          </div>
          <div className="qy-row">
            <div className="info-box flex w-full min-w-full sm:w-1/3 sm:min-w-1/3 items-center">
              <i className="iconfont icon-phone text-2xl" />
              <code className="h-6 leading-6">18057950097</code>
            </div>
            <div className="info-box flex w-full min-w-full sm:w-1/3 sm:min-w-1/3 items-center">
              <i className="iconfont icon-wechat text-2xl" />
              <code className="h-6 leading-6">jsz952368217</code>
            </div>
            <div className="info-box flex w-full min-w-full sm:w-1/3 sm:min-w-1/3 items-center">
              <i className="iconfont icon-email text-2xl" />
              <code className="h-6 leading-6">18057950097@163.com</code>
            </div>
          </div>
          <h1>教育</h1>
          <h1>工作经历</h1>
          <h1>项目经历</h1>
          <h1>个人</h1>
        </article>
      </div>
    );
  }
}

export default Resume;
