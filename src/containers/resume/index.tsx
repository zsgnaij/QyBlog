/**
 * 个人简历
 */
import React, { Component } from 'react';
import '@assets/iconfonts/iconfont.css';
import '@assets/iconfonts/iconfont.js';
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
              <svg className="icon text-2xl" aria-hidden="true">
                <use xlinkHref="#icon-phone" />
              </svg>
              <code className="h-6 leading-6">18057950097</code>
            </div>
            <div className="info-box flex w-full min-w-full sm:w-1/3 sm:min-w-1/3 items-center">
              <svg className="icon text-2xl" aria-hidden="true">
                <use xlinkHref="#icon-wechat" />
              </svg>
              <code className="h-6 leading-6">jsz952368217</code>
            </div>
            <div className="info-box flex w-full min-w-full sm:w-1/3 sm:min-w-1/3 items-center">
              <svg className="icon text-2xl" aria-hidden="true">
                <use xlinkHref="#icon-mail" />
              </svg>
              <code className="h-6 leading-6">18057950097@163.com</code>
            </div>
          </div>
          <div className="qy-row">
            <div className="flex items-center">
              <svg className="icon text-3xl" aria-hidden="true">
                <use xlinkHref="#icon-education" />
              </svg>
              <h1 className="text-2xl font-medium sm:font-semibold">教育</h1>
            </div>
          </div>
          <div className="qy-row">
            <div className="flex items-center">
              <svg className="icon text-3xl" aria-hidden="true">
                <use xlinkHref="#icon-work" />
              </svg>
              <h1 className="text-2xl font-medium sm:font-semibold">
                工作经历
              </h1>
            </div>
          </div>
          <div className="qy-row">
            <div className="flex items-center">
              <svg className="icon text-3xl" aria-hidden="true">
                <use xlinkHref="#icon-project" />
              </svg>
              <h1 className="text-2xl font-medium sm:font-semibold">
                项目经历
              </h1>
            </div>
          </div>
          <div className="qy-row">
            <div className="flex items-center">
              <svg className="icon text-3xl" aria-hidden="true">
                <use xlinkHref="#icon-mine" />
              </svg>
              <h1 className="text-2xl font-medium sm:font-semibold">个人</h1>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Resume;
