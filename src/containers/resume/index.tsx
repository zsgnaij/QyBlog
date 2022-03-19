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
              细节控，逻辑思维能力强。
            </div>
          </div>
          <div className="qy-row">
            <div className="flex flex-wrap">
              <div className="info-box flex w-full min-w-full md:w-1/3 md:min-w-1/3 items-center">
                <svg className="icon text-2xl" aria-hidden="true">
                  <use xlinkHref="#icon-phone" />
                </svg>
                <code className="h-6 leading-6">18057950097</code>
              </div>
              <div className="info-box flex w-full min-w-full md:w-1/3 md:min-w-1/3 items-center">
                <svg className="icon text-2xl" aria-hidden="true">
                  <use xlinkHref="#icon-github" />
                </svg>
                <code className="h-6 leading-6">
                  <a
                    href="https://github.com/zsgnaij"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @zsgnaij
                  </a>
                </code>
              </div>
              <div className="info-box flex w-full min-w-full md:w-1/3 md:min-w-1/3 items-center">
                <svg className="icon text-2xl" aria-hidden="true">
                  <use xlinkHref="#icon-mail" />
                </svg>
                <code className="h-6 leading-6">18057950097@163.com</code>
              </div>
            </div>
          </div>
          <div className="qy-row">
            <div className="flex items-center">
              <svg className="icon text-2xl sm:text-3xl" aria-hidden="true">
                <use xlinkHref="#icon-education" />
              </svg>
              <h1 className="text-xl sm:text-2xl font-medium sm:font-semibold">
                教育
              </h1>
            </div>
            <div className="content-box">
              <div className="left-col">
                <div className="text-base sm:text-xl font-medium sm:font-semibold">
                  2013-2017
                </div>
              </div>
              <div className="right-col">
                <div className="text-xl font-medium">重庆科技学院</div>
                <div>机械电子工程 本科</div>
              </div>
            </div>
          </div>
          <div className="qy-row">
            <div className="flex items-center">
              <svg className="icon text-2xl sm:text-3xl" aria-hidden="true">
                <use xlinkHref="#icon-work" />
              </svg>
              <h1 className="text-xl sm:text-2xl font-medium sm:font-semibold">
                工作经历
              </h1>
            </div>
            <div className="content-box">
              <div className="left-col">
                <div className="text-base sm:text-xl font-medium sm:font-semibold">
                  2022
                </div>
                <div className="text-sm time-range">2020.01-至今</div>
              </div>
              <div className="right-col">
                <div className="text-xl font-medium">新华三技术有限公司</div>
                <div>Web前端开发、小程序开发</div>
              </div>
            </div>
            <div className="content-box">
              <div className="left-col">
                <div className="text-base sm:text-xl font-medium sm:font-semibold">
                  2020
                </div>
                <div className="text-sm time-range">2019.01-2020.01</div>
              </div>
              <div className="right-col">
                <div className="text-xl font-medium">新华三技术有限公司</div>
                <div>Java、NodeJS后端开发、小程序开发</div>
              </div>
            </div>
            <div className="content-box">
              <div className="left-col">
                <div className="text-base sm:text-xl font-medium sm:font-semibold">
                  2018
                </div>
                <div className="text-sm time-range">2017.09-2018.12</div>
              </div>
              <div className="right-col">
                <div className="text-xl font-medium">
                  浙江光合太阳能科技有限公司
                </div>
                <div>Java后端开发</div>
              </div>
            </div>
          </div>
          <div className="qy-row">
            <div className="flex items-center">
              <svg className="icon text-2xl sm:text-3xl" aria-hidden="true">
                <use xlinkHref="#icon-project" />
              </svg>
              <h1 className="text-xl sm:text-2xl font-medium sm:font-semibold">
                项目经历
              </h1>
            </div>
            <div className="content-box">
              <div className="left-col">
                <div className="text-base sm:text-xl font-medium sm:font-semibold">
                  2022
                </div>
                <div className="text-sm time-range">2020.01-至今</div>
              </div>
              <div className="right-col">
                <div className="text-xl font-medium">H3C物联网平台</div>
                <div>Java、NodeJS后端开发、小程序开发</div>
                <span>
                  涉及物联网智慧办公、智慧教室、平台管理和蜂巢边缘计算等项目开发。
                  -
                  基于create-react-app&webpack搭建项目，集成相关插件实现打包优化和版本跟踪。
                  - 使用webpack-dev-server搭建本地开发环境
                  ，配置proxy代理远程数据，集成mock模拟本地数据。 - 使用Antd
                  ConfigProvider&react-intl实现项目国际化。 -
                  使用react-router实现前端路由，使用@loadable/component实现页面懒加载。
                  - 使用PureComponent&Memo优化代码，减少不必要的组件渲染。 -
                  参与封装公共函数ActionReducer，(组合Redux和fetch)，实现快速注册请求方法，并将数据托管给Redux。
                  - 根据项目需求
                  技术栈：React、JavaScript、less、antd、webpack。
                </span>
              </div>
            </div>
            <div className="content-box">
              <div className="left-col">
                <div className="text-base sm:text-xl font-medium sm:font-semibold">
                  2021
                </div>
                <div className="text-sm time-range">2020.11-2021.03</div>
              </div>
              <div className="right-col">
                <div className="text-xl font-medium">
                  IBox一体机物联网应用管理
                </div>
                <div>
                  负责IBox一体机应用管理消息模板、告警中心开发。 -
                  使用element-resize-detector实现告警卡片自适应布局。 -
                  基于element-ui封装自定义组件SelectTree。 -
                  使用vue-router管理前端路由。 - 使用vuex管理数据。
                  技术栈：Vue2、JavaScript、less、element-ui、webpack。
                </div>
              </div>
            </div>
            <div className="content-box">
              <div className="left-col">
                <div className="text-base sm:text-xl font-medium sm:font-semibold">
                  2021
                </div>
                <div className="text-sm time-range">2019.04-2021.10</div>
              </div>
              <div className="right-col">
                <div className="text-xl font-medium">
                  H3C小物精灵、智慧办公、智慧空间小程序
                </div>
                <div>
                  H3C小物精灵、智慧办公、智慧空间小程序开发。 -
                  移植物联网设备运维页面至小程序，实现小程序段的设备管理以及设备工勘的需求。
                  - 实现 - 封装自定义组件SpaceTree，实现小程序端的空间树选择。
                  技术栈：JavaScript、Echarts、HTML5、CSS3、WEUI。
                </div>
              </div>
            </div>
            <div className="content-box">
              <div className="left-col">
                <div className="text-base sm:text-xl font-medium sm:font-semibold">
                  2020
                </div>
                <div className="text-sm time-range">2017.09-2020.01</div>
              </div>
              <div className="right-col">
                <div className="text-xl font-medium">Java、Nodejs后端开发</div>
                <div>
                  涉及物联网智慧办公、小程序websocket代理服务和账户权限管理。 -
                  负责公司后台业务开发以及虚拟机、数据库性能优化。 -
                  负责公司小程序代理服务器开发，使用websocket协议实现无公网IP服务器与小程序的通信，包括Java
                  Netty版本和NodeJS版本。
                  技术栈：Java、NodeJS、MongoDB、K8S、Docker、MySQL、HTML5、CSS3、JQuery。
                </div>
              </div>
            </div>
          </div>
          <div className="qy-row">
            <div className="flex items-center">
              <svg className="icon text-2xl sm:text-3xl" aria-hidden="true">
                <use xlinkHref="#icon-mine" />
              </svg>
              <h1 className="text-xl sm:text-2xl font-medium sm:font-semibold">
                个人
              </h1>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Resume;
